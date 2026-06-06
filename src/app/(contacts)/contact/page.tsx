import ContactMain from '@/pages/contacts/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us - Liro Studios",
    description: "Get in touch with Liro Studios, a leading digital agency. We specialize in Web Design, Development, and SEO. Contact us today for a free consultation.",
    keywords: ["Liro Studios", "Digital Agency", "Contact", "Web Design", "Development", "Creative Studio", "Digital Marketing Agency India", "Web Development Company", "Creative Design Studio", "SEO Services", "Branding Agency", "Liro Studios Contact", "Hire React Developers"],
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

const page = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Liro Studios",
        "description": "Get in touch with Liro Studios for your digital agency needs.",
        "url": "https://lirostudios.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "Liro Studios",
            "url": "https://lirostudios.com",
            "logo": "https://lirostudios.com/assets/img/logo/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918778796477",
                "contactType": "customer service",
                "email": "contact@lirostudios.com",
                "areaServed": "IN",
                "availableLanguage": "en"
            },
            "sameAs": [
                "https://instagram.com/liro_studios",
                "https://www.linkedin.com/company/liro-studios"
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                suppressHydrationWarning
            />
            <ContactMain />
        </>
    );
};

export default page;