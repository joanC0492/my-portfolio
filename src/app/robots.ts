import type { MetadataRoute } from "next";
import { getSiteUrlOrThrow } from "@/shared/config/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrlOrThrow();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
