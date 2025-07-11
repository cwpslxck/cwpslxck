import Footer from "@/Components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <div className="w-full border border-black/10">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
