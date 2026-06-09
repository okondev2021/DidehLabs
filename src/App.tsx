import { Navbar, Hero, Marquee, Process, Services, DiagnosticEngine, About, CTA, Footer, SEO } from "@/components";

const App = () => {

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <>
      <SEO
        title="didehLabs | AI Systems, Web Engineering & Revenue Intelligence"
        description="didehLabs builds AI-powered systems that detect and fix revenue-killing issues in business websites. We combine web engineering, automation, and AI to improve performance, conversions, and growth."
        keywords="didehLabs, AI automation, web engineering, revenue intelligence, website optimization, conversion optimization, web performance, AI agents, business automation, Lagos tech"
        canonicalUrl="https://www.didehlabs.com.ng/"
      />
      <div className="bg-bg text-text-custom font-body selection:bg-accent-custom/20 selection:text-accent-custom min-h-screen antialiased">
        <Navbar />
        <main>
          <Hero fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} />
          <Marquee />
          <Process fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} />
          <Services fadeUpVariant={fadeUpVariant} staggerContainer={staggerContainer} />
          <DiagnosticEngine />
          <About fadeUpVariant={fadeUpVariant} />
          <CTA fadeUpVariant={fadeUpVariant} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
