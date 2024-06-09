

import type { Metadata } from "next";
import "./globals.css";
import Navabar from "@/components/Navabar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Travel",
  icons:'/camp.svg',
  description: "Travel App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navabar />
        <main className=" relative overflow-hidden">
          {children}        
        </main>
        <Footer />
      </body>
    </html>
  );
}
