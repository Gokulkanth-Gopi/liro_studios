import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Liro Studios",
  description: "Get in touch with Liro Studios. We are here to help you with your digital needs. Contact us today for a consultation.",
  openGraph: {
    title: "Contact Us - Liro Studios",
    description: "Get in touch with Liro Studios. We are here to help you with your digital needs. Contact us today for a consultation.",
    url: 'https://lirostudios.com/contact',
    siteName: 'Liro Studios',
    images: [
        {
            url: 'https://lirostudios.com/og-image.jpg', 
            width: 1200,
            height: 630,
        },
    ],
    type: 'website',
  },
};

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
