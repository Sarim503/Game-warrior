import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ClientFooterTop, ClientFooter } from "@/components/ClientWrapper";
import Preloader from "@/components/Preloader";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Game Warrior - Gaming Template",
  description: "Game Warrior - The best games out there",
  icons: {
    icon: [
      { url: "/img/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/img/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/img/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/img/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/img/favicon.png", type: "image/png", sizes: "128x128" },
      { url: "/img/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/img/favicon.png", type: "image/png", sizes: "512x512" },
    ],
  },
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
