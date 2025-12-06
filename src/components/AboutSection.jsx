import React from 'react';
import { BarChart3, Code, Server, Lock } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';

const AboutSection = () => {
  return (
    <Section className="bg-[#111] text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Data-Driven <br />
              <span className="text-neutral-500">Problem Solver.</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <p className="text-xl text-neutral-300 leading-relaxed font-light">
              I possess a unique duality of skills: the analytical precision of a Financial Analyst and the creative problem-solving of a Software Developer. This allows me to not just build applications, but to engineer solutions that are financially viable and operationally efficient.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-neutral-400 leading-relaxed">
              Currently at <strong>Gatestone Co.</strong>, I leverage data analytics to optimize credit risk management and have achieved $105k in monthly collections through strategic analysis. Previously, as an <strong>Android Developer</strong>, I built high-performance apps like 'Vision' (TensorFlow) and 'Travel Connect', optimizing for scalability and user engagement.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <h3 className="text-sm font-mono uppercase text-neutral-500 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-neutral-300">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><BarChart3 size={14}/> Financial Analysis</h4>
                    <ul className="text-sm space-y-1 text-neutral-400">
                      <li>KPI Monitoring & Reporting</li>
                      <li>Credit Risk Assessment</li>
                      <li>Excel (Macros, Pivot), Tableau, SQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Code size={14}/> Mobile Development</h4>
                    <ul className="text-sm space-y-1 text-neutral-400">
                      <li>Android (Kotlin, Java)</li>
                      <li>RoomDB, SQLite, Firebase</li>
                      <li>MVVM Architecture</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Server size={14}/> Tools & Platforms</h4>
                    <ul className="text-sm space-y-1 text-neutral-400">
                      <li>Genesys Cloud, Citrix</li>
                      <li>SAP, QuickBooks, Xero</li>
                      <li>Android SDK, Git</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2"><Lock size={14}/> Key Achievements</h4>
                    <ul className="text-sm space-y-1 text-neutral-400">
                      <li>$105k Monthly Collections (Gatestone)</li>
                      <li>38% Increased Student Engagement (VIER)</li>
                      <li>23k Requests/Hour API Design (Rishabh)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
