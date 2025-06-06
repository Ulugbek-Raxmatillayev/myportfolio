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
  title: "Folio the best Portfolio or Personal Website",
  description:
    "Folio is the best portfolio or personal website for developer, creator or businessman.",
  icons: {
    icon: '/imgs/logo.png', // yoki boshqa favicon rasmingizning yo'li
  }
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
        <link rel="canonical" href="https://yourdomain.com" />

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
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ulug‘bek Raxmatillayev | Web Developer & IELTS Assistant" />
        <meta name="twitter:description" content="Veb ishlab chiqish va IELTS platformalari uchun ishonchli yechimlar." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />

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
