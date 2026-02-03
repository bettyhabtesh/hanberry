import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import { salvager } from "./lib/fonts";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "HanBerry Beauty",
  description: "Be your own kind of beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${salvager.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
