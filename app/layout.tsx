import type { Metadata } from "next";
import "./globals.css";

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
      <body class="bg-black">{children}</body>
    </html>
  );
}
