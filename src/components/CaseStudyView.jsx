import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const CaseStudyView = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center bg-white/90 backdrop-blur-sm">
        <button onClick={onBack} className="flex items-center gap-2 text-neutral-600 hover:text-black transition-colors">
          <ArrowLeft size={20} /> Back to Work
        </button>
        <span className="text-sm font-mono uppercase tracking-widest text-neutral-400">{project.title}</span>
      </div>

      <div className="pt-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20">
        <Reveal>
          <div className="flex flex-col gap-6 mb-16">
             <div className="inline-flex items-center gap-3">
               <span className={`w-3 h-3 rounded-full ${project.id === 'vision' ? 'bg-purple-500' : project.id === 'travel-connect' ? 'bg-sky-500' : 'bg-rose-500'}`}></span>
               <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">{project.category}</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 tracking-tighter max-w-4xl">
               {project.caseStudy.tagline}
             </h1>
          </div>
        </Reveal>

        {/* Hero Image Area */}
        <Reveal delay={0.1}>
          <div className={`w-full aspect-video rounded-2xl ${project.colorClass} flex items-center justify-center mb-24`}>
             <div className="opacity-50 scale-150 text-neutral-900 mix-blend-overlay">
               {project.icon}
             </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col gap-16">
            <Reveal delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{project.caseStudy.challenge}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{project.caseStudy.solution}</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-8">System Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.caseStudy.architecture.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-12">
             <Reveal delay={0.3}>
                <div className="border-t border-neutral-200 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full border border-neutral-200">{tech}</span>
                    ))}
                  </div>
                </div>
             </Reveal>

             <Reveal delay={0.4}>
                <div className="border-t border-neutral-200 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Key Results</h4>
                  <ul className="space-y-3">
                    {project.caseStudy.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                        <CheckCircle size={16} className="text-neutral-900 shrink-0 mt-0.5" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
             </Reveal>
          </div>
        </div>
        
        <div className="mt-32 pt-16 border-t border-neutral-100 flex justify-center">
            <button 
              onClick={onBack}
              className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors font-medium"
            >
              Back to Portfolio
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyView;
