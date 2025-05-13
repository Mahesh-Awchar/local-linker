"use client"

// This file simulates a data layer that would normally connect to a database
// For this example, we're using localStorage to persist data

export interface Business {
  id: string
  name: string
  category: string
  address: string
  phone: string
  website?: string
  hours: string
  description: string
  rating: number
  reviewCount: number
  distance: string
  images: string[]
  reviews: Review[]
}

export interface Review {
  id: string
  user: string
  rating: number
  date: string
  content: string
}

// Sample data
const sampleBusinesses: Business[] = [
  {
    id: "1",
    name: "Green Earth Cafe",
    category: "Food & Drink",
    address: "123 Main Street, Anytown, USA",
    phone: "(555) 123-4567",
    website: "www.greenearthcafe.com",
    hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm",
    description: "A cozy cafe serving organic, locally-sourced food and beverages.",
    rating: 4.8,
    reviewCount: 32,
    distance: "0.3 miles",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    reviews: [
      {
        id: "r1",
        user: "Jane Smith",
        rating: 5,
        date: "2 weeks ago",
        content: "Absolutely love this place! The coffee is amazing and the staff is so friendly.",
      },
      {
        id: "r2",
        user: "John Doe",
        rating: 4,
        date: "1 month ago",
        content: "Great atmosphere and delicious food. The avocado toast is a must-try.",
      },
    ],
  },
  {
    id: "2",
    name: "Artisan Crafts",
    category: "Art & Crafts",
    address: "456 Oak Avenue, Anytown, USA",
    phone: "(555) 234-5678",
    website: "www.artisancrafts.com",
    hours: "Tue-Sat: 10am-6pm, Sun: 12pm-5pm",
    description: "A local shop featuring handmade crafts from local artisans.",
    rating: 4.5,
    reviewCount: 18,
    distance: "0.7 miles",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    reviews: [
      {
        id: "r3",
        user: "Sarah Johnson",
        rating: 5,
        date: "3 weeks ago",
        content: "Beautiful handmade items. I always find unique gifts here.",
      },
    ],
  },
]

// Initialize localStorage with sample data if it doesn't exist
const initializeData = () => {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("businesses")) {
      localStorage.setItem("businesses", JSON.stringify(sampleBusinesses))
    }
  }
}

// Get all businesses
export const getLocalBusinesses = () => {
  initializeData()
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("businesses")
    return data ? JSON.parse(data) : []
  }
  return []
}

// Get a business by ID
export const getBusinessById = (id: string) => {
  initializeData()
  if (typeof window !== "undefined") {
    const businesses = getLocalBusinesses()
    return businesses.find((business: Business) => business.id === id)
  }
  return null
}

// Add a new business
export const addBusiness = (business: Omit<Business, "id" | "rating" | "reviewCount" | "distance" | "reviews">) => {
  initializeData()
  if (typeof window !== "undefined") {
    const businesses = getLocalBusinesses()
    const newBusiness: Business = {
      ...business,
      id: Date.now().toString(),
      rating: 0,
      reviewCount: 0,
      distance: "0.0 miles", // This would be calculated based on user location
      reviews: [],
      images: ["/placeholder.svg?height=300&width=500"],
    }

    businesses.push(newBusiness)
    localStorage.setItem("businesses", JSON.stringify(businesses))
    return newBusiness
  }
  return null
}

// Add a review to a business
export const addReview = (businessId: string, review: Omit<Review, "id" | "date">) => {
  initializeData()
  if (typeof window !== "undefined") {
    const businesses = getLocalBusinesses()
    const businessIndex = businesses.findIndex((b: Business) => b.id === businessId)

    if (businessIndex !== -1) {
      const newReview: Review = {
        ...review,
        id: Date.now().toString(),
        date: "Just now",
      }

      businesses[businessIndex].reviews.push(newReview)

      // Update rating
      const totalRating = businesses[businessIndex].reviews.reduce((sum: number, r: Review) => sum + r.rating, 0)
      businesses[businessIndex].rating = Number.parseFloat(
        (totalRating / businesses[businessIndex].reviews.length).toFixed(1),
      )
      businesses[businessIndex].reviewCount = businesses[businessIndex].reviews.length

      localStorage.setItem("businesses", JSON.stringify(businesses))
      return newReview
    }
  }
  return null
}
