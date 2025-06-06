import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { StructuredData } from "@/components/structured-data"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Squeeze Berriez - Best Refreshing Drinks in Thrissur | Natural Fruit Beverages Kerala",
    template: "%s | Squeeze Berriez - Premium Natural Drinks Thrissur",
  },
  description:
    "🥤 Discover Squeeze Berriez - Thrissur's #1 natural fruit drink brand! 10 unique flavors including Guava Fizz, Mango, Pineapple Chilli & more. 300ml bottles at ₹20. Fresh, healthy beverages made with 100% natural ingredients. Free delivery in Thrissur! Order now.",
  keywords: [
    "best drinks Thrissur",
    "natural juices Kerala",
    "fruit beverages Thrissur",
    "Squeeze Berriez",
    "refreshing drinks Kerala",
    "healthy beverages India",
    "Thrissur local drinks",
    "natural fruit juice brands",
    "Kerala beverage company",
    "fresh fruit drinks Thrissur",
    "wholesale drinks Kerala",
    "bulk beverage orders",
    "Guava fizz drink",
    "Mango fizz Kerala",
    "Pineapple chilli drink",
    "ice cream soda",
    "coconut drinks Thrissur",
    "watermelon juice",
    "blueberry drinks",
    "green apple juice",
  ].join(", "),
  authors: [{ name: "Squeeze Berriez", url: "https://www.squeezeberriez.in/" }],
  creator: "Squeeze Berriez",
  publisher: "Squeeze Berriez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.squeezeberriez.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en",
      "ml-IN": "/ml",
    },
  },
  openGraph: {
    title: "Squeeze Berriez - Best Refreshing Drinks in Thrissur | 10 Natural Flavors",
    description:
      "🥤 Thrissur's favorite natural fruit drinks! 10 unique flavors, 300ml bottles at ₹20. Made with 100% natural ingredients. Free delivery in Thrissur. Order your favorite flavor now!",
    url: "https://www.squeezeberriez.in/",
    siteName: "Squeeze Berriez",
    images: [
      {
        url: "/images/guava-fizz.png",
        width: 1200,
        height: 630,
        alt: "Squeeze Berriez Guava Fizz - Premium Natural Fruit Drink in Thrissur",
      },
      {
        url: "/images/mango-fizz.png",
        width: 1200,
        height: 630,
        alt: "Squeeze Berriez Mango Fizz - Fresh Tropical Drink Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squeeze Berriez - Best Natural Drinks in Thrissur",
    description:
      "🥤 10 unique natural fruit flavors, 300ml bottles at ₹20. Thrissur's favorite healthy beverage brand!",
    images: ["/images/guava-fizz.png"],
    creator: "@squeezeberriez",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Food & Beverages",
  classification: "Natural Fruit Beverages",
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thrissur",
    "geo.position": "10.5276;76.2144",
    ICBM: "10.5276, 76.2144",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Squeeze Berriez" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
