import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import company from "@/data/company.json";

const metaDescription = company.description.replace(/\s+/g, " ").trim();

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bridgebean.vercel.app";
const cleanSlogan = company.slogan.replace(/\n/g, " ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} · ${cleanSlogan}`,
    template: `%s · ${company.name}`,
  },
  description: metaDescription,
  openGraph: {
    title: `${company.name} · ${cleanSlogan}`,
    description: metaDescription,
    type: "website",
    locale: "ko_KR",
    siteName: company.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} — ${cleanSlogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} · ${cleanSlogan}`,
    description: metaDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-cream-50 text-ink font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
