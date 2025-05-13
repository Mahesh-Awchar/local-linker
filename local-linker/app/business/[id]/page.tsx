import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, Share2, Heart, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReviewCard from "@/components/review-card"

export default function BusinessPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch this data from an API or database
  const business = {
    id: params.id,
    name: params.id === "1" ? "Green Earth Cafe" : "Local Business",
    category: "Food & Drink",
    rating: 4.8,
    reviewCount: 32,
    address: "123 Main Street, Anytown, USA",
    phone: "(555) 123-4567",
    website: "www.greenearthcafe.com",
    hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm",
    description:
      "A cozy cafe serving organic, locally-sourced food and beverages. Our mission is to provide delicious, sustainable options while supporting local farmers and producers.",
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
        content:
          "Absolutely love this place! The coffee is amazing and the staff is so friendly. I come here at least twice a week.",
      },
      {
        id: "r2",
        user: "John Doe",
        rating: 4,
        date: "1 month ago",
        content:
          "Great atmosphere and delicious food. The avocado toast is a must-try. Only giving 4 stars because it can get pretty crowded during lunch hours.",
      },
      {
        id: "r3",
        user: "Alex Johnson",
        rating: 5,
        date: "2 months ago",
        content:
          "Best local cafe in town! They source all their ingredients locally and you can really taste the difference. Highly recommend the seasonal specials.",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-green-600 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to search
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
              <Image src={business.images[0] || "/placeholder.svg"} alt={business.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {business.images.slice(1).map((img, index) => (
                <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${business.name} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-2 bg-green-50 text-green-700 border-green-200">
              {business.category}
            </Badge>
            <h1 className="text-2xl font-bold mb-2">{business.name}</h1>
            <div className="flex items-center gap-1 mb-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{business.rating}</span>
              <span className="text-gray-500">({business.reviewCount} reviews)</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span>{business.hours}</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span className="text-green-600">{business.website}</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Button className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <h2 className="text-xl font-semibold">About {business.name}</h2>
            <p className="text-gray-700">{business.description}</p>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Reviews</h2>
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                Write a Review
              </Button>
            </div>
            <div className="space-y-4">
              {business.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <h2 className="text-xl font-semibold mb-4">Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...business.images, ...business.images].map((img, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${business.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
