import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import company from "@/data/company.json";

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
    <html lang="ko">
      <body className="min-h-screen bg-cream-50 text-ink font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
