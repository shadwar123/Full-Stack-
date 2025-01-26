import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import {Inter as FontSans} from "next/font/google"
import {cn} from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={ cn( "min-h-screen bg-slate-50 font-sans antialiased", fontSans.variable)}
      >
        <Toaster richColors position="top-right" />
        {children}
        
      </body>
    </html>
  );
}
