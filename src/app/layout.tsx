import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Age calculator app",
  description: "Age calculator app created by Dmino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
