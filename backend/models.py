from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Destination Models
class DestinationBase(BaseModel):
    name: str
    description: str
    image: str
    price: str
    duration: str
    rating: float
    country: str  # "india" or "nepal"
    location: str

class DestinationCreate(DestinationBase):
    pass

class Destination(DestinationBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True

# Package Models
class PackageBase(BaseModel):
    title: str
    description: str
    image: str
    price: str
    duration: str
    destinations: List[str]
    highlights: List[str]
    rating: float
    reviews: int
    itinerary: Optional[List[dict]] = []
    included: Optional[List[str]] = []
    excluded: Optional[List[str]] = []

class PackageCreate(PackageBase):
    pass

class Package(PackageBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True

# Booking Models
class BookingBase(BaseModel):
    package_id: str
    package_name: str
    customer_name: str
    email: EmailStr
    phone: str
    travelers: int
    travel_date: str
    special_requests: Optional[str] = ""

class BookingCreate(BookingBase):
    pass

class Booking(BookingBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    booking_id: str = Field(default_factory=lambda: f"BK{str(uuid.uuid4())[:8].upper()}")
    total_amount: str
    status: str = "pending"  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True

class BookingUpdate(BaseModel):
    status: Optional[str] = None

# Contact Inquiry Models
class ContactInquiryBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class ContactInquiryCreate(ContactInquiryBase):
    pass

class ContactInquiry(ContactInquiryBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"  # new, responded, closed
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True

class InquiryUpdate(BaseModel):
    status: Optional[str] = None

# Testimonial Models
class TestimonialBase(BaseModel):
    name: str
    location: str
    image: str
    rating: int
    comment: str
    tour: str

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    approved: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True

# Admin Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminToken(BaseModel):
    access_token: str
    token_type: str = "bearer"

# Search Models
class SearchQuery(BaseModel):
    query: str
    country: Optional[str] = None
