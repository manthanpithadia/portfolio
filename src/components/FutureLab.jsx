import React from 'react';
import Section from './Section';
import Reveal from './Reveal';

const FutureLab = () => {
  return (
    <Section className="bg-[#FDFDFD]">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications & Learning</h2>
          <p className="text-neutral-500">Continuous professional development.</p>
        </div>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Google Data Analytics", sub: "Professional Certificate", color: "bg-orange-50" },
          { title: "Mobile Solutions", sub: "Post-Grad (GPA 3.70)", color: "bg-green-50" },
          { title: "Advanced Analytics", sub: "Google Professional Cert", color: "bg-purple-50" }
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className={`p-8 ${item.color} rounded-sm border border-neutral-100 h-64 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-default`}>
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 font-bold text-sm">
                 0{i + 1}
               </div>
               <div>
                 <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                 <p className="text-neutral-500 text-sm mt-1">{item.sub}</p>
               </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default FutureLab;
