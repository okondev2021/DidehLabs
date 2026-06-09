import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    id: 1,
    name: 'David Chen',
    role: 'VP of Product',
    org: 'VentureHealth Tech',
    quote:
      'DidehLabs completely overhauled our checkout flows and optimized our API layers. Our conversion rate increased by 22% in two months and page load times dropped under 400ms.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'CTO',
    org: 'Lumina Payments',
    quote:
      "Jedidiah is one of those rare engineers who is hyper-focused on business metrics. He didn't just rebuild our app; he solved the mobile checkout drops we had been struggling with for a year.",
  },
  {
    id: 3,
    name: 'Alexander Adebayo',
    role: 'Head of Engineering',
    org: 'Sabi Logistics',
    quote:
      'Their automated diagnostic tools pinpointed several memory leaks and database query issues we had missed. Outstanding delivery discipline, fast updates, and zero template garbage.',
  },
]

const Testimonials = () => {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Hear from our clients"
          title="Trusted on consequential work"
          description="What partners say about delivery, transparency, and outcomes."
          centered
        />

        <div className="relative mx-auto mt-14 max-w-4xl border border-border bg-background p-8 md:p-12">
          <div className="absolute left-0 top-0 h-1 w-full bg-primary" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.figure
              key={testimonials[i].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="font-heading text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                &ldquo;{testimonials[i].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-8">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                  {testimonials[i].name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonials[i].role} · {testimonials[i].org}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition cursor-pointer ${idx === i ? 'w-8 bg-primary' : 'w-2 bg-border'}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
