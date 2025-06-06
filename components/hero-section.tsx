"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Play, X } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false) // Add state to toggle video modal

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-300 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-green-300 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <ScrollAnimation className="space-y-8">
            <div className="flex items-center space-x-2 text-orange-600 animate-bounce-in">
              <Star className="w-5 h-5 fill-current animate-pulse-glow" />
              <span className="font-semibold">{"#1 Refreshing Drinks in Thrissur"}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                Best Refreshing Drinks
              </span>
              <br />
              <span className="text-gray-800">in Thrissur</span>
              <br />
              <span className="text-2xl md:text-3xl text-green-600 text-shimmer">Taste the Freshness!</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Experience the authentic taste of Kerala with our 10 unique quality fruit flavors. Made with premium
              ingredients, each 300ml bottle delivers pure refreshment and health benefits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <a
  href="tel:+918304905305"
  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white text-lg px-8 py-3 rounded-md shadow-md hover-lift hover-glow transform transition-all duration-300 animate-pulse-glow"
>
 Order Now
  <ArrowRight className="w-5 h-5 ml-2" />
</a>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideo(true)}
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 text-lg px-8 py-6 hover-lift group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-pink-600 animate-bounce-in">10</div>
                <div className="text-gray-600">Unique Flavors</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-orange-600 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                  300ml
                </div>
                <div className="text-gray-600">Perfect Size</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-3xl font-bold text-green-600 animate-bounce-in" style={{ animationDelay: "0.4s" }}>
                  ₹20
                </div>
                <div className="text-gray-600">Best Price</div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Content - Product Images */}
          <ScrollAnimation delay={200} className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="transform hover:scale-105 transition-all duration-500 hover-lift will-change-transform">
                  <Image
                    src="./images/guava-fizz.png"
                    alt="Squeeze Berriez Guava Fizz - quality Fruit Drink"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                    priority
                    onLoad={() => setImageLoaded(true)}
                    style={{ animationDelay: "0s" }}
                  />
                </div>
                <div className="transform hover:scale-105 transition-all duration-500 hover-lift will-change-transform">
                  <Image
                    src="./images/ice-cream-soda.png"
                    alt="Squeeze Berriez Ice Cream Soda - Refreshing Beverage"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="transform hover:scale-105 transition-all duration-500 hover-lift will-change-transform">
                  <Image
                    src="./images/pineapple-chilli.png"
                    alt="Squeeze Berriez Pineapple Chilli - Spicy Fruit Drink"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <div className="transform hover:scale-105 transition-all duration-500 hover-lift will-change-transform">
                  <Image
                    src="./images/mango-fizz.png"
                    alt="Squeeze Berriez Mango Fizz - Tropical Fruit Beverage"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                    style={{ animationDelay: "3s" }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-70 animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-10 -left-4 w-12 h-12 bg-pink-400 rounded-full opacity-60 animate-float"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modal with Instagram Reel */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[360px] aspect-[9/16]">
            <iframe
              src="https://www.instagram.com/reel/DJ9GCBcPPZE/embed"
              className="w-full h-full rounded-xl border-0"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-white text-black p-1 rounded-full hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
