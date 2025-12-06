import React from 'react';

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`px-6 md:px-12 lg:px-24 py-20 md:py-32 ${className}`}>
    {children}
  </section>
);

export default Section;
