"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = ({ fadeUpVariant }: { fadeUpVariant: any }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const mailToLink = "mailto:okonjedidiah5@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20AscendIQ&body=Hi%20Jedidiah%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.";
    const whatsappLink = "https://wa.me/2349062953901?text=Hi%20Jedidiah%2C%20I%20found%20AscendIQ%20and%20would%20like%20to%20discuss%20a%20project.";

    return (
        <section id="cta" className="bg-bg2 text-center relative overflow-hidden section-padding" ref={ref}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(var(--color-accent-custom)/0.05,_transparent)] pointer-events-none" />
            <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUpVariant} className="relative z-10 max-w-[700px] mx-auto">
                <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-4 justify-center flex">Let's Build</p>
                <h2 className="font-head text-[2rem] sm:text-[3.5rem] font-extrabold tracking-tighter mb-[1.2rem] text-text-custom leading-tight">Let's build something <em className="not-italic text-accent-custom">high-performance.</em></h2>
                <p className="text-muted-custom text-[1rem] font-light max-w-[500px] mx-auto mb-10 leading-relaxed">Whether you need critical technical repairs or a complete full-stack build from scratch, we engineer digital presence that drives business. Worldwide, no restrictions.</p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <a href={mailToLink} className="bg-accent-custom text-bg px-8 py-[0.8rem] rounded-lg font-semibold text-[0.95rem] hover:opacity-85 transition-opacity font-body">Start a Conversation</a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25d366]/10 text-[#25d366] border border-[#25d366]/25 px-8 py-[0.8rem] rounded-lg font-semibold text-[0.95rem] hover:bg-[#25d366]/15 transition-colors font-body flex items-center gap-2">
                        WhatsApp
                    </a>
                </div>
                <p className="mt-[1.8rem] text-[0.82rem] text-muted-custom">okonjedidiah5@gmail.com &nbsp;·&nbsp; Lagos, Nigeria &nbsp;·&nbsp; Remote-First</p>
            </motion.div>
        </section>
    );
}

export default CTA;