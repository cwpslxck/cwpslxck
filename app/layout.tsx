import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

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
      <body className={`${font.className} antialiased  py-20 md:py-28`}>
        <div className="max-w-xs md:max-w-2xl mx-auto border-t border-x border-black/10">
          {children}
        </div>
      </body>
    </html>
  );
}
