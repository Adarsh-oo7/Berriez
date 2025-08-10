"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const flavors = [
  {
    id: 1,
    name: "Guava Fizz",
    description: "Sweet and tangy guava with a refreshing fizzy twist",
    image: "./images/guava-fizz.png",
    color: "from-pink-400 to-red-400",
    benefits: "Rich in Vitamin C and antioxidants",
    rating: 4.9,
    reviews: 156,
    popular: true,
  },
  {
    id: 2,
    name: "Pineapple Chilli",
    description: "Tropical pineapple with a spicy kick of chilli",
    image: "./images/pineapple-chilli.png",
    color: "from-yellow-400 to-orange-400",
    benefits: "Boosts metabolism and aids digestion",
    rating: 4.8,
    reviews: 142,
    popular: false,
  },
  {
    id: 3,
    name: "Ice Cream Soda",
    description: "Creamy and smooth soda with ice cream flavors",
    image: "./images/ice-cream-soda.png",
    color: "from-pink-300 to-purple-300",
    benefits: "Calcium-rich and refreshing treat",
    rating: 4.7,
    reviews: 98,
    popular: false,
  },
  {
    id: 4,
    name: "Mango Fizz",
    description: "King of fruits in a sparkling, refreshing drink",
    image: "./images/mango-fizz.png",
    color: "from-yellow-400 to-orange-500",
    benefits: "High in Vitamin A and quality sugars",
    rating: 4.9,
    reviews: 203,
    popular: true,
  },
  {
    id: 5,
    name: "Passion Fruit Fizz",
    description: "Tangy-sweet passion fruit fizz with a tropical twist",
    image: "./passion.png?height=400&width=300",
    color: "from-yellow-300 to-pink-300",
    benefits: "Rich in vitamin C and quality antioxidants",
    rating: 4.6,
    reviews: 87,
    popular: false,
  },
  {
    id: 6,
    name: "Green Apple Fizz",
    description: "Crisp green apple with a zesty, refreshing taste",
    image: "./green.png?height=400&width=300",
    color: "from-green-400 to-lime-400",
    benefits: "Fiber-rich and aids in digestion",
    rating: 4.5,
    reviews: 76,
    popular: false,
  },
  {
    id: 7,
    name: "Watermelon Fizz",
    description: "Juicy watermelon for ultimate summer refreshment",
    image: "./water.png?height=400&width=300",
    color: "from-red-300 to-pink-400",
    benefits: "Hydrating and low in calories",
    rating: 4.7,
    reviews: 134,
    popular: false,
  },
  {
    id: 8,
    name: "Blueberry Fizz",
    description: "Antioxidant-rich blueberries in every sip",
    image: "./Blueberriez.jpg?height=400&width=300",
    color: "from-blue-400 to-purple-500",
    benefits: "Packed with antioxidants and vitamins",
    rating: 4.8,
    reviews: 112,
    popular: true,
  },
  {
    id: 9,
    name: "Orange Fizz",
    description: "Citrusy orange with a sparkling twist",
    image: "./orangefizz.png",
    color: "from-orange-400 to-yellow-400",
    benefits: "High in Vitamin C and refreshing",
    rating: 4.7,
    reviews: 101,
    popular: false,
  },
  {
    id: 10,
    name: "SqueezeUp",
    description: "A burst of mixed tropical fruits in every sip",
    image: "./squeezeup.png",
    color: "from-pink-400 to-orange-300",
    benefits: "Packed with vitamins and minerals",
    rating: 4.8,
    reviews: 89,
    popular: true,
  },
  {
    id: 11,
    name: "Monkey Mood",
    description: "Banana delight with a creamy tropical finish",
    image: "./monkeymood.png",
    color: "from-yellow-300 to-brown-400",
    benefits: "Potassium-rich and energy boosting",
    rating: 4.6,
    reviews: 77,
    popular: false,
  },
  {
    id: 12,
    name: "Tamarind",
    description: "Tangy-sweet tamarind for a unique refreshing taste",
    image: "./tamarind.png",
    color: "from-brown-400 to-orange-400",
    benefits: "Aids digestion and rich in antioxidants",
    rating: 4.7,
    reviews: 85,
    popular: false,
  }
];


export default function FlavorsSection() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section id="flavors" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-20 w-16 h-16 bg-purple-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Our Amazing Flavors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of 10 unique and refreshing premium drink flavors, each crafted to perfection with
            premium ingredients and authentic taste.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {flavors.map((flavor, index) => (
            <ScrollAnimation key={flavor.id} delay={index * 100}>
              <div
                className="group relative"
                onMouseEnter={() => setHoveredCard(flavor.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover-lift will-change-transform ${
                    hoveredCard === flavor.id ? "scale-105 shadow-2xl" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {flavor.popular && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-glow">
                      🔥 Popular
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(flavor.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-200 ${
                        favorites.includes(flavor.id) ? "text-red-500 fill-current" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div className={`h-2 bg-gradient-to-r ${flavor.color} animate-gradient`}></div>

                  <div className="p-6">
                    <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={flavor.image || "/placeholder.svg"}
                        alt={`Squeeze Berriez ${flavor.name} - quality Fruit Drink`}
                        width={200}
                        height={250}
                        className="w-full h-48 object-contain mx-auto animate-float"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </div>

                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {flavor.name}
                      </h3>

                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(flavor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {flavor.rating} ({flavor.reviews})
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">{flavor.description}</p>

                      <div className="bg-green-50 p-3 rounded-lg transform group-hover:bg-green-100 transition-colors">
                        <p className="text-xs text-green-700 font-medium">{flavor.benefits}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 animate-bounce-in">₹20</div>
                          <div className="text-xs text-gray-500">300ml</div>
                        </div>
                       <a
  href={`https://wa.me/918304905305?text=${encodeURIComponent(
    `Hi! I'm interested in ordering the "${flavor.name}" drink. Please share the details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="sm"
    className={`bg-gradient-to-r ${flavor.color} hover:opacity-90 text-white hover-lift transform transition-all duration-300 hover:scale-105`}
  >
    <ShoppingCart className="w-4 h-4 mr-1" />
    Order
  </Button>
</a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        
      </div>
    </section>
    
  )
}
