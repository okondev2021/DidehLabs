const Marquee = () => {
    const targetItems = [
        "Performance Engineering", "Lead Intelligence", "Mobile-First Builds",
        "SEO Architecture", "Conversion Systems", "AI Integration", "Full-Stack Development", "Trust Signal Audits"
    ];
    const duplicateArray = [...targetItems, ...targetItems];

    return (
        <div className="overflow-hidden border-y border-white/5 py-[0.85rem] bg-bg2">
            <div className="flex gap-12 animate-marquee w-max whitespace-nowrap">
                {duplicateArray.map((text, idx) => (
                    <span key={idx} className="font-head text-[0.78rem] font-semibold tracking-widest uppercase text-muted-custom flex items-center gap-[0.8rem]">
                        {text} <span className="text-accent-custom">·</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;