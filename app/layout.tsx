import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rusty Abbott | Developer Profile",
  description: "A compilation of projects.",
  icons: [
      {
          rel: "icon",
          url: "/img/favicon.ico"
      },
      {
          rel: "icon",
          url: "/img/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
      },
      {
          rel: "icon",
          url: "/img/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
      },
      {
          rel: "apple-touch-icon",
          url: "/img/apple-touch-icon.png",
          sizes: "180x180"
      }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
