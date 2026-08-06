import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes"
import ThemeButton from "@/components/buttons/ThemeButton";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaron Arquette - Portfolio",
  description: "Portfolio of Aaron Arquette, complete with projects, about section, and contact sections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    lang="en"
    className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, 'bg-background')}
    suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col">
        <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        >
          <NavBar />
          {children}
          <ThemeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
