import type { Metadata } from "next";
import { company } from "./data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nitiplay.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Premium Mobile Games & Gaming Apps`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "NitiPlay",
    "mobile games",
    "iOS games",
    "Android games",
    "gaming apps",
    "app publishing",
    "mobile app developer",
    "Ismail Lahniti",
    "Morocco",
    "game studio",
    "Arrow Maze Rush",
    "Arrow Way Out",
    "Pawdoku",
    "RBX Counters",
  ],
  authors: [{ name: "Ismail Lahniti", url: siteUrl }],
  creator: "NitiPlay LLC",
  publisher: "NitiPlay LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — Premium Mobile Games & Gaming Apps`,
    description: company.description,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Premium Mobile Games & Gaming Apps`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${company.name}`,
      description,
      url: `${siteUrl}${path}`,
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}
