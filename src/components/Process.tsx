"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = ({ fadeUpVariant, staggerContainer }: { fadeUpVariant: any, staggerContainer: any }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const steps = [
        { num: "01", icon: "🔍", title: "Scout & Discover", desc: "We identify and qualify targets using automated scouts across Google Maps and business directories — extracting real contact data, websites, and social presence." },
        { num: "02", icon: "⚡", title: "Deep Technical Audit", desc: "Lighthouse performance, mobile responsiveness, SSL, broken assets, CTA presence — the full technical picture in seconds, not days." },
        { num: "03", icon: "🧠", title: "Revenue Gap Scoring", desc: "Each business gets a precision lead score based on conversion-impacting gaps — not vanity metrics. High score = high opportunity." },
        { num: "04", icon: "🔧", title: "Engineer the Fix", desc: "From targeted performance fixes to complete full-stack rebuilds, we engineer solutions that actually move business outcomes — not just audit reports." }
    ];

    return (
        <section id="how" className="bg-bg2 section-padding" ref={ref}>
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUpVariant} className="text-center mb-14">
                <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-4">The Process</p>
                <h2 className="font-head text-[1.9rem] sm:text-4xl font-extrabold tracking-tighter mb-[1.2rem] max-w-[640px] mx-auto text-text-custom leading-tight">
                    Engineered from first principles, not templates
                </h2>
                <p className="text-[1rem] font-light text-muted-custom max-w-[520px] mx-auto leading-relaxed">
                    Every engagement starts with intelligence — we know what's broken before we say hello. Then we fix it right.
                </p>
            </motion.div>

            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5px] bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {steps.map((step) => (
                    <motion.div key={step.num} variants={fadeUpVariant} className="bg-bg2 p-10 hover:bg-card-custom2 transition-colors duration-250 group">
                        <div className="font-head text-[3.5rem] font-extrabold text-white/[0.04] leading-none mb-6 tracking-tighter">{step.num}</div>
                        <div className="w-11 h-11 rounded-xl bg-accent-custom/5 border border-accent-custom/10 flex items-center justify-center text-[1.1rem] mb-[1.2rem]">{step.icon}</div>
                        <h3 className="font-head text-[1rem] font-bold text-text-custom mb-[0.6rem] tracking-tight">{step.title}</h3>
                        <p className="text-[0.88rem] text-muted-custom leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Process;