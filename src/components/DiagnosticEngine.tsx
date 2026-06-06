"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DiagnosticEngine = () => {
    const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ width: "var(--target-width)", transition: { duration: 1.2, ease: "easeOut" } });
        }
    }, [inView, controls]);

    return (
        <section id="demo" className="bg-bg2 section-padding" ref={ref}>
            <div className="text-center mb-14">
                <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-4">The Diagnostic Engine</p>
                <h2 className="font-head text-[1.9rem] sm:text-4xl font-extrabold tracking-tighter mb-[1.2rem] max-w-[640px] mx-auto text-text-custom leading-tight">
                    We audit before we say hello
                </h2>
                <p className="text-[1rem] font-light text-muted-custom max-w-[520px] mx-auto leading-relaxed">
                    Our proprietary engine monitors performance, security, and conversion infrastructure — so every conversation starts with precision, not guesswork.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                <div className="bg-card-custom border border-white/5 rounded-2xl overflow-hidden">
                    <div className="bg-card-custom2 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                        <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                        <div className="w-[10px] h-[10px] rounded-full bg-[#ffbc2e]" />
                        <div className="w-[10px] h-[10px] rounded-full bg-[#29c941]" />
                        <span className="text-[0.76rem] text-muted-custom ml-2 font-mono">ascendiq_engine › audit_result.json</span>
                    </div>
                    <div className="p-6">
                        <div className="text-[0.78rem] text-muted-custom mb-[1.2rem] flex justify-between items-center">
                            <span>target: <span className="text-text-custom">lokiscatering.ng</span></span>
                            <span className="text-accent-custom text-[0.72rem]">● LIVE SCAN</span>
                        </div>

                        {/* Metric Bars */}
                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]">
                            <label className="text-muted-custom">Performance Score</label>
                            <div className="flex items-center gap-3">
                                <div className="h-[3px] bg-white/5 rounded-sm w-20 overflow-hidden">
                                    <motion.div animate={controls} style={{ '--target-width': '28%' } as React.CSSProperties} className="h-full bg-[#ef4444] w-0" />
                                </div>
                                <span className="font-head font-bold text-[0.88rem] w-7 text-right text-[#ef4444]">28</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]">
                            <label className="text-muted-custom">SEO Score</label>
                            <div className="flex items-center gap-3">
                                <div className="h-[3px] bg-white/5 rounded-sm w-20 overflow-hidden">
                                    <motion.div animate={controls} style={{ '--target-width': '54%' } as React.CSSProperties} className="h-full bg-[#f59e0b] w-0" />
                                </div>
                                <span className="font-head font-bold text-[0.88rem] w-7 text-right text-[#f59e0b]">54</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]"><label className="text-muted-custom">SSL / HTTPS</label><span className="text-[#ef4444] font-semibold text-[0.82rem]">✗ Missing</span></div>
                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]"><label className="text-muted-custom">Mobile Responsive</label><span className="text-[#ef4444] font-semibold text-[0.82rem]">✗ Broken</span></div>
                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]"><label className="text-muted-custom">Booking / Order Flow</label><span className="text-[#ef4444] font-semibold text-[0.82rem]">✗ Not Found</span></div>
                        <div className="flex justify-between items-center py-[0.7rem] border-b border-white/5 text-[0.86rem]"><label className="text-muted-custom">WhatsApp CTA</label><span className="text-accent-custom font-semibold text-[0.82rem]">✓ Present</span></div>
                        <div className="flex justify-between items-center py-[0.7rem] text-[0.86rem]"><label className="text-muted-custom">Broken Images</label><span className="text-[#f59e0b] font-semibold text-[0.82rem]">⚠ 4 detected</span></div>

                        <div className="mt-[1.2rem] flex gap-[0.75rem] flex-wrap">
                            <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold px-[0.75rem] py-[0.28rem] rounded-full bg-accent-custom/5 border border-accent-custom/15 text-accent-custom">● HIGH_VALUE_PROSPECT</span>
                            <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold px-[0.75rem] py-[0.28rem] rounded-full bg-accent2/5 border border-accent2/15 text-accent2">Score: 78 / 100</span>
                        </div>
                    </div>
                </div>

                {/* Insight Breakdown List */}
                <div>
                    <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent-custom mb-[1.2rem]">What the engine catches</p>
                    <ul className="flex flex-col gap-[1.2rem] list-none">
                        {[
                            { icon: "⚡", label: "Performance Degradation", desc: "Pages loading above 3s. Real customers bounce before they see anything." },
                            { icon: "🔒", label: "Security Gaps", desc: "Missing SSL, exposed HTTP — browsers flag these. Trust is lost before a word is read." },
                            { icon: "📲", label: "Broken Conversion Paths", desc: "No booking flow, no clear CTA, no WhatsApp link. Revenue leaks through invisible gaps." },
                            { icon: "🖼️", label: "Broken Visual Assets", desc: "Images that don't load kill credibility — especially for food, fashion, and service businesses." }
                        ].map((insight, index) => (
                            <li key={index} className="flex gap-4 items-start p-[1.1rem_1.2rem] bg-card-custom border border-white/5 rounded-xl hover:border-accent-custom/15 transition-colors">
                                <div className="text-[1rem] w-9 h-9 bg-accent-custom/5 border border-accent-custom/10 rounded-lg flex items-center justify-center shrink-0">{insight.icon}</div>
                                <div>
                                    <p className="text-[0.82rem] font-medium text-text-custom mb-[0.2rem]">{insight.label}</p>
                                    <p className="text-[0.8rem] text-muted-custom leading-relaxed">{insight.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <a href="#cta" className="bg-accent-custom text-bg px-6 py-[0.7rem] rounded-lg font-semibold text-[0.9rem] hover:opacity-85 transition-opacity inline-block font-body">
                            Discuss a Project →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiagnosticEngine;