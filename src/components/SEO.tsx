import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogImageAlt?: string;
    ogType?: string;
    twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = 'didehLabs | AI Systems, Web Engineering & Revenue Intelligence for Businesses',
    description = 'didehLabs builds AI-powered systems that detect and fix revenue-killing issues in business websites. We combine web engineering, automation, and AI to improve performance, conversions, and growth.',
    keywords = 'didehLabs, AI automation, web development, revenue intelligence, website optimization, web performance, conversion optimization, AI agents, business automation',
    canonicalUrl,
    ogImage = '/favicon/android-chrome-512x512.png',
    ogImageAlt = 'didehLabs brand mark',
    ogType = 'website',
    twitterCard = 'summary_large_image'
}) => {
    const siteUrl = 'https://www.didehlabs.com.ng';
    const fullUrl = canonicalUrl || siteUrl;
    const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="application-name" content="didehLabs" />
            <meta name="theme-color" content="#030611" />

            {/* Favicons */}
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
            <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph Tags */}
            <meta property="og:site_name" content="didehLabs" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImageUrl} />
            <meta property="og:image:secure_url" content={fullOgImageUrl} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:image:alt" content={ogImageAlt} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImageUrl} />
            <meta name="twitter:image:alt" content={ogImageAlt} />

            {/* WebSite Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "didehLabs",
                    "url": siteUrl,
                    "description": description,
                    "image": fullOgImageUrl
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
