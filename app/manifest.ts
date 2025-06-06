import type { MetadataRoute } from "next"

// Add this line to explicitly mark the route as static
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Squeeze Berriez - Best Natural Drinks in Thrissur",
    short_name: "Squeeze Berriez",
    description:
      "Premium natural fruit beverages with 10 unique flavors. Made in Thrissur, Kerala with 100% natural ingredients.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["food", "beverages", "health"],
    lang: "en-IN",
    orientation: "portrait-primary",
  }
}