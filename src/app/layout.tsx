import InstallApp from "@/components/InstallApp";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starbucks Demo",
  description: "THIS IS A STARBUCKS DEMO WEBSITE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <InstallApp />
        {children}
      </body>
    </html>
  );
}
