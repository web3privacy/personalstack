import type { Metadata } from "next";
import { Major_Mono_Display, Archivo } from "next/font/google";
import "./globals.css";

const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
  weight: "variable",
});

const majorMono = Major_Mono_Display({
  variable: "--font-major-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Privacy Stack Explorer",
  description: "explore what privacy stack experts are using",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoSans.variable} ${majorMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
