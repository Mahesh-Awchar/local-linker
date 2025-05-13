import Link from "next/link"
import Image from "next/image"
import { Star, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BusinessCardProps {
  id: string
  name: string
  category: string
  rating: number
  reviewCount: number
  distance: string
  image: string
}

export default function BusinessCard({ id, name, category, rating, reviewCount, distance, image }: BusinessCardProps) {
  return (
    <Link href={`/business/${id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2 bg-green-50 text-green-700 border-green-200">
            {category}
          </Badge>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{distance}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
