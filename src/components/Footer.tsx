const Footer = () => {
    return (
        <footer className="bg-bg border-t border-white/5 px-[5%] py-12 flex justify-between items-center flex-wrap gap-6">
            <a className="font-head text-[1.2rem] font-extrabold tracking-tight text-text-custom" href="#hero">
                Ascend<span className="text-accent-custom">IQ</span>
            </a>
            <p className="text-[0.8rem] text-muted-custom">Web engineering for growing businesses. Built for every business, working worldwide.</p>
            <div className="flex gap-8">
                <a href="https://jedidiahokon.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-muted-custom hover:text-text-custom transition-colors">Portfolio</a>
                <a href="https://linkedin.com/in/jedidiah-okon" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-muted-custom hover:text-text-custom transition-colors">LinkedIn</a>
                <a href="mailto:okonjedidiah5@gmail.com" className="text-[0.82rem] text-muted-custom hover:text-text-custom transition-colors">Email</a>
            </div>
        </footer>
    );
}

export default Footer;