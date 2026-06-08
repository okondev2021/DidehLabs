"use client";
import { motion } from 'framer-motion';

const Hero = ({ fadeUpVariant, staggerContainer }: { fadeUpVariant: any, staggerContainer: any }) => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-[5%] py-[120px] relative overflow-hidden bg-bg">
            <div className="absolute rounded-full filter blur-[120px] opacity-10 pointer-events-none w-[700px] h-[700px] bg-accent-custom top-[-200px] left-1/2 -translate-x-1/2" />
            <div className="absolute rounded-full filter blur-[120px] opacity-[0.07] pointer-events-none w-[500px] h-[500px] bg-accent2 bottom-[-200px] -right-[100px]" />
            <div className="absolute rounded-full filter blur-[120px] opacity-[0.06] pointer-events-none w-[400px] h-[400px] bg-accent3 bottom-[-100px] -left-[100px]" />

            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center z-10">
                <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 bg-accent-custom/5 border border-accent-custom/20 rounded-full px-4 py-[0.35rem] text-[0.78rem] text-accent-custom font-semibold mb-8 tracking-widest uppercase">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent-custom animate-pulse" />
                    Full-Stack Web Engineering Studio
                </motion.div>

                <motion.h1 variants={fadeUpVariant} className="font-head text-4xl sm:text-[3.5rem] md:text-[5rem] font-extrabold tracking-tighter leading-[1.07] mb-6 max-w-[800px] text-text-custom">
                    We engineer <em className="not-italic text-accent-custom">web presence</em><br />that drives real business.
                </motion.h1>

                <motion.p variants={fadeUpVariant} className="text-[1.1rem] text-muted-custom max-w-[540px] font-light leading-relaxed mb-10">
                    DidehLabs audits, rebuilds, and architects web infrastructure for businesses worldwide. Performance-first. Conversion-focused. No agency fluff.
                </motion.p>

                <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 flex-wrap">
                    <a href="#services" className="bg-accent-custom text-bg px-8 py-[0.75rem] rounded-lg font-semibold text-[0.95rem] hover:opacity-85 hover:-translate-y-[1px] transition-all duration-150 font-body">
                        Explore Our Work
                    </a>
                    <a href="#cta" className="text-muted-custom border border-white/5 px-6 py-[0.75rem] rounded-lg text-[0.95rem] hover:text-text-custom hover:border-white/15 transition-colors font-body">
                        Discuss a Project →
                    </a>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="flex gap-12 mt-20 flex-wrap justify-center">
                    <div className="text-center">
                        <strong className="block font-head text-[2rem] font-extrabold text-text-custom tracking-tight">4+</strong>
                        <span className="text-[0.82rem] text-muted-custom">Years shipping production systems</span>
                    </div>
                    <div className="text-center">
                        <strong className="block font-head text-[2rem] font-extrabold text-text-custom tracking-tight">∞</strong>
                        <span className="text-[0.82rem] text-muted-custom">Geography. We work anywhere.</span>
                    </div>
                    <div className="text-center">
                        <strong className="block font-head text-[2rem] font-extrabold text-text-custom tracking-tight">0</strong>
                        <span className="text-[0.82rem] text-muted-custom">Cookie-cutter templates used</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;