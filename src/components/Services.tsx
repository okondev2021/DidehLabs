"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = ({ fadeUpVariant, staggerContainer }: { fadeUpVariant: any, staggerContainer: any }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const coreServices = [
        { icon: "🏗️", title: "Website Design & Build", desc: "Custom-engineered, fast, mobile-first sites built to convert visitors into customers. No templates. No page builders. Real, maintainable code.", tags: ["Next.js", "React", "Django", "Tailwind"] },
        { icon: "📊", title: "Performance Engineering", desc: "Slow sites bleed customers silently. We pinpoint and fix the exact bottlenecks — from asset loading to server response — that make people bounce.", tags: ["Lighthouse", "Core Web Vitals", "CDN"] },
        { icon: "📱", title: "Mobile Experience", desc: "Most customers are on a phone. We audit and rebuild mobile UX so nothing is broken, clipped, or slow on small screens where it matters most.", tags: ["Responsive Design", "PWA", "Touch UX"] },
        { icon: "🔗", title: "Conversion Architecture", desc: "Booking flows, WhatsApp CTAs, pricing clarity, contact funnels — we wire up every path that turns a passive visitor into a paying customer.", tags: ["CTA Systems", "WhatsApp", "Booking Flows"] },
        { icon: "🔍", title: "SEO & Discoverability", desc: "Invisible on Google means irrelevant. We fix on-page SEO, schema markup, metadata, and local search presence so the right people find you.", tags: ["On-Page SEO", "Schema Markup", "Local SEO"] },
        { icon: "🤖", title: "AI Integration", desc: "From automated intelligence pipelines to LLM-powered product features, we embed AI where it actually creates business value — not just for the buzzword.", tags: ["OpenAI", "Gemini", "Claude", "RAG"] },
    ];

    return (
        <section id="services" className="bg-bg section-padding" ref={ref}>
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUpVariant} className="mb-14">
                <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-4">What We Build</p>
                <h2 className="font-head text-[1.9rem] sm:text-4xl font-extrabold tracking-tighter mb-[1.2rem] max-w-[640px] text-text-custom leading-tight">
                    End-to-end web engineering, worldwide
                </h2>
                <p className="text-[1rem] font-light text-muted-custom max-w-[520px] leading-relaxed">
                    Whether your site is broken, slow, or nonexistent — we handle everything from architecture to deployment.
                </p>
            </motion.div>

            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreServices.map((srv, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeUpVariant}
                        whileHover={{ y: -3 }}
                        className="bg-card-custom border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-accent-custom/20 transition-colors"
                    >
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-custom to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-[1.5rem] mb-[1.2rem]">{srv.icon}</div>
                        <h3 className="font-head text-[1.05rem] font-bold text-text-custom mb-[0.6rem] tracking-tight">{srv.title}</h3>
                        <p className="text-[0.88rem] text-muted-custom leading-relaxed mb-[1.2rem]">{srv.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {srv.tags.map(t => <span key={t} className="text-[0.72rem] font-medium tracking-wider px-[0.65rem] py-[0.22rem] rounded-full bg-white/[0.03] border border-white/5 text-muted-custom">{t}</span>)}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Services;