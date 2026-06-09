import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = 'didehLabs | AI Systems, Web Engineering & Revenue Intelligence for Businesses',
    description = 'didehLabs builds AI-powered systems that detect and fix revenue-killing issues in business websites. We combine web engineering, automation, and AI to improve performance, conversions, and growth.',
    keywords = 'didehLabs, AI automation, web development, revenue intelligence, website optimization, web performance, conversion optimization, AI agents, business automation',
    canonicalUrl,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image'
}) => {
    const siteUrl = 'https://www.didehlabs.com.ng';
    const fullUrl = canonicalUrl || siteUrl;
    const fullOgImageUrl = `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph Tags */}
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImageUrl} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImageUrl} />

            {/* WebSite Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "didehLabs",
                    "url": "https://www.didehlabs.com.ng",
                    "description": description
                })}
            </script>
        </Helmet>
    );
};

export default SEO;