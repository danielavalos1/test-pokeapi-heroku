import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";

const outfit: NextFont = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Poke App",
  description: "Poke App de prueba para Heroku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
