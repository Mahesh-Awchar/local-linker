import { Search, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategorySelector from "@/components/category-selector"
import BusinessCard from "@/components/business-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-green-800">
              <span className="text-green-600">Local</span>Linker
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/add-business">Add Business</Link>
              </Button>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">Discover and support local businesses in your community</p>
          <div className="relative mb-6">
            <Input
              placeholder="Search for local businesses..."
              className="pl-10 py-6 bg-white border-green-200 focus-visible:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
            <MapPin size={16} className="text-green-600" />
            <span>Using your current location</span>
            <Button variant="link" className="text-green-600 p-0 h-auto">
              Change
            </Button>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
          <CategorySelector />
        </section>

        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Nearby Local Businesses</h2>
            <Button variant="ghost" className="text-green-600">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BusinessCard
              id="1"
              name="Green Earth Cafe"
              category="Food & Drink"
              rating={4.8}
              reviewCount={32}
              distance="0.3 miles"
              image="/placeholder.svg?height=200&width=400"
            />
            <BusinessCard
              id="2"
              name="Artisan Crafts"
              category="Art & Crafts"
              rating={4.5}
              reviewCount={18}
              distance="0.7 miles"
              image="/placeholder.svg?height=200&width=400"
            />
            <BusinessCard
              id="3"
              name="Local Threads"
              category="Clothing"
              rating={4.2}
              reviewCount={24}
              distance="1.2 miles"
              image="/placeholder.svg?height=200&width=400"
            />
          </div>
        </section>

        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Highly Rated</h2>
            <Button variant="ghost" className="text-green-600">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BusinessCard
              id="4"
              name="Community Bookstore"
              category="Books & Media"
              rating={4.9}
              reviewCount={47}
              distance="1.5 miles"
              image="/placeholder.svg?height=200&width=400"
            />
            <BusinessCard
              id="5"
              name="Neighborhood Bakery"
              category="Food & Drink"
              rating={4.7}
              reviewCount={56}
              distance="0.9 miles"
              image="/placeholder.svg?height=200&width=400"
            />
            <BusinessCard
              id="6"
              name="Local Hardware"
              category="Home & Garden"
              rating={4.6}
              reviewCount={29}
              distance="1.8 miles"
              image="/placeholder.svg?height=200&width=400"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
