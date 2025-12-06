import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-100' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className="text-xl font-bold tracking-tighter text-neutral-900 cursor-pointer w-32"
        onClick={() => onHomeClick ? onHomeClick() : window.scrollTo({top:0, behavior:'smooth'})}
      >
        MANTHAN.
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
        <a href="#work" onClick={scrollToSection('work')} className="hover:text-black transition-colors cursor-pointer">Work</a>
        <a href="#about" onClick={scrollToSection('about')} className="hover:text-black transition-colors cursor-pointer">About</a>
        <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-black transition-colors cursor-pointer">Contact</a>
      </div>

      <div className="w-32 flex justify-end">
        <a 
          href="mailto:manthanthanpithadia2410@gmail.com"
          className="bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all cursor-pointer"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
