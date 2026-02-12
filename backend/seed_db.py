import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Mock data from frontend
destinations_data = [
    {
        "id": "dest_bodh_gaya",
        "name": "Bodh Gaya",
        "description": "Sacred Buddhist pilgrimage site with the Mahabodhi Temple",
        "image": "https://images.unsplash.com/photo-1747224652373-8b97724573c7",
        "price": "₹12,999",
        "duration": "3 Days / 2 Nights",
        "rating": 4.8,
        "country": "india",
        "location": "Bihar"
    },
    {
        "id": "dest_nalanda",
        "name": "Nalanda",
        "description": "Ancient university ruins and UNESCO World Heritage Site",
        "image": "https://images.unsplash.com/photo-1651493251953-4f8eb4274dc7",
        "price": "₹9,999",
        "duration": "2 Days / 1 Night",
        "rating": 4.6,
        "country": "india",
        "location": "Bihar"
    },
    {
        "id": "dest_rajgir",
        "name": "Rajgir",
        "description": "Hot springs and ancient Buddhist monasteries",
        "image": "https://images.unsplash.com/photo-1655306160334-ddedcbb5f431",
        "price": "₹11,499",
        "duration": "3 Days / 2 Nights",
        "rating": 4.7,
        "country": "india",
        "location": "Bihar"
    },
    {
        "id": "dest_kathmandu",
        "name": "Kathmandu Valley",
        "description": "Historic temples, vibrant culture, and UNESCO sites",
        "image": "https://images.unsplash.com/photo-1593787812081-4310a86dad9b",
        "price": "₹24,999",
        "duration": "4 Days / 3 Nights",
        "rating": 4.9,
        "country": "nepal",
        "location": "Kathmandu"
    },
    {
        "id": "dest_pokhara",
        "name": "Pokhara",
        "description": "Serene lakes with stunning Himalayan backdrop",
        "image": "https://images.unsplash.com/photo-1488249949762-27e8bf62988b",
        "price": "₹28,999",
        "duration": "5 Days / 4 Nights",
        "rating": 4.8,
        "country": "nepal",
        "location": "Pokhara"
    },
    {
        "id": "dest_everest",
        "name": "Everest Base Camp",
        "description": "Legendary trek to the base of world's highest peak",
        "image": "https://images.unsplash.com/photo-1670126426026-9ce4666817e7",
        "price": "₹89,999",
        "duration": "12 Days / 11 Nights",
        "rating": 5.0,
        "country": "nepal",
        "location": "Everest Region"
    },
    {
        "id": "dest_chitwan",
        "name": "Chitwan National Park",
        "description": "Wildlife safari and jungle adventures",
        "image": "https://images.unsplash.com/photo-1634042405693-2d4170d138a6",
        "price": "₹32,999",
        "duration": "4 Days / 3 Nights",
        "rating": 4.7,
        "country": "nepal",
        "location": "Chitwan"
    }
]

packages_data = [
    {
        "id": "pkg_buddhist_circuit",
        "title": "Buddhist Circuit Tour",
        "description": "Explore the sacred Buddhist sites of Bihar including Bodh Gaya, Nalanda, and Rajgir",
        "image": "https://images.unsplash.com/photo-1631938341407-63282a1bc862",
        "price": "₹18,999",
        "duration": "5 Days / 4 Nights",
        "destinations": ["Bodh Gaya", "Nalanda", "Rajgir"],
        "highlights": [
            "Mahabodhi Temple visit",
            "Ancient Nalanda University ruins",
            "Hot springs in Rajgir",
            "Professional guide included"
        ],
        "rating": 4.8,
        "reviews": 156,
        "itinerary": [
            {"day": 1, "title": "Arrival in Bodh Gaya", "description": "Visit Mahabodhi Temple"},
            {"day": 2, "title": "Bodh Gaya Exploration", "description": "Full day temple tour"},
            {"day": 3, "title": "Nalanda Visit", "description": "Ancient university ruins tour"},
            {"day": 4, "title": "Rajgir Hot Springs", "description": "Relax and explore"},
            {"day": 5, "title": "Departure", "description": "Return journey"}
        ],
        "included": ["Accommodation", "Transportation", "Guide", "Breakfast"],
        "excluded": ["Lunch", "Dinner", "Personal expenses"]
    },
    {
        "id": "pkg_nepal_highlights",
        "title": "Nepal Highlights Tour",
        "description": "Discover the best of Nepal from Kathmandu's heritage to Pokhara's natural beauty",
        "image": "https://images.unsplash.com/photo-1567866611065-9d7d7ec54b6a",
        "price": "₹45,999",
        "duration": "7 Days / 6 Nights",
        "destinations": ["Kathmandu", "Pokhara", "Chitwan"],
        "highlights": [
            "UNESCO World Heritage sites",
            "Phewa Lake boat ride",
            "Jungle safari in Chitwan",
            "Mountain flight option available"
        ],
        "rating": 4.9,
        "reviews": 243,
        "itinerary": [
            {"day": 1, "title": "Arrival in Kathmandu", "description": "City tour"},
            {"day": 2, "title": "Kathmandu Heritage", "description": "UNESCO sites visit"},
            {"day": 3, "title": "Drive to Pokhara", "description": "Scenic journey"},
            {"day": 4, "title": "Pokhara Exploration", "description": "Lake and mountain views"},
            {"day": 5, "title": "Chitwan Safari", "description": "Wildlife adventure"},
            {"day": 6, "title": "Chitwan Activities", "description": "Jungle activities"},
            {"day": 7, "title": "Departure", "description": "Return to Kathmandu"}
        ],
        "included": ["Hotels", "Transport", "Meals", "Safari", "Guide"],
        "excluded": ["International flights", "Visa fees", "Personal expenses"]
    },
    {
        "id": "pkg_himalayan_adventure",
        "title": "Himalayan Adventure",
        "description": "Ultimate adventure combining trekking, culture, and breathtaking mountain views",
        "image": "https://images.unsplash.com/photo-1670183856383-7f85360386c7",
        "price": "₹95,999",
        "duration": "14 Days / 13 Nights",
        "destinations": ["Kathmandu", "Everest Base Camp", "Pokhara"],
        "highlights": [
            "Everest Base Camp trek",
            "Sherpa village experience",
            "Himalayan sunrise views",
            "All permits and gear included"
        ],
        "rating": 5.0,
        "reviews": 89,
        "itinerary": [
            {"day": 1, "title": "Kathmandu Arrival", "description": "Trek briefing"},
            {"day": 2, "title": "Fly to Lukla", "description": "Trek begins"},
            {"day": 3-11, "title": "Everest Base Camp Trek", "description": "Multi-day trekking"},
            {"day": 12, "title": "Fly to Kathmandu", "description": "Rest day"},
            {"day": 13, "title": "Pokhara Visit", "description": "Relaxation"},
            {"day": 14, "title": "Departure", "description": "Return home"}
        ],
        "included": ["Trekking permits", "Guide & porter", "Accommodation", "Meals", "Gear"],
        "excluded": ["International flights", "Nepal visa", "Personal gear", "Tips"]
    }
]

testimonials_data = [
    {
        "id": "test_1",
        "name": "Priya Sharma",
        "location": "Mumbai, India",
        "image": "https://images.pexels.com/photos/28096282/pexels-photo-28096282.jpeg",
        "rating": 5,
        "comment": "The Buddhist Circuit tour was a life-changing experience. The organization was flawless, and our guide was incredibly knowledgeable about Bihar's rich heritage.",
        "tour": "Buddhist Circuit Tour",
        "approved": True
    },
    {
        "id": "test_2",
        "name": "Rajesh Kumar",
        "location": "Delhi, India",
        "image": "https://images.unsplash.com/photo-1558511916-905a523564c6",
        "rating": 5,
        "comment": "Nepal trip exceeded all expectations! From the majestic Himalayas to the warm hospitality, everything was perfect. Highly recommend this travel company.",
        "tour": "Nepal Highlights Tour",
        "approved": True
    },
    {
        "id": "test_3",
        "name": "Anita Patel",
        "location": "Bangalore, India",
        "image": "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg",
        "rating": 5,
        "comment": "Our family had an amazing time exploring Bihar's ancient sites. The itinerary was well-planned, and accommodations were excellent. Will definitely book again!",
        "tour": "Buddhist Circuit Tour",
        "approved": True
    }
]

async def seed_database():
    print("Seeding database...")
    
    # Clear existing data
    await db.destinations.delete_many({})
    await db.packages.delete_many({})
    await db.testimonials.delete_many({})
    
    # Insert destinations
    if destinations_data:
        await db.destinations.insert_many(destinations_data)
        print(f"✓ Inserted {len(destinations_data)} destinations")
    
    # Insert packages
    if packages_data:
        await db.packages.insert_many(packages_data)
        print(f"✓ Inserted {len(packages_data)} packages")
    
    # Insert testimonials
    if testimonials_data:
        await db.testimonials.insert_many(testimonials_data)
        print(f"✓ Inserted {len(testimonials_data)} testimonials")
    
    print("Database seeding completed!")
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
