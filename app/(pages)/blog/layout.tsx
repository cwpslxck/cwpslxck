import { Metadata } from "next";
import { Rubik } from "next/font/google";

const font = Rubik({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Amin Zare - Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={font.className}>{children}</div>;
}
