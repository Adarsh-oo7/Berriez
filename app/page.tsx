import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FlavorsSection from "@/components/flavors-section"
import WhyChooseSection from "@/components/why-choose-section"
import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FlavorsSection />
      <WhyChooseSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
