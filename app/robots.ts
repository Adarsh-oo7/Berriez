import type { MetadataRoute } from "next"

// Add this line to mark the route as static
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://www.squeezeberriez.in//sitemap.xml",
  }
}