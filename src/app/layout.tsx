import type { Metadata } from "next";
import "./globals.css";
import TopHeader from "@/components/header/top-header";
import Footer from "@/components/footer/footer";
import SideHeader from "@/components/header/sidebar";
import { AOSInit } from "@/components/aos-init";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Ampholo",
  description: "Streamline your study aboard process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen`}
      >
        <TopHeader />
        <SideHeader />
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
