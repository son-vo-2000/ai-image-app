import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavContextProvider } from "@/NavContext/NavContext";
import logo from "../public/hand.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Images",
  description: "Generate AI Images",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavContextProvider>
        <body className={inter.className}>{children}</body>
      </NavContextProvider>
    </html>
  );
}
