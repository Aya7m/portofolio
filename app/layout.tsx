import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata = {
  title: "Aya | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Express.js, NestJS, MongoDB, and PostgreSQL.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "NestJS",
    "MongoDB",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
