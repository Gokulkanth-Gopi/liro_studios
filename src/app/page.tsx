import HomeMain from "@/pages/homes/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liro Studios - 360° Digital Marketing & Creative Agency",
  description: "Liro Studios is a premium creative digital agency specializing in 360° marketing, branding, social media, content production, and web design for ambitious brands.",
  openGraph: {
    title: "Liro Studios - 360° Digital Marketing & Creative Agency",
    description: "Liro Studios is a premium creative digital agency specializing in 360° marketing, branding, social media, content production, and web design for ambitious brands.",
    url: "https://lirostudios.com",
    siteName: "Liro Studios",
    type: "website",
  },
};

export default function Home() {
  return (
    <HomeMain />
  );
}
