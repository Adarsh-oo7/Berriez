import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Priya Nair",
    location: "Thrissur East",
    rating: 5,
    review:
      "Amazing taste! The Guava Fizz is my absolute favorite. Quality ingredients and perfect sweetness. My whole family loves Squeeze Berriez!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Swaraj Round",
    rating: 5,
    review:
      "Best local drink brand in Thrissur! The Mango Fizz tastes like fresh mangoes. Great quality and affordable price. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Anjali Menon",
    location: "Cherpu",
    rating: 5,
    review:
      "Love the variety of flavors! The Pineapple Chilli is unique and refreshing. Perfect for Kerala weather. Keep up the great work!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Suresh Pillai",
    location: "Ollur",
    rating: 5,
    review:
      "Excellent quality and taste. The Ice Cream Soda reminds me of childhood memories. Quality ingredients make it healthy too!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Meera Thomas",
    location: "Thrissur West",
    rating: 5,
    review:
      "Fresh, Quality, and delicious! My kids love all the flavors. Great to have a local brand that cares about quality and health.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 6,
    name: "Arun Krishnan",
    location: "Mannuthy",
    rating: 5,
    review:
      "Perfect refreshment after work! The Watermelon Wave is so refreshing. Proud to support a local Thrissur business!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what the people of Thrissur are saying about their favorite
            refreshing drinks from Squeeze Berriez.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">"{review.review}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Repeat Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Locations Served</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Happy Customer Family!</h3>
            <p className="text-gray-600 mb-6">
              Experience the taste that has made Squeeze Berriez the most loved drink brand in Thrissur.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-colors">
              Order Your First Case Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
