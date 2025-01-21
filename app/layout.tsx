import type { Metadata } from "next";
import "./globals.css";
import emailjs from "@emailjs/browser";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  emailjs.init("j6AdRJxoXuSP0zcfD");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
