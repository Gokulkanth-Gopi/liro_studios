import { Playfair_Display, Poppins, Inter } from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import Wrapper from "@/layouts/wrapper";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";
import ThemeProvider from "@/provider/ThemeProvider";
import dynamic from "next/dynamic";

// Lazy load GlobalVideoModal
const GlobalVideoModal = dynamic(() => import("@/components/Popup/GlobalVideoModal"));

// Poppins font – Primary font for body text
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

// Playfair Display font – Primary font for headings
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  preload: true,
});

// Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Liro Studios - Premium Digital Agency & Creative Portfolio",
  description: "Liro Studios is a top-tier digital agency specializing in modern design, branding, and IT solutions for ambitious brands.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/img/logo/logo-pin.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js liro-dark" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body  suppressHydrationWarning={true} className={`${poppins.variable} ${playfairDisplay.variable} ${inter.variable}`}>
        <ThemeProvider>
          <AppProvider>
            <Wrapper>
              <VideoProvider>
                  {children}
              </VideoProvider>
              <GlobalVideoModal />
            </Wrapper>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
