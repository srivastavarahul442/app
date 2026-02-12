# Product Requirements Document (PRD)
## Luxury Travel Website - India & Nepal Tours

**Created:** December 13, 2024  
**Last Updated:** December 13, 2024

---

## Original Problem Statement

Design a modern, clean, luxury travel website for India and Nepal tour packages. Inspired by thrillophilia.com but simpler and conversion-focused.

### Requirements:
- Hero section with working search
- Popular destinations (Bihar for India, all major destinations for Nepal)
- Featured packages with demo package cards
- Testimonials section
- Why choose us section
- Call to action
- Contact/inquiry form
- Footer
- Premium, minimal, white + blue theme
- Mobile-first responsive design

---

## User Personas

1. **Spiritual Travelers**: Seeking Buddhist pilgrimage tours in Bihar
2. **Adventure Seekers**: Looking for Himalayan trekking and Nepal adventures
3. **Cultural Explorers**: Interested in heritage sites and local experiences
4. **Family Vacationers**: Planning family trips to India and Nepal

---

## Core Features (Static Requirements)

### Design Requirements
- Premium white + blue color theme
- Clean, minimal aesthetic
- Mobile-first responsive design
- Conversion-optimized layout
- Smooth animations and transitions
- High-quality destination images

### Functional Requirements
- Working search functionality
- Destination filtering (All/Bihar/Nepal)
- Contact form with validation
- Smooth scroll navigation
- Responsive header with mobile menu
- Social media integration

---

## What's Been Implemented (Dec 13, 2024)

### ✅ Frontend Components (Mock Data)
1. **Header Component**
   - Fixed navigation with backdrop blur
   - Mobile-responsive menu
   - Contact information display
   - CTA buttons (Sign In, Book Now)

2. **Hero Section**
   - Full-screen hero with background image (Bihar temple)
   - Working search form (destination, date, travelers)
   - Search functionality with alert confirmation
   - Quick stats display (50+ destinations, 10K+ travelers, 4.9 rating, 15+ years)

3. **Destinations Section**
   - Filter tabs (All/Bihar/Nepal)
   - 3 Bihar destinations: Bodh Gaya, Nalanda, Rajgir
   - 4 Nepal destinations: Kathmandu, Pokhara, Everest Base Camp, Chitwan
   - Hover effects and rating display
   - Price and duration information

4. **Featured Packages**
   - 3 tour packages with full details
   - Package highlights with checkmarks
   - Ratings and review counts
   - Destination badges
   - Pricing display

5. **Testimonials Section**
   - 3 customer testimonials with photos
   - 5-star ratings
   - Tour attribution
   - Additional experience images grid

6. **Why Choose Us Section**
   - 6 benefit cards with icons
   - Trust indicators (500+ packages, 50+ destinations, 98% satisfaction, 24/7 support)
   - Hover animations

7. **Call to Action Section**
   - Prominent CTA with blue background
   - Two action buttons
   - Trust badges

8. **Contact Form**
   - Full contact form (name, email, phone, subject, message)
   - Contact information cards
   - Business hours display
   - Form validation
   - Toast notification on submit

9. **Footer**
   - Company information
   - Quick links navigation
   - Popular destinations links
   - Contact information
   - Social media icons
   - Bottom bar with policies

### Design Implementation
- White + blue premium theme (#2563eb blue-600)
- Shadcn UI components
- Custom animations and transitions
- Smooth scroll behavior
- Responsive grid layouts
- Professional typography
- Hover effects on interactive elements

### Mock Data Structure
- `/app/frontend/src/data/mock.js` contains all static data:
  - Bihar destinations (3)
  - Nepal destinations (4)
  - Featured packages (3)
  - Testimonials (3)
  - Why choose us features (6)
  - Hero images

---

## Prioritized Backlog

### P0 - High Priority (Next Phase)
1. **Backend Development**
   - MongoDB schemas for destinations, packages, inquiries
   - API endpoints for CRUD operations
   - Contact form submission handling
   - Search functionality implementation

2. **Frontend-Backend Integration**
   - Replace mock data with API calls
   - Implement real search with filters
   - Store contact form submissions in database
   - Dynamic content loading

### P1 - Medium Priority
1. Authentication system (Sign In functionality)
2. Booking flow implementation
3. Admin panel for managing packages and destinations
4. Email notifications for inquiries
5. Payment integration

### P2 - Future Enhancements
1. User reviews and ratings system
2. Photo galleries for destinations
3. Blog/Travel guides section
4. Multi-language support
5. Social media feed integration
6. Live chat support
7. Itinerary builder
8. Wishlist functionality

---

## API Contracts & Backend Implementation Plan

### Database Models

#### 1. Destination Model
```python
{
  "_id": ObjectId,
  "name": str,
  "description": str,
  "image": str,
  "price": str,
  "duration": str,
  "rating": float,
  "country": str,  # "india" or "nepal"
  "location": str,  # specific location
  "created_at": datetime,
  "updated_at": datetime
}
```

#### 2. Package Model
```python
{
  "_id": ObjectId,
  "title": str,
  "description": str,
  "image": str,
  "price": str,
  "duration": str,
  "destinations": List[str],
  "highlights": List[str],
  "rating": float,
  "reviews": int,
  "itinerary": List[dict],  # day-wise itinerary
  "included": List[str],
  "excluded": List[str],
  "created_at": datetime,
  "updated_at": datetime
}
```

#### 3. Booking Model
```python
{
  "_id": ObjectId,
  "booking_id": str,  # unique booking reference
  "package_id": str,
  "package_name": str,
  "customer_name": str,
  "email": str,
  "phone": str,
  "travelers": int,
  "travel_date": datetime,
  "special_requests": str,
  "total_amount": str,
  "status": str,  # "pending", "confirmed", "cancelled"
  "created_at": datetime,
  "updated_at": datetime
}
```

#### 4. Contact Inquiry Model
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "phone": str,
  "subject": str,
  "message": str,
  "status": str,  # "new", "responded", "closed"
  "created_at": datetime
}
```

#### 5. Testimonial Model
```python
{
  "_id": ObjectId,
  "name": str,
  "location": str,
  "image": str,
  "rating": int,
  "comment": str,
  "tour": str,
  "approved": bool,
  "created_at": datetime
}
```

### API Endpoints

#### Public APIs
- `GET /api/destinations` - Get all destinations (with optional filter: country)
- `GET /api/destinations/{id}` - Get single destination
- `GET /api/packages` - Get all packages
- `GET /api/packages/{id}` - Get single package
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/bookings` - Create new booking
- `POST /api/contact` - Submit contact inquiry
- `POST /api/search` - Search destinations/packages

#### Admin APIs (Protected)
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/bookings` - Get all bookings
- `PUT /api/admin/bookings/{id}` - Update booking status
- `DELETE /api/admin/bookings/{id}` - Delete booking
- `GET /api/admin/inquiries` - Get all contact inquiries
- `PUT /api/admin/inquiries/{id}` - Update inquiry status
- `POST /api/admin/destinations` - Create destination
- `PUT /api/admin/destinations/{id}` - Update destination
- `DELETE /api/admin/destinations/{id}` - Delete destination
- `POST /api/admin/packages` - Create package
- `PUT /api/admin/packages/{id}` - Update package
- `DELETE /api/admin/packages/{id}` - Delete package

### Mock Data to Replace
All data in `/app/frontend/src/data/mock.js` will be replaced with API calls:
- `biharDestinations` → GET /api/destinations?country=india
- `nepalDestinations` → GET /api/destinations?country=nepal
- `featuredPackages` → GET /api/packages
- `testimonials` → GET /api/testimonials

### Frontend Changes Required
1. Create API service layer (`/app/frontend/src/services/api.js`)
2. Update all components to fetch from APIs
3. Add loading states and error handling
4. Create booking modal/page
5. Create admin dashboard pages
6. Add admin authentication

## Next Action Items

1. ✅ **User Confirmation**: Confirmed - proceeding with backend development
2. **Backend Development**: 
   - Create MongoDB models
   - Build API endpoints
   - Seed initial data
3. **Frontend Integration**: Replace mock data with API calls
4. **Booking Flow**: Implement complete booking functionality
5. **Admin Dashboard**: Build admin panel for managing bookings
6. **Testing**: Test all functionality with testing agent
7. **Deployment**: Ready for production

---

## Technical Stack

**Frontend:**
- React 19
- React Router DOM
- Shadcn UI components
- Tailwind CSS
- Lucide React icons
- Sonner (toast notifications)
- Axios (API calls)

**Backend:**
- FastAPI (Python)
- MongoDB with Motor (async driver)
- Pydantic for validation

**Images:**
- Unsplash/Pexels (curated travel images)
- Bihar: Temple architecture and heritage sites
- Nepal: Himalayan landscapes and cultural sites

---

## Success Metrics

- Page load time < 3 seconds
- Mobile responsive on all devices
- Form submission success rate > 95%
- Search functionality response < 1 second
- User engagement (time on site, scroll depth)
- Conversion rate (contact form submissions)
