import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Home } from "lucide-react";
import Footer from "@/Components/footer";

const font = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amin Zare",
  description: "Portfolio website of cwpslxck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased w-full`}>
        <main className="px-2 py-10 md:py-28">
          <div className="w-full md:max-w-2xl md:mx-auto border-t border-x border-black/10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
