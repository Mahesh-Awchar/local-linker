import { Star, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Review {
  id: string
  user: string
  rating: number
  date: string
  content: string
}

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.user
    .split(" ")
    .map((name) => name[0])
    .join("")

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-start gap-3 mb-3">
        <Avatar>
          <AvatarFallback className="bg-green-100 text-green-700">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{review.user}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span>{review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{review.content}</p>
      <Button variant="ghost" size="sm" className="text-gray-500">
        <ThumbsUp className="h-4 w-4 mr-1" />
        Helpful
      </Button>
    </div>
  )
}
