import {
  Navbar,
  Hero,
  Marquee,
  Process,
  Services,
  DiagnosticEngine,
  ValuesStrip,
  About,
  PeopleBand,
  BrandStory,
  Legacy,
  Testimonials,
  Materials,
  CTA,
  Footer,
  SEO,
} from "@/components";

const App = () => {
  return (
    <div className="relative z-[2] flex min-h-screen w-full flex-col overflow-x-hidden">
      <SEO
        title="didehLabs | AI Systems, Web Engineering & Revenue Intelligence"
        description="didehLabs builds AI-powered systems that detect and fix revenue-killing issues in business websites. We combine web engineering, automation, and AI to improve performance, conversions, and growth."
        keywords="didehLabs, AI automation, web engineering, revenue intelligence, website optimization, conversion optimization, web performance, AI agents, business automation, Lagos tech"
        canonicalUrl="https://www.didehlabs.com.ng/"
        ogImage="/favicon/android-chrome-512x512.png"
        ogImageAlt="didehLabs brand mark"
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden />

      <Navbar />
      <Hero />
      <Marquee />
      <Process />
      <Services />
      <DiagnosticEngine />
      <ValuesStrip />
      <About />
      <PeopleBand />
      <BrandStory />
      <Legacy />
      <Testimonials />
      <Materials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
