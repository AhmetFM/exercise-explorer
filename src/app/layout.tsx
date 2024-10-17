import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Exercise Explorer",
    template: "%s | Exercise Explorer",
  },
  description:
    "Exercise Explorer is a website for finding exercise routines for different fitness goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <Navbar />
            <Toaster />
            <div className="w-[100%] m-auto lg:w-[80%] xl:w-[70%] min-h-[calc(100vh-272px)]">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
