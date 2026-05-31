import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "BID CEAP",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8f7",
    theme_color: "#112031",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
