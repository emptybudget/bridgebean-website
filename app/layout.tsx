import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_KR, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import company from "@/data/company.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

const caveat = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const metaDescription = company.description.replace(/\s+/g, " ").trim();

export const metadata: Metadata = {
  title: {
    default: `${company.name} · ${company.slogan}`,
    template: `%s · ${company.name}`,
  },
  description: metaDescription,
  openGraph: {
    title: `${company.name} · ${company.slogan}`,
    description: metaDescription,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSerifKr.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-cream-50 text-ink font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
