export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://squeezeberriez.com/#business",
    name: "Squeeze Berriez",
    alternateName: "Squeeze Berriez Natural Drinks",
    description:
      "Premium natural fruit beverage company in Thrissur, Kerala offering 10 unique flavors of refreshing drinks made with 100% natural ingredients.",
    url: "https://squeezeberriez.com",
    telephone: "+919876543210",
    email: "info@squeezeberriez.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Round South",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      postalCode: "680001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.5276",
      longitude: "76.2144",
    },
    openingHours: ["Mo-Sa 08:00-20:00", "Su 09:00-18:00"],
    priceRange: "₹13-₹20",
    servesCuisine: "Beverages",
    hasMenu: "https://squeezeberriez.com/#flavors",
    image: [
      "https://squeezeberriez.com/images/guava-fizz.png",
      "https://squeezeberriez.com/images/mango-fizz.png",
      "https://squeezeberriez.com/images/pineapple-chilli.png",
      "https://squeezeberriez.com/images/ice-cream-soda.png",
    ],
    logo: "https://squeezeberriez.com/logo.png",
    sameAs: [
      "https://www.facebook.com/squeezeberriez",
      "https://www.instagram.com/squeezeberriez",
      "https://twitter.com/squeezeberriez",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Nair",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody: "Amazing taste! The Guava Fizz is my absolute favorite. Natural ingredients and perfect sweetness.",
      },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Squeeze Berriez Natural Fruit Drinks",
    description:
      "Premium natural fruit beverages available in 10 unique flavors including Guava Fizz, Mango Fizz, Pineapple Chilli, and more.",
    brand: {
      "@type": "Brand",
      name: "Squeeze Berriez",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Squeeze Berriez",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thrissur",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    category: "Beverages",
    offers: {
      "@type": "Offer",
      price: "20",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Squeeze Berriez",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Squeeze Berriez",
    url: "https://squeezeberriez.com",
    logo: "https://squeezeberriez.com/logo.png",
    description: "Leading natural fruit beverage company in Thrissur, Kerala",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Round South",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      postalCode: "680001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919876543210",
      contactType: "customer service",
      availableLanguage: ["English", "Malayalam"],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  )
}
