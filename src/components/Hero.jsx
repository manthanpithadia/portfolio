import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-white pt-32 pb-0">
       
       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center z-0">
          {/* Left Column: Headline & Status Pill */}
          <div className="relative z-20 flex flex-col items-start order-2 lg:order-1">
             {/* Floating Status Pill */}
             <div className="mb-8 lg:mb-12">
                <Reveal delay={0.2}>
                  <div className="bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-xs font-medium text-neutral-600">Open for Analytics & Dev Roles</span>
                  </div>
                </Reveal>
             </div>

             {/* Headline */}
             <div className="max-w-4xl">
               <Reveal delay={0.3}>
                 <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-neutral-900 leading-[1.1] md:leading-[1.05] lg:leading-[0.95]">
                   Manthan is bridging <br/>
                   <span className="text-neutral-400">Financial Insights</span> <br/>
                   with Mobile Tech.
                 </h1>
               </Reveal>
               <Reveal delay={0.4}>
                  <p className="mt-8 text-lg text-neutral-500 max-w-lg leading-relaxed">
                    Financial Analyst & Android Developer based in Toronto. I build data-driven software solutions and optimize financial operations using Genesys, SQL, and Kotlin.
                  </p>
               </Reveal>
             </div>
          </div>

          {/* Right Column: Central Image Container */}
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[85vh] flex items-end justify-center order-1 lg:order-2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative h-full aspect-[0.75] md:aspect-[0.85] flex items-end justify-center"
             >
               {/* The Image with Linear Bottom Fade */}
               <div className="relative w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" 
                    alt="Manthan" 
                    className="w-full h-full object-cover object-center"
                    style={{ 
                       maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                       WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    }}
                  />
               </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default Hero;
