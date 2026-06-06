"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[5%] h-[68px] bg-bg/92 backdrop-blur-[14px] border-b border-white/5">
        <a className="font-head text-[1.4rem] font-extrabold tracking-tight text-text-custom" href="#hero">
          Ascend<span className="text-accent-custom">IQ</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li><a href="#how" className="text-muted-custom text-[0.88rem] tracking-wide hover:text-text-custom transition-colors">Process</a></li>
          <li><a href="#services" className="text-muted-custom text-[0.88rem] tracking-wide hover:text-text-custom transition-colors">Services</a></li>
          <li><a href="#demo" className="text-muted-custom text-[0.88rem] tracking-wide hover:text-text-custom transition-colors">Engine</a></li>
          <li><a href="#about" className="text-muted-custom text-[0.88rem] tracking-wide hover:text-text-custom transition-colors">About</a></li>
          <li>
            <a href="#cta" className="border border-accent-custom/30 text-accent-custom px-[1.2rem] py-[0.45rem] rounded-[6px] text-[0.85rem] font-medium hover:bg-accent-custom/5 hover:border-accent-custom/50 transition-all">
              Start a Conversation
            </a>
          </li>
        </ul>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-[38px] h-[38px] bg-transparent border border-white/5 rounded-lg text-text-custom cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-[1.5px] bg-text-custom rounded-sm transition-transform duration-250 ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
          <span className={`block w-4 h-[1.5px] bg-text-custom rounded-sm transition-opacity duration-250 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-4 h-[1.5px] bg-text-custom rounded-sm transition-transform duration-250 ${isOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 bottom-0 z-[190] bg-bg/97 backdrop-blur-xl border-t border-white/5 flex flex-col items-center justify-center gap-10"
          >
            {['Process', 'Services', 'Engine', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-head text-[1.6rem] font-bold text-muted-custom tracking-tight hover:text-text-custom transition-colors">
                {item}
              </a>
            ))}
            <a href="#cta" onClick={() => setIsOpen(false)} className="font-head text-[1.1rem] font-bold text-accent-custom border border-accent-custom/30 px-8 py-[0.65rem] rounded-md tracking-tight hover:bg-accent-custom/5 transition-colors">
              Start a Conversation
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}


export default Navbar;