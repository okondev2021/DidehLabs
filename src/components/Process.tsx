import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from './SectionHeading'

const steps = [
  {
    num: "01",
    title: "Scout & Discover",
    desc: "We identify and qualify targets using automated scouts across Google Maps and business directories, extracting real contact data, websites, and social presence.",
  },
  {
    num: "02",
    title: "Deep Technical Audit",
    desc: "Lighthouse performance, mobile responsiveness, SSL, broken assets, CTA presence. The full technical picture in seconds, not days.",
  },
  {
    num: "03",
    title: "Revenue Gap Scoring",
    desc: "Each business gets a precision lead score based on conversion-impacting gaps — not vanity metrics. High score means high opportunity.",
  },
  {
    num: "04",
    title: "Engineer the Fix",
    desc: "From targeted performance fixes to complete full-stack rebuilds, we engineer solutions that move business outcomes, not just audit reports.",
  },
]

const Process = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="how" className="section-y border-b border-border bg-background" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our Workflow"
          title="Engineered from first principles"
          description="Every engagement starts with intelligence. We know what's broken before we say hello, then we fix it right."
          centered
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group border border-border bg-card p-8 flex flex-col justify-between min-h-[260px] hover:border-primary/45 transition-colors cursor-default"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-heading text-lg font-black text-primary tracking-wide transition duration-300 group-hover:scale-125 inline-block">{step.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary transition duration-300 group-hover:scale-150" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase tracking-wider text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
