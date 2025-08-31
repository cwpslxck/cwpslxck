import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/footer";
import { Analytics } from "@vercel/analytics/next";

const font = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amin Zare (@cwpslxck)",
  description:
    "Portfolio of Amin Zare (@cwpslxck) - Experienced Digital Creator & Frontend Developer specializing in React, Next.js, and modern web technologies. Browse my projects and skills.",
  keywords:
    "Amin Zare, cwpslxck, frontend developer, react developer, next.js, portfolio, web developer, Digital Creator, JavaScript, TypeScript, three js,",
  authors: [{ name: "Amin Zare" }],
  creator: "Amin Zare",
  publisher: "Amin Zare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  metadataBase: new URL("https://cwpslxck.ir"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amin Zare | Frontend Developer & Designer",
    description:
      "Portfolio of Amin Zare - Experienced Digital Creator & Frontend Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://cwpslxck.ir",
    siteName: "Amin Zare Portfolio",
    images: [
      {
        url: "/assets/preview.png",
        width: 1200,
        height: 630,
        alt: "Amin Zare - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/preview.png",
    title: "Amin Zare | Frontend Developer & Designer",
    description:
      "Portfolio website of Amin Zare (@cwpslxck) - Frontend Developer & Digital Creator",
    creator: "Amin Zare - @cwpslxck",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${font.className} antialiased w-full`}>
        <main className="px-2 py-10 md:py-28">
          <div className="w-full md:max-w-2xl md:mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
