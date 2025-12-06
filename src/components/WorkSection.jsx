import React from 'react';
import Section from './Section';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

const WorkSection = ({ onOpenProject }) => {
  return (
    <Section className="bg-white" id="work">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-20">Selected Works</h2>
      </Reveal>
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={onOpenProject} />
        ))}
      </div>
    </Section>
  );
};

export default WorkSection;
