import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/eci",
  "/eci/atletas",
  "/eci/times",
  "/eci/modalidades",
  "/ept",
  "/ept/atletas",
  "/ept/times",
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
