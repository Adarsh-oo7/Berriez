import { Leaf, Heart, Award, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              About Squeeze Berriez
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born in the heart of Thrissur, Kerala, Squeeze Berriez is your trusted local partner for premium quality
            fruit beverages that celebrate the rich flavors of our beautiful state.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Squeeze Berriez, we believe that refreshment should never compromise on health. Our mission is to
                provide the people of Thrissur and beyond with delicious, quality fruit beverages that energize your
                body and delight your taste buds.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every bottle is crafted with care, using the finest quality ingredients sourced locally whenever
                possible. We're proud to be a Kerala-based business that supports our local community while delivering
                exceptional quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">100% Quality</h4>
                <p className="text-sm text-gray-600">Every drop reflects our quality promise</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Health First</h4>
                <p className="text-sm text-gray-600">Packed with vitamins and nutrients</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Local?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Premium Quality</h4>
                    <p className="text-gray-600">
                      Rigorous quality control ensures every bottle meets our high standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Support</h4>
                    <p className="text-gray-600">Supporting local economy and creating jobs in Thrissur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fresh & Fast</h4>
                    <p className="text-gray-600">Shorter supply chain means fresher products for you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg leading-relaxed">
                "Every bottle of Squeeze Berriez is a promise of quality, freshness, and the authentic taste of Kerala.
                We're not just selling drinks; we're sharing the joy of natural refreshment with our community."
              </p>
              <div className="mt-4 text-blue-100">
                <p className="font-semibold">- The Squeeze Berriez Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
