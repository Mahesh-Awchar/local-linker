"use client"

import type React from "react"

import { useState } from "react"
import { Coffee, Shirt, Palette, Book, Home, Utensils, Gift, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = {
  id: string
  name: string
  icon: React.ReactNode
}

const categories: Category[] = [
  { id: "food", name: "Food & Drink", icon: <Coffee className="h-6 w-6" /> },
  { id: "clothing", name: "Clothing", icon: <Shirt className="h-6 w-6" /> },
  { id: "art", name: "Art & Crafts", icon: <Palette className="h-6 w-6" /> },
  { id: "books", name: "Books & Media", icon: <Book className="h-6 w-6" /> },
  { id: "home", name: "Home & Garden", icon: <Home className="h-6 w-6" /> },
  { id: "restaurants", name: "Restaurants", icon: <Utensils className="h-6 w-6" /> },
  { id: "gifts", name: "Gifts", icon: <Gift className="h-6 w-6" /> },
  { id: "services", name: "Services", icon: <Scissors className="h-6 w-6" /> },
]

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
          className={cn(
            "flex flex-col items-center justify-center min-w-[100px] p-3 rounded-lg border transition-all",
            selectedCategory === category.id
              ? "border-green-500 bg-green-50 text-green-700"
              : "border-gray-200 bg-white hover:border-green-200 hover:bg-green-50",
          )}
        >
          <div
            className={cn(
              "p-2 rounded-full mb-2",
              selectedCategory === category.id ? "text-green-600" : "text-gray-500",
            )}
          >
            {category.icon}
          </div>
          <span className="text-sm font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  )
}
