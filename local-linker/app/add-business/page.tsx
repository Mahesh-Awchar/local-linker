"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddBusinessPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, we would send this data to an API
    const formData = new FormData(e.currentTarget)
    const businessData = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      address: formData.get("address") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
      hours: formData.get("hours") as string,
      description: formData.get("description") as string,
    }

    // Simulate API call
    setTimeout(() => {
      // Save to local storage in a real app
      console.log("Business data:", businessData)
      setIsSubmitting(false)
      router.push("/")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-green-600 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Add a Local Business</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Business Name</Label>
                <Input id="name" name="name" required />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select name="category" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food & Drink</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="art">Art & Crafts</SelectItem>
                    <SelectItem value="books">Books & Media</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="restaurants">Restaurants</SelectItem>
                    <SelectItem value="gifts">Gifts</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="website">Website (optional)</Label>
                <Input id="website" name="website" type="url" />
              </div>

              <div>
                <Label htmlFor="hours">Business Hours</Label>
                <Input id="hours" name="hours" placeholder="e.g., Mon-Fri: 9am-5pm" required />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Tell us about this business..."
                  required
                />
              </div>

              <div>
                <Label>Business Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-2">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Drag and drop photos here, or click to browse</p>
                  <Button type="button" variant="outline" size="sm">
                    Upload Photos
                  </Button>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Add Business"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
