from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
destinations_collection = db.destinations
packages_collection = db.packages
bookings_collection = db.bookings
inquiries_collection = db.inquiries
testimonials_collection = db.testimonials
