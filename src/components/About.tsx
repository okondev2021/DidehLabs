"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ fadeUpVariant }: { fadeUpVariant: any }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const coreStack = [
        "Python / Django", "React / Next.js", "Node.js", "TypeScript", "PostgreSQL",
        "Firebase / Firestore", "Playwright", "Lighthouse API", "Gemini / OpenAI",
        "Hedera Blockchain", "Tailwind CSS", "GCP · Vercel · Heroku"
    ];

    return (
        <section id="about" className="bg-bg section-padding" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 items-center">
                <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUpVariant} className="relative">
                    <div className="w-full max-w-[380px] aspect-[4/5] bg-card-custom border border-white/5 rounded-[20px] overflow-hidden relative">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-card-custom to-card-custom2">
                            <div className="w-[90px] h-[90px] rounded-full bg-accent-custom/5 border-2 border-accent-custom/20 flex items-center justify-center font-head text-[2rem] font-extrabold text-accent-custom">JO</div>
                            <div className="font-head text-[1.1rem] font-bold text-text-custom tracking-tight">Jedidiah Okon</div>
                            <div className="text-[0.83rem] text-muted-custom">Founder · Full-Stack Engineer</div>
                        </div>
                    </div>
                    <div className="absolute bottom-[-1rem] right-[-1rem] bg-card-custom2 border border-accent-custom/20 rounded-xl px-4 py-[0.75rem] text-[0.8rem] text-accent-custom font-semibold whitespace-nowrap">
                        📍 Lagos, Nigeria · Remote-First
                    </div>
                </motion.div>

                <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUpVariant}>
                    <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-4">The Builder Behind It</p>
                    <h2 className="font-head text-[1.8rem] sm:text-[2.6rem] font-extrabold tracking-tighter mb-[1.2rem] text-text-custom leading-tight">4+ years shipping production systems. Not mockups.</h2>
                    <p className="text-muted-custom text-[0.98rem] font-light leading-relaxed mb-4">I'm Jedidiah — a full-stack engineer who has led cross-functional teams, architected blockchain-based healthcare traceability on Hedera, built fintech payment APIs with Paystack, and shipped EdTech platforms from Lagos. Healthcare, Fintech, EdTech — all real production code.</p>
                    <p className="text-muted-custom text-[0.98rem] font-light leading-relaxed mb-4">DidehLabs is the intelligence system I built to find businesses silently losing customers online, and fix it. The audit engine, the lead scoring, the AI-powered outreach — all custom code, running now.</p>
                    <p className="text-muted-custom text-[0.98rem] font-light leading-relaxed mb-4">No agency intermediaries. No outsourced mystery developers. You work directly with the engineer who built the tools and will build yours.</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {coreStack.map(tag => <span key={tag} className="text-[0.77rem] font-medium px-[0.75rem] py-[0.28rem] rounded-md bg-white/[0.03] border border-white/5 text-muted-custom">{tag}</span>)}
                    </div>
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <a href="https://jedidiahokon.netlify.app" target="_blank" rel="noopener noreferrer" className="bg-accent-custom text-bg px-[1.4rem] py-[0.65rem] rounded-md font-semibold text-[0.88rem] hover:opacity-85 transition-opacity font-body">View Portfolio →</a>
                        <a href="mailto:okonjedidiah5@gmail.com" className="text-muted-custom border border-white/5 px-[1.2rem] py-[0.65rem] rounded-md text-[0.88rem] hover:text-text-custom hover:border-white/15 transition-colors font-body">Email Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;