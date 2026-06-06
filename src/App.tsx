import { Navbar, Hero, Marquee, Process, Services, DiagnosticEngine, About, CTA, Footer } from "@/components";

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
  )
}

export default App
