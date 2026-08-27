import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nitiplay.com";

  const routes = [
    "",
    "/about",
    "/portfolio",
    "/services",
    "/our-apps",
    "/contact",
    "/privacy",
    "/ff4-tool",
    "/ff4-tool/privacy",
    "/ff4-tool/terms",
    "/ff4-tool/support",
    "/rbx-wear",
    "/rbx-wear/privacy.html",
    "/rbx-wear/terms.html",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
