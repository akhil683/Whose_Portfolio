import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhil Palsra",
  description: "Welcome to Akhil's World !",
  icons: {
    icon: 'https://pbs.twimg.com/profile_images/1829432793509888000/Kiqw13U8_400x400.jpg',
  },
  openGraph: {
    title: "Akhil Palsra",
    description: "Developer, Peace, Wanna travel the World !",
    url: "https://www.akkhil.dev",
    siteName: "Akhil_Palsra",
    locale: "en_US",
    type: "website",
    images: ["https://pbs.twimg.com/profile_images/1829432793509888000/Kiqw13U8_400x400.jpg"],
  },
  twitter: {
    title: "Akhil Palsra",
    card: "summary_large_image",
    creator: "@akkhil_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
