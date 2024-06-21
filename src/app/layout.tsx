import type { Metadata } from "next";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas-neue'
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: "PUBG TradeHub",
  description: "Sell or Buy PUBG Mobile Accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className} ${bebas_neue.variable} ${manrope.variable}`}>{children}</body>
      </html>
  );
}
