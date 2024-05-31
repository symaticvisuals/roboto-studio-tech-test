import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";



export const metadata: Metadata = {
  title: "Top insights from AI talks",
  description: "Catch up on the latest talks in artificial intelligence, all from the comfort of your front room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'w-screen overflow-x-hidden scroll-smooth')}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
