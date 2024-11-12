import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Suspense } from "react";
import Loading from "./loading";

const outfit: NextFont = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Detalle del pokemon",
  description: "Detalle del pokemon de prueba para Heroku",
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
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
