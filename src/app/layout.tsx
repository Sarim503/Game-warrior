import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClientFooterTop, ClientFooter } from "@/components/ClientWrapper";
import Preloader from "@/components/Preloader";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Game Warrior - Gaming Template",
  description: "Game Warrior - The best games out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Header />
        {children}
        <ClientFooterTop />
        <ClientFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
