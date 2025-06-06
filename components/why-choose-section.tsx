import { Shield, Leaf, Heart, Award, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Quality Ingredients",
    description: "Every ingredient, including added color, is carefully chosen to meet our highest standards of quality.",
    color: "text-green-500",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Packed with vitamins, minerals, and antioxidants to boost your health and energy.",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control and testing ensure every bottle meets our high standards.",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Premium Taste",
    description: "Authentic flavors that capture the essence of fresh fruits in every sip.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Local Pride",
    description: "Proudly made in Thrissur, Kerala, supporting our local community and economy.",
    color: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Instant Refreshment",
    description: "Quick energy boost and hydration whenever you need it most.",
    color: "text-orange-500",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Squeeze Berriez?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another beverage brand. We're your local partners in health, taste, and quality, committed to
            bringing you the best refreshing drinks in Thrissur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div
                  className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-12 rounded-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">The Squeeze Berriez Difference</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Unique Flavors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Fresh Production</div>
            </div>
          </div>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            When you choose Squeeze Berriez, you're choosing a brand that cares about your health, supports local
            business, and delivers uncompromising quality. Join thousands of satisfied customers who have made us their
            go-to choice for refreshing beverages in Thrissur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Try All 10 Flavors
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-colors">
              Visit Our Store
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
