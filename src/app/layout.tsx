import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Sichuan Paris",
  description:
    "Welcome to Restaurant Sichuan Paris, where you can experience the authentic flavors of Sichuan cuisine.",
  icons: {
    icon: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <ChatBot />
      </body>
    </html>
  );
}
