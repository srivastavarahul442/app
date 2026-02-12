from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List, Optional

from models import (
    Destination, DestinationCreate,
    Package, PackageCreate,
    Booking, BookingCreate, BookingUpdate,
    ContactInquiry, ContactInquiryCreate, InquiryUpdate,
    Testimonial, TestimonialCreate,
    AdminLogin, AdminToken,
    SearchQuery
)
from database import (
    destinations_collection,
    packages_collection,
    bookings_collection,
    inquiries_collection,
    testimonials_collection
)
from auth import authenticate_admin, create_access_token, verify_token

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="TravelHub API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

security = HTTPBearer()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Dependency for admin authentication
async def verify_admin_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

# ============= PUBLIC ROUTES =============

@api_router.get("/")
async def root():
    return {"message": "TravelHub API v1.0", "status": "running"}

# Destinations
@api_router.get("/destinations", response_model=List[Destination])
async def get_destinations(country: Optional[str] = None):
    query = {}
    if country:
        query["country"] = country.lower()
    destinations = await destinations_collection.find(query, {"_id": 0}).to_list(100)
    return destinations

@api_router.get("/destinations/{destination_id}", response_model=Destination)
async def get_destination(destination_id: str):
    destination = await destinations_collection.find_one({"id": destination_id}, {"_id": 0})
    if not destination:
        raise HTTPException(status_code=404, detail="Destination not found")
    return destination

# Packages
@api_router.get("/packages", response_model=List[Package])
async def get_packages():
    packages = await packages_collection.find({}, {"_id": 0}).to_list(100)
    return packages

@api_router.get("/packages/{package_id}", response_model=Package)
async def get_package(package_id: str):
    package = await packages_collection.find_one({"id": package_id}, {"_id": 0})
    if not package:
        raise HTTPException(status_code=404, detail="Package not found")
    return package

# Testimonials
@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    testimonials = await testimonials_collection.find({"approved": True}, {"_id": 0}).to_list(100)
    return testimonials

# Bookings
@api_router.post("/bookings", response_model=Booking)
async def create_booking(booking: BookingCreate):
    # Get package details to calculate total
    package = await packages_collection.find_one({"id": booking.package_id}, {"_id": 0})
    if not package:
        raise HTTPException(status_code=404, detail="Package not found")
    
    booking_obj = Booking(**booking.dict(), total_amount=package["price"])
    await bookings_collection.insert_one(booking_obj.dict())
    logger.info(f"New booking created: {booking_obj.booking_id}")
    return booking_obj

# Contact Inquiries
@api_router.post("/contact", response_model=ContactInquiry)
async def create_inquiry(inquiry: ContactInquiryCreate):
    inquiry_obj = ContactInquiry(**inquiry.dict())
    await inquiries_collection.insert_one(inquiry_obj.dict())
    logger.info(f"New inquiry received from: {inquiry.email}")
    return inquiry_obj

# Search
@api_router.post("/search")
async def search(search_query: SearchQuery):
    query = search_query.query.lower()
    results = {"destinations": [], "packages": []}
    
    # Search destinations
    dest_filter = {"$or": [
        {"name": {"$regex": query, "$options": "i"}},
        {"description": {"$regex": query, "$options": "i"}},
        {"location": {"$regex": query, "$options": "i"}}
    ]}
    if search_query.country:
        dest_filter["country"] = search_query.country.lower()
    
    destinations = await destinations_collection.find(dest_filter, {"_id": 0}).to_list(20)
    results["destinations"] = destinations
    
    # Search packages
    pkg_filter = {"$or": [
        {"title": {"$regex": query, "$options": "i"}},
        {"description": {"$regex": query, "$options": "i"}},
        {"destinations": {"$regex": query, "$options": "i"}}
    ]}
    packages = await packages_collection.find(pkg_filter, {"_id": 0}).to_list(20)
    results["packages"] = packages
    
    return results

# ============= ADMIN ROUTES =============

@api_router.post("/admin/login", response_model=AdminToken)
async def admin_login(credentials: AdminLogin):
    if not authenticate_admin(credentials.username, credentials.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token({"sub": credentials.username, "role": "admin"})
    return AdminToken(access_token=access_token)

# Admin - Bookings
@api_router.get("/admin/bookings", response_model=List[Booking])
async def get_all_bookings(admin=Depends(verify_admin_token)):
    bookings = await bookings_collection.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return bookings

@api_router.put("/admin/bookings/{booking_id}", response_model=Booking)
async def update_booking(booking_id: str, update: BookingUpdate, admin=Depends(verify_admin_token)):
    booking = await bookings_collection.find_one({"id": booking_id}, {"_id": 0})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    
    update_data = {k: v for k, v in update.dict().items() if v is not None}
    if update_data:
        await bookings_collection.update_one({"id": booking_id}, {"$set": update_data})
        booking = await bookings_collection.find_one({"id": booking_id}, {"_id": 0})
    
    return booking

@api_router.delete("/admin/bookings/{booking_id}")
async def delete_booking(booking_id: str, admin=Depends(verify_admin_token)):
    result = await bookings_collection.delete_one({"id": booking_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking deleted successfully"}

# Admin - Inquiries
@api_router.get("/admin/inquiries", response_model=List[ContactInquiry])
async def get_all_inquiries(admin=Depends(verify_admin_token)):
    inquiries = await inquiries_collection.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return inquiries

@api_router.put("/admin/inquiries/{inquiry_id}", response_model=ContactInquiry)
async def update_inquiry(inquiry_id: str, update: InquiryUpdate, admin=Depends(verify_admin_token)):
    inquiry = await inquiries_collection.find_one({"id": inquiry_id}, {"_id": 0})
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    
    update_data = {k: v for k, v in update.dict().items() if v is not None}
    if update_data:
        await inquiries_collection.update_one({"id": inquiry_id}, {"$set": update_data})
        inquiry = await inquiries_collection.find_one({"id": inquiry_id}, {"_id": 0})
    
    return inquiry

# Admin - Destinations
@api_router.post("/admin/destinations", response_model=Destination)
async def create_destination(destination: DestinationCreate, admin=Depends(verify_admin_token)):
    dest_obj = Destination(**destination.dict())
    await destinations_collection.insert_one(dest_obj.dict())
    return dest_obj

@api_router.put("/admin/destinations/{destination_id}", response_model=Destination)
async def update_destination(destination_id: str, destination: DestinationCreate, admin=Depends(verify_admin_token)):
    result = await destinations_collection.update_one(
        {"id": destination_id},
        {"$set": destination.dict()}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Destination not found")
    
    updated_dest = await destinations_collection.find_one({"id": destination_id}, {"_id": 0})
    return updated_dest

@api_router.delete("/admin/destinations/{destination_id}")
async def delete_destination(destination_id: str, admin=Depends(verify_admin_token)):
    result = await destinations_collection.delete_one({"id": destination_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Destination not found")
    return {"message": "Destination deleted successfully"}

# Admin - Packages
@api_router.post("/admin/packages", response_model=Package)
async def create_package(package: PackageCreate, admin=Depends(verify_admin_token)):
    pkg_obj = Package(**package.dict())
    await packages_collection.insert_one(pkg_obj.dict())
    return pkg_obj

@api_router.put("/admin/packages/{package_id}", response_model=Package)
async def update_package(package_id: str, package: PackageCreate, admin=Depends(verify_admin_token)):
    result = await packages_collection.update_one(
        {"id": package_id},
        {"$set": package.dict()}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Package not found")
    
    updated_pkg = await packages_collection.find_one({"id": package_id}, {"_id": 0})
    return updated_pkg

@api_router.delete("/admin/packages/{package_id}")
async def delete_package(package_id: str, admin=Depends(verify_admin_token)):
    result = await packages_collection.delete_one({"id": package_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Package not found")
    return {"message": "Package deleted successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    pass
