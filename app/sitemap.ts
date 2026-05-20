import type { MetadataRoute } from "next";
import coffeesData from "@/data/coffees.json";
import type { Coffee } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bridgebean.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const coffees = coffeesData as Coffee[];
  const now = new Date();

  const staticRoutes = ["", "/about", "/coffees", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const coffeeRoutes = coffees.map((c) => ({
    url: `${BASE_URL}/coffees/${c.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...coffeeRoutes];
}
