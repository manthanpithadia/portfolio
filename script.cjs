const fs = require('fs');
const path = require('path');

const srcDir = 'a:/antigravity/portfolio-project/src';
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

// 1. Process code.html
const codeHtmlPath = path.join(srcDir, 'assets', 'code.html');
const codeHtml = fs.readFileSync(codeHtmlPath, 'utf8');

const mainMatch = codeHtml.match(/<main>([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error("Could not find <main> in code.html");
  process.exit(1);
}

let mainContent = mainMatch[1];
mainContent = mainContent.replace(/class="/g, 'className="');
mainContent = mainContent.replace(/<!--(.*?)-->/g, '{/*$1*/}');

// Fix unclosed hr or br tags if any exist (none seem to exist in the excerpt, but just in case)
mainContent = mainContent.replace(/<hr([^>]*)>/g, '<hr$1/>');
mainContent = mainContent.replace(/<br([^>]*)>/g, '<br$1/>');
// Fix input/img if unclosed without /> 
mainContent = mainContent.replace(/<img(.*?[^\/])>/g, '<img$1 />');

const myTamilDateJsx = `import React from 'react';

const MyTamilDate = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
${mainContent}
      </main>
    </div>
  );
};

export default MyTamilDate;
`;

const kanhalaJsx = `import React from 'react';

const Kanhala = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
${mainContent}
      </main>
    </div>
  );
};

export default Kanhala;
`;

fs.writeFileSync(path.join(pagesDir, 'MyTamilDate.jsx'), myTamilDateJsx);
fs.writeFileSync(path.join(pagesDir, 'Kanhala.jsx'), kanhalaJsx);

// 2. Process App.jsx to extract Home.jsx
const appJsxPath = path.join(srcDir, 'App.jsx');
const appJsxContent = fs.readFileSync(appJsxPath, 'utf8');

const heroSectionIndex = appJsxContent.indexOf('{/* Hero Section */}');
const appEndIndex = appJsxContent.lastIndexOf('</div>');

const homeInnerContent = appJsxContent.substring(heroSectionIndex, appEndIndex);

const homeJsx = `import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
${homeInnerContent.replace(
  /<button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">([\s\S]*?)View Full Technical Report([\s\S]*?)<\/button>/,
  '<Link to="/mytamildate" className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">View Full Technical Report</Link>'
).replace(
  /<button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">([\s\S]*?)View Full Technical Report([\s\S]*?)<\/button>/,
  '<Link to="/kanhala" className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white">View Full Technical Report</Link>'
).replace(
  /href="#reports"/g, 'href="/#reports"'
).replace(
  /href="#framework"/g, 'href="/#framework"'
).replace(
  /href="#protocol"/g, 'href="/#protocol"'
).replace(
  /href="#filter"/g, 'href="/#filter"'
)}
    </>
  );
};

export default Home;
`;

fs.writeFileSync(path.join(pagesDir, 'Home.jsx'), homeJsx);
console.log("Done generating pages.");
