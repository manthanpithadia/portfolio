import React from 'react';
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';
import Reveal from './Reveal';

const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-neutral-900">
            Let's drive results.
          </h2>
          <p className="text-xl text-neutral-500 mb-12">
            Available for opportunities in Financial Analysis or Android Development in Toronto.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:manthanthanpithadia2410@gmail.com"
              className="bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all w-full md:w-auto inline-flex items-center justify-center cursor-pointer"
            >
              Start a Conversation
            </a>
            
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-50 transition-all w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Download Resume
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex justify-center gap-8 mt-20 text-neutral-400">
             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><Linkedin size={24} /></a>
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><Github size={24} /></a>
             <a href="mailto:manthanthanpithadia2410@gmail.com" className="hover:text-neutral-900 transition-colors"><Mail size={24} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
