import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Rusty Abbott | Developer Profile",
  description: "A compilation of projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
