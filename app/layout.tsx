import type { Metadata } from "next";
import "./globals.css";
import emailjs from "@emailjs/browser";

export const metadata: Metadata = {
  title: "harshit-portfolio",
  description: "Created with v0",
  icons: {
    icon: "/favicon.png",
  },
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
