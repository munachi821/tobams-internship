import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Tobams Group",
  description: "Tobams Group internship application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
