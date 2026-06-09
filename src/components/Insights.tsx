import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const items = [
  {
    title: 'Eliminating bloated script overhead to recover 14% cart abandons',
    date: 'May 2026',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Architecting server-side systems: our approach to React 19 and Vite 8',
    date: 'April 2026',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Leveraging custom LLM pipelines for local content generation and support automation',
    date: 'March 2026',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
  },
]

const Insights = () => {
  return (
    <section id="insights" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">Insights</p>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
              News & perspectives
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Engineering case studies, performance benchmarks, and insights on web optimization and AI integration.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.14em] text-accent transition hover:text-primary md:self-auto cursor-pointer"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group cursor-pointer border border-border bg-card transition hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.date}</p>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground transition group-hover:text-accent">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights
