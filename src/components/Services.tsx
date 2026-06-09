import { LayoutGrid, Zap, Target, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: LayoutGrid,
    title: 'Design & Build (Frontend Systems)',
    body:
      'Custom-engineered, high-performance, mobile-first web applications built with React, Next.js, and modern tools. No templates, no page builders—pure, maintainable code.',
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    body:
      'Speed is a direct revenue multiplier. We profile and eliminate bottlenecks—asset loading, server latency, database calls—to guarantee rapid, bounce-free page loads.',
  },
  {
    icon: Target,
    title: 'Conversion Architecture',
    body:
      'Converting traffic into clients. We audit checkout paths, lead generation forms, WhatsApp integrations, and booking flows, building high-conversion funnels.',
  },
  {
    icon: Bot,
    title: 'AI Pipelines & Automation Systems',
    body:
      'Intelligent features that automate tasks and add value. We integrate LLMs, RAG systems, and custom automated agents directly into your existing codebase.',
  },
]

const Services = () => {
  return (
    <section id="services" className="section-y border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our services"
          title="Integrated delivery, end to end"
          description="We build, optimize, and automate web systems for ambitious companies worldwide—combining deep engineering discipline with conversion-focused UX and custom AI systems."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-16 grid gap-px bg-border md:grid-cols-2"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                className="bg-background p-8 lg:p-10"
              >
                <Icon className="h-10 w-10 text-primary" strokeWidth={1.25} />
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                <button
                  type="button"
                  className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:text-accent cursor-pointer"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn more
                </button>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
