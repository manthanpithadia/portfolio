import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <Reveal>
      <div className="group mb-32 flex flex-col md:flex-row gap-12 items-center">
        {/* Visual Side */}
        <div 
          onClick={() => onOpen(project)}
          className={`cursor-pointer w-full md:w-3/5 aspect-[4/3] relative overflow-hidden rounded-sm bg-neutral-100 ${index % 2 === 1 ? 'md:order-2' : ''}`}
        >
           <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${project.colorClass}`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-30 text-neutral-900">
                {project.icon}
              </div>
           </div>
           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-widest text-neutral-900">
             {project.status}
           </div>
        </div>

        {/* Content Side */}
        <div className={`w-full md:w-2/5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
          <div className="flex flex-col gap-4">
             <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
               <span>0{index + 1}</span>
               <span className="w-12 h-[1px] bg-neutral-300"></span>
               <span>{project.category}</span>
             </div>
             <h3 className="text-4xl md:text-5xl font-bold text-neutral-900">{project.title}</h3>
             <p className="text-neutral-600 leading-relaxed text-lg">
               {project.description}
             </p>
             
             <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
               {project.stack.map((tech) => (
                 <span key={tech} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">{tech}</span>
               ))}
             </div>

             <button 
               onClick={() => onOpen(project)}
               className={`mt-6 inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-60 transition-opacity ${index % 2 === 1 ? 'md:self-end' : 'self-start'}`}
             >
               View Case Study <ArrowUpRight size={18} />
             </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
