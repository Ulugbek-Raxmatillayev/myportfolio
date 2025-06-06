import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant",
  description:
    "Ulug‘bek Raxmatillayev – zamonaviy web saytlar ishlab chiqaruvchi va IELTS test platformalari bo‘yicha mutaxassis. Veb ishlab chiqish, onlayn test tizimlari, va o‘quvchilarga xizmatlar ko‘rsatamiz.",
  keywords: [
    "Ulug‘bek Raxmatillayev",
    "Web Developer Uzbekistan",
    "IELTS Platform",
    "IELTS Assistant",
    "Next.js Developer",
    "React Developer",
    "Online Test Platform",
    "SEO friendly web",
  ],
  authors: [{ name: "Ulug‘bek Raxmatillayev", url: "https://yourdomain.com" }],
  creator: "Ulug‘bek Raxmatillayev",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://ulugbekraxmatillayev.netlify.app"),
  openGraph: {
    title: "Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant",
    description:
      "Zamonaviy veb platformalar, IELTS test tizimlari va o‘quvchilar uchun maxsus xizmatlar.",
    url: "https://ulugbekraxmatillayev.netlify.app",
    siteName: "Ulug‘bek Raxmatillayev Portfolio",
    images: [
      {
        url: "https://ulugbekraxmatillayev.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Ulug‘bek Raxmatillayev - Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant",
    description: "Veb ishlab chiqish va IELTS platformalari uchun ishonchli yechimlar.",
    images: ["https://ulugbekraxmatillayev.netlify.app"],
    creator: "@URaxmatill45627",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Title */}
        <title>Ulug‘bek Raxmatillayev | Web Developer </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Ulug‘bek Raxmatillayev – zamonaviy web saytlar ishlab chiqaruvchi va IELTS test platformalari bo‘yicha mutaxassis. Veb ishlab chiqish, onlayn test tizimlari, va o‘quvchilarga xizmatlar ko‘rsatamiz."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ulugbekraxmatillayev.netlify.app" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Ulug‘bek Raxmatillayev, Web Developer Uzbekistan, IELTS Platform, IELTS Assistant, Next.js Developer, React Developer, Online Test Platform, SEO friendly web"
        />

        {/* Author */}
        <meta name="author" content="Ulug‘bek Raxmatillayev" />

        {/* Open Graph for Facebook / LinkedIn */}
        <meta property="og:title" content="Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant" />
        <meta
          property="og:description"
          content="Zamonaviy veb platformalar, IELTS test tizimlari va o‘quvchilar uchun maxsus xizmatlar."
        />
        <meta property="og:url" content="https://ulugbekraxmatillayev.netlify.uz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ulugbekraxmatillayev.netlify.app/og-image.jpg" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant" />
        <meta name="twitter:description" content="Veb ishlab chiqish va IELTS platformalari uchun ishonchli yechimlar." />
        <meta name="twitter:image" content="https://ulugbekraxmatillayev.netlify.app/og-image.jpg" />

        {/* Mobile Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
