import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="contact" className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 border border-border bg-background p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16"
        >
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
              Tell us what you&apos;re building
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Share your project scope, schedule, and success criteria. We&apos;ll respond with a clear path forward—whether you need full-stack web engineering, custom AI pipelines, or conversion rate optimization.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:okonjedidiah5@gmail.com"
                className="btn-corporate px-8 text-center"
              >
                Request a consultation
              </a>
              <a
                href="https://wa.me/2347042932301?text=Hello%20Jedidiah,%20I'd%20like%20to%20discuss%20a%20project%20with%20DidehLabs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-border bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-primary text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="space-y-8 border-t border-border pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            {[
              { label: 'Email', value: 'okonjedidiah5@gmail.com' },
              { label: 'WhatsApp', value: '+234 7042932301' },
              { label: 'Response time', value: 'Within 24 hours' },
            ].map((row) => (
              <div key={row.label}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{row.label}</p>
                {row.label === 'Email' ? (
                  <a href="mailto:okonjedidiah5@gmail.com" className="mt-2 block font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    {row.value}
                  </a>
                ) : row.label === 'WhatsApp' ? (
                  <a href="https://wa.me/2347042932301" target="_blank" rel="noopener noreferrer" className="mt-2 block font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    {row.value}
                  </a>
                ) : (
                  <p className="mt-2 font-heading text-lg font-semibold text-foreground">{row.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
