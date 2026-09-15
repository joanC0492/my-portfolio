import type { MetadataRoute } from "next";
import { dataProjects } from "@/app/(pages)/home/_data";
import { getSiteUrlOrThrow } from "@/shared/config/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrlOrThrow();
  const projectRoutes = dataProjects.flatMap((project) => {
    if (!project.pageLink) return [];

    return [
      {
        url: `${siteUrl}/portafolio/${project.pageLink}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ];
  });

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
