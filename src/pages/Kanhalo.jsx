import React from 'react';
import { motion } from 'framer-motion';
import imgmtd1 from '../assets/images/kanhalo1.png';
import imgmtd2 from '../assets/images/kanhalo2.png';
import imgmtd3 from '../assets/images/kanhalo3.png';
import imgmtd4 from '../assets/images/kanhalo4.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Kanhala = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="absolute inset-0 -z-10 bg-slate-50"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              Kanhalo
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              An online learning platform designed to teach French language courses (A1–B2 levels) through structured lessons, digital resources, and integrated online booking and payment systems.
            </motion.p>
            {/* Tech Badges */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3 mb-12">
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">WordPress CMS</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">Tutor LMS</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">WooCommerce</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">MySQL</motion.span>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">

            {/* 1. Project Overview */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Project Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p><strong>Purpose of the Product:</strong> The platform was built to provide structured French language courses online, allow students to easily enroll in courses, manage classes, resources, and payments in one centralized system, and enable instructors to deliver digital learning efficiently.</p>
                <p>Kanhalo focuses on language education accessibility, allowing students to learn French remotely while managing lessons, schedules, and course materials through a single platform.</p>
              </div>
            </motion.div>

            {/* 2. Problem Statement & Target Users */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Problem Statement</motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <p className="mb-4 text-sm text-slate-600">Many independent language instructors struggle to manage their online courses because they rely on fragmented tools such as WhatsApp, Google Forms, and manual payments.</p>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Inefficient course management</span></li>
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Poor student experience</span></li>
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Difficulty scaling teaching operations</span></li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-success-green/20 shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(39,165,81,0.2)] hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>French language learners (A1–B2 levels)</span></li>
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>Students preparing for exams such as TEF or DELF</span></li>
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>Language instructors offering online courses</span></li>
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 italic">A unified platform was needed to simplify course delivery, enrollment, and payments.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* 3. Solution */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Solution</h2>
              <p className="text-slate-600 mb-6">
                Kanhalo was developed as a centralized online learning platform that integrates course management, student enrollment, payment processing, learning resources, and instructor scheduling. Students can browse courses, enroll, pay online, and access learning materials in one place.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <h3 className="font-bold text-lg mb-6 text-center">Core Workflow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">Student</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">Browse Courses</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">Enroll &amp; Pay</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-primary text-white rounded-lg shadow-md transition-shadow hover:shadow-lg">Access Dashboard</motion.div>
                </div>
              </div>
            </motion.div>

            {/* 4. Key Features */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Key Features</motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "menu_book", title: "Structured Course Catalog", desc: "Students can browse structured courses including A1, A2, and B1/B2 levels, complete with syllabus details." },
                  { icon: "how_to_reg", title: "Online Enrollment System", desc: "Streamlined enrollment process featuring course selection, registration, and automated confirmations." },
                  { icon: "payments", title: "Integrated Payment System", desc: "Securely processes multiple payment gateways including UPI, Credit/Debit cards, and PayPal." },
                  { icon: "folder_open", title: "Learning Resource Access", desc: "Digital materials access including downloadable worksheets, recordings, exercises, and notes." },
                  { icon: "edit_calendar", title: "Instructor Scheduling", desc: "Calendar integration for class time management, session scheduling, and automated reminders." },
                  { icon: "reviews", title: "Student Reviews", desc: "Feedback system that helps maintain course quality and credibility of the platform." }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="group border border-slate-200 bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20">
                    <span className="material-symbols-outlined text-primary mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">{feature.icon}</span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 8. UI Design & Key Screens */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <div className="flex items-center justify-between mb-8">
                <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading">
                  UI Design & Key Screens
                </motion.h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">                   
                    <img src={imgmtd1} alt="Home Screen" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Home Screen</h4>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={imgmtd2} alt="Blog Post" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Blog Post</h4>
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">                   
                    <img src={imgmtd3} alt="Courses Page" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Courses Page</h4>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={imgmtd4} alt="Booking Page" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Booking Page</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 6. System Architecture */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">System Architecture</h2>
              <div className="p-10 border border-slate-200 rounded-2xl bg-slate-50 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex flex-col items-center justify-center gap-4 relative z-10">
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">Frontend Website (Student Browser)</motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="material-symbols-outlined text-primary/50">arrow_downward</motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">WordPress CMS / Tutor LMS Plugin</motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="material-symbols-outlined text-primary/50">arrow_downward</motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-md transition-all">Course Database (MySQL)</motion.div>
                </div>
                <p className="mt-8 text-sm text-slate-600 max-w-2xl mx-auto relative z-10">The CMS-based architecture was selected because it allows rapid course publishing, simplifies content updates, provides built-in LMS features, and reduces custom backend development complexity.</p>
              </div>
            </motion.div>

            {/* 7. Technical Challenges */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Technical Challenges</h2>
              <div className="space-y-6">
                {[
                  { title: "Challenge 1 — Course Access Control", prob: "Ensuring that only enrolled students could access course materials.", sol: "Implemented LMS-based permission systems where content becomes accessible only after successful enrollment and payment." },
                  { title: "Challenge 2 — Payment Gateway Integration", prob: "Supporting domestic and international students required multiple payment methods.", sol: "Integrated payment gateways supporting UPI, credit cards, and PayPal for global accessibility." },
                  { title: "Challenge 3 — Managing Course Content", prob: "Organizing lessons, materials, and resources effectively.", sol: "Used a structured LMS approach with lesson modules, downloadable resources, and categorized content." }
                ].map((chal, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="bg-white border text-left border-slate-200 p-6 rounded-xl transition-all hover:shadow-md hover:border-primary/20 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 transition-colors group-hover:bg-primary"></div>
                    <h3 className="font-bold text-lg mb-3 text-slate-800 transition-colors group-hover:text-primary">{chal.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <strong className="text-slate-700">Problem:</strong> {chal.prob}<br/>
                      <strong className="text-slate-700 mt-2 inline-block">Solution:</strong> {chal.sol}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 8. Performance / 9. Results */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Performance & Optimization</h2>
                <ul className="space-y-6 text-slate-600">
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">speed</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Content Delivery:</strong>
                      <span className="text-sm">Static assets optimized to reduce load times.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">extension</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Efficient Plugins:</strong>
                      <span className="text-sm">Only essential plugins used to minimize overhead.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">hourglass_empty</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Lazy Loading:</strong>
                      <span className="text-sm">Media assets loaded only when needed.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">dns</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Caching Strategy:</strong>
                      <span className="text-sm">Reduced server load and expedited page responses.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Results & Impact</h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">trending_up</span></span> 
                    <span className="font-medium text-slate-200">Simplified enrollment for students</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">inventory_2</span></span> 
                    <span className="font-medium text-slate-200">Centralized management of course content</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">payments</span></span> 
                    <span className="font-medium text-slate-200">Streamlined payment collection</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">auto_graph</span></span> 
                    <span className="font-medium text-slate-200">Scalable structure for adding more courses</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* 10. Lessons & 11. Future */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Lessons Learned</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>LMS significantly reduces custom development needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Multiple payment options are essential for international reach.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Structured modules heavily improve user navigation and experience.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Future Improvements</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">smartphone</span>
                    <span className="font-medium">Mobile learning application</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">smart_toy</span>
                    <span className="font-medium">AI-powered learning assistance</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">analytics</span>
                    <span className="font-medium">Automated quizzes and student analytics</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">forum</span>
                    <span className="font-medium">Community discussion forums</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* 12. Tech Stack */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6 text-center">Technology Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "WordPress CMS", "Tutor LMS", "MySQL", "Hostinger Hosting", "WooCommerce"
                ].map((tech, idx) => (
                  <motion.span whileHover={{ scale: 1.05 }} key={idx} className="px-5 py-2.5 bg-slate-50 rounded-full text-sm font-bold border border-slate-200 text-slate-700 transition-colors hover:bg-primary hover:text-white hover:border-primary cursor-default shadow-sm">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Kanhala;
