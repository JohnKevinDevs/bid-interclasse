import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Páginas que listam nomes de alunos ficam de fora (noindex).
const routes = [
  "",
  "/eci",
  "/eci/modalidades",
  "/ept",
  "/ept/modalidades",
  "/regulamentos",
  "/sobre",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
