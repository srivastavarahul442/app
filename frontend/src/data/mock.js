// Mock data for the travel website

export const biharDestinations = [
  {
    id: 1,
    name: "Bodh Gaya",
    description: "Sacred Buddhist pilgrimage site with the Mahabodhi Temple",
    image: "https://images.unsplash.com/photo-1747224652373-8b97724573c7",
    price: "₹12,999",
    duration: "3 Days / 2 Nights",
    rating: 4.8
  },
  {
    id: 2,
    name: "Nalanda",
    description: "Ancient university ruins and UNESCO World Heritage Site",
    image: "https://images.unsplash.com/photo-1651493251953-4f8eb4274dc7",
    price: "₹9,999",
    duration: "2 Days / 1 Night",
    rating: 4.6
  },
  {
    id: 3,
    name: "Rajgir",
    description: "Hot springs and ancient Buddhist monasteries",
    image: "https://images.unsplash.com/photo-1655306160334-ddedcbb5f431",
    price: "₹11,499",
    duration: "3 Days / 2 Nights",
    rating: 4.7
  }
];

export const nepalDestinations = [
  {
    id: 4,
    name: "Kathmandu Valley",
    description: "Historic temples, vibrant culture, and UNESCO sites",
    image: "https://images.unsplash.com/photo-1593787812081-4310a86dad9b",
    price: "₹24,999",
    duration: "4 Days / 3 Nights",
    rating: 4.9
  },
  {
    id: 5,
    name: "Pokhara",
    description: "Serene lakes with stunning Himalayan backdrop",
    image: "https://images.unsplash.com/photo-1488249949762-27e8bf62988b",
    price: "₹28,999",
    duration: "5 Days / 4 Nights",
    rating: 4.8
  },
  {
    id: 6,
    name: "Everest Base Camp",
    description: "Legendary trek to the base of world's highest peak",
    image: "https://images.unsplash.com/photo-1670126426026-9ce4666817e7",
    price: "₹89,999",
    duration: "12 Days / 11 Nights",
    rating: 5.0
  },
  {
    id: 7,
    name: "Chitwan National Park",
    description: "Wildlife safari and jungle adventures",
    image: "https://images.unsplash.com/photo-1634042405693-2d4170d138a6",
    price: "₹32,999",
    duration: "4 Days / 3 Nights",
    rating: 4.7
  }
];

export const featuredPackages = [
  {
    id: 1,
    title: "Buddhist Circuit Tour",
    description: "Explore the sacred Buddhist sites of Bihar including Bodh Gaya, Nalanda, and Rajgir",
    image: "https://images.unsplash.com/photo-1631938341407-63282a1bc862",
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    destinations: ["Bodh Gaya", "Nalanda", "Rajgir"],
    highlights: [
      "Mahabodhi Temple visit",
      "Ancient Nalanda University ruins",
      "Hot springs in Rajgir",
      "Professional guide included"
    ],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    title: "Nepal Highlights Tour",
    description: "Discover the best of Nepal from Kathmandu's heritage to Pokhara's natural beauty",
    image: "https://images.unsplash.com/photo-1567866611065-9d7d7ec54b6a",
    price: "₹45,999",
    duration: "7 Days / 6 Nights",
    destinations: ["Kathmandu", "Pokhara", "Chitwan"],
    highlights: [
      "UNESCO World Heritage sites",
      "Phewa Lake boat ride",
      "Jungle safari in Chitwan",
      "Mountain flight option available"
    ],
    rating: 4.9,
    reviews: 243
  },
  {
    id: 3,
    title: "Himalayan Adventure",
    description: "Ultimate adventure combining trekking, culture, and breathtaking mountain views",
    image: "https://images.unsplash.com/photo-1670183856383-7f85360386c7",
    price: "₹95,999",
    duration: "14 Days / 13 Nights",
    destinations: ["Kathmandu", "Everest Base Camp", "Pokhara"],
    highlights: [
      "Everest Base Camp trek",
      "Sherpa village experience",
      "Himalayan sunrise views",
      "All permits and gear included"
    ],
    rating: 5.0,
    reviews: 89
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://images.pexels.com/photos/28096282/pexels-photo-28096282.jpeg",
    rating: 5,
    comment: "The Buddhist Circuit tour was a life-changing experience. The organization was flawless, and our guide was incredibly knowledgeable about Bihar's rich heritage.",
    tour: "Buddhist Circuit Tour"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1558511916-905a523564c6",
    rating: 5,
    comment: "Nepal trip exceeded all expectations! From the majestic Himalayas to the warm hospitality, everything was perfect. Highly recommend this travel company.",
    tour: "Nepal Highlights Tour"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Bangalore, India",
    image: "https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg",
    rating: 5,
    comment: "Our family had an amazing time exploring Bihar's ancient sites. The itinerary was well-planned, and accommodations were excellent. Will definitely book again!",
    tour: "Buddhist Circuit Tour"
  }
];

export const whyChooseUs = [
  {
    icon: "Award",
    title: "Expert Guides",
    description: "Licensed professionals with deep knowledge of local culture and history"
  },
  {
    icon: "Shield",
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive travel insurance"
  },
  {
    icon: "DollarSign",
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden costs"
  },
  {
    icon: "Clock",
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey"
  },
  {
    icon: "Star",
    title: "Handpicked Hotels",
    description: "Carefully selected accommodations for comfort and convenience"
  },
  {
    icon: "Users",
    title: "10,000+ Happy Travelers",
    description: "Join thousands of satisfied customers who trusted us"
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1747224652373-8b97724573c7",
  "https://images.unsplash.com/photo-1488249949762-27e8bf62988b",
  "https://images.unsplash.com/photo-1670126426026-9ce4666817e7"
];
