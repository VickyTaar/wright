import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/legal/"],
      },
    ],
    sitemap: "https://barbon.tech/sitemap.xml",
    host: "https://barbon.tech",
  };
}
