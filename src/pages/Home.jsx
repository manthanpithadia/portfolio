import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import imgMtd from '../assets/images/img_mtd.png';
import imgVision from '../assets/images/img_vision.png';
import imgGrowmore from '../assets/images/img_growmore.png';
import imgTransact from '../assets/images/img_transact.png';
import imgKanhalo from '../assets/images/img_kanhalo.png';

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
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 bg-background-light">
        <div className="grid-pattern absolute inset-0 -z-10 bg-background-light"></div>
        {/* Soft light abstract background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none opacity-40">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/10 to-[#60a5fa]/5 blur-3xl"></motion.div>
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] -left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-success-green/10 to-transparent blur-3xl"></motion.div>
        </div>

        {/* CSS 3D Abstract Object in Hero */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none [perspective:1200px] mt-16 md:mt-24 opacity-60 mix-blend-multiply">
          <motion.div 
            animate={{ rotateX: [10, 370], rotateY: [-20, 340] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
          >
            <div className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_60px_rgba(25,130,204,0.1)]" style={{ transform: "rotateX(70deg)" }}></div>
            <div className="absolute inset-[10%] rounded-full border border-success-green/20" style={{ transform: "rotateY(70deg)" }}></div>
            <div className="absolute inset-[5%] rounded-full border border-primary/10" style={{ transform: "rotateZ(45deg) rotateX(30deg)" }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-[40px] bg-gradient-to-tr from-primary/5 to-transparent border border-primary/10 backdrop-blur-md shadow-[0_0_100px_rgba(25,130,204,0.05)]" style={{ transform: "rotateZ(45deg) rotateX(15deg) translateZ(50px)" }}></div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
         <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-heading-text mb-8 text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            I build scalable MVPs that <br className="hidden md:block" /> <span className="text-primary relative inline-block">don’t bleed your runway.
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }} className="absolute -bottom-2 left-0 right-0 h-2 bg-primary/20 rounded-full origin-left"></motion.span>
            </span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sub-text md:text-xl">
            Senior Product Developer &amp; MVP Architect with 9+ years of experience. Applying a <span className="font-bold text-heading-text">fiduciary mindset</span> to your technical architecture.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="overflow-hidden group relative flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(25,130,204,0.6)]">
              <span className="relative z-10 flex items-center gap-2">Connect with me <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span></span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="w-8 bg-white/30 mix-blend-overlay"></div>
              </div>
            </a>
            <button 
              onClick={() => document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white/80 backdrop-blur-md px-8 py-4 text-base font-bold text-heading-text transition-all hover:bg-white hover:border-gray-300 hover:shadow-md"
            >
              View Methodology
            </button>
          </motion.div>
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-16 flex items-center justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors hover:scale-105 cursor-default">
              <span>9+ Years Build Time</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors hover:scale-105 cursor-default">
              <span>UI/UX Specialist</span>
            </div>
            <div className="technical-label flex flex-col items-center text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors hover:scale-105 cursor-default">
              <span>Industry Automation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Reports */}
      <section className="py-24 bg-white relative z-10" id="reports">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-16 flex items-end justify-between">
            <div>
              <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Case Studies</span>
              <h2 className="text-heading-text mt-2 text-3xl font-black tracking-tight md:text-4xl">Mission Reports</h2>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-sm text-sub-text">Technical documentation of</p>
              <p className="technical-label text-sm font-bold text-heading-text">HIGH-VELOCITY SHIPMENTS</p>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid gap-8 lg:grid-cols-2">
            {[
              {
                to: "/mytamildate",
                img: imgMtd,
                report: "Report 01: Community Platform",
                icon: "terminal",
                title: "mytamildate",
                desc: "A premium dating platform designed to help users build meaningful relationships through detailed matchmaking profiles, real-time communication, and a secure subscription-based ecosystem.",
                tags: ["Material UI (MUI)", "Emotion", "Bootstrap", "GSAP (animations)", "Formik & Yup (forms and validation)", "Axios", "Recharts"]
              },
              {
                to: "/kanhalo",
                img: imgKanhalo,
                report: "Report 02: Educational Platform",
                icon: "school",
                title: "Kanhalo",
                desc: "An online learning platform designed to teach French language courses through structured lessons, digital resources, and integrated online booking and payment systems.",
                tags: ["WORDPRESS", "TUTOR LMS", "WOOCOMMERCE", "MYSQL"]
              },
              {
                to: "/vision",
                img: imgVision,
                report: "Report 03: Assistive AI App",
                icon: "visibility",
                title: "VISION",
                desc: "An Android mobile application designed to assist visually impaired individuals by providing real-time text reading, object detection, and voice interactions.",
                tags: ["ANDROID", "TENSORFLOW", "YOLO V3", "OPENCV"]
              },
              {
                to: "/growmore",
                img: imgGrowmore,
                report: "Report 04: Finance & Investment",
                icon: "pie_chart",
                title: "Grow More",
                desc: "An Android application connecting startups and small businesses with potential investors to simplify the fundraising process for early-stage funding rounds.",
                tags: ["ANDROID (JAVA)", "NODE.JS", "MONGODB", "FIGMA"]
              },
              {
                to: "/transact",
                img: imgTransact,
                report: "Report 05: Mobile Banking",
                icon: "account_balance",
                title: "Transact",
                desc: "A mobile banking application designed to provide a secure, intuitive, and visually engaging experience for users managing their personal finances.",
                tags: ["FIGMA", "UI/UX", "MVVM"]
              }
            ].map((proj, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Link to={proj.to} className="block outline-none group flex flex-col h-full overflow-hidden rounded-xl bg-background-light border border-transparent hover:border-primary/10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 relative">
                    <motion.div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></motion.div>
                    <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt={proj.title} src={proj.img} />
                  </div>
                  <div className="flex flex-1 flex-col p-8 relative z-20 bg-background-light transition-colors group-hover:bg-white">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="technical-label text-[11px] font-bold uppercase tracking-widest text-sub-text group-hover:text-primary transition-colors">{proj.report}</p>
                      <span className="material-symbols-outlined text-icon-gray group-hover:text-primary transition-colors">{proj.icon}</span>
                    </div>
                    <h3 className="text-heading-text mb-3 text-2xl font-bold">{proj.title}</h3>
                    <p className="mb-6 leading-relaxed text-sub-text">
                      {proj.desc}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2 mt-auto">
                      {proj.tags.map(tag => (
                        <span key={tag} className="technical-label rounded bg-white px-2.5 py-1 text-[10px] font-bold text-main-text shadow-sm border border-gray-100 transition-colors group-hover:border-primary/20">{tag}</span>
                      ))}
                    </div>
                    <div className="overflow-hidden relative flex items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-bold text-heading-text transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                      <span className="relative z-10 flex items-center gap-2">View Full Technical Report <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">arrow_forward</span></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Fiduciary Framework */}
      <section className="py-24 bg-background-light relative z-10" id="framework">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Operational Ethos</span>
            <h2 className="text-heading-text mt-4 mb-16 text-3xl font-black tracking-tight md:text-5xl">The Fiduciary Framework</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "key", title: "Absolute Ownership", desc: "You own 100% of the code, the accounts, and the data. No proprietary \"black box\" dependencies or developer-lock-ins." },
              { icon: "verified_user", title: "Hardened Security", desc: "Enterprise-grade protocols from Day 1. Every MVP is architected with a security-first posture to protect your intellectual property and user data." },
              { icon: "query_stats", title: "Radical Transparency", desc: "Real-time velocity tracking and clear spend reports. You see exactly where every hour and every dollar of your runway is being invested." }
            ].map((fw, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group rounded-xl border border-gray-200 bg-white p-8 text-left transition-all hover:shadow-[0_20px_40px_-15px_rgba(25,130,204,0.15)] hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <span className="material-symbols-outlined text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{fw.icon}</span>
                </div>
                <h3 className="text-heading-text mb-4 text-xl font-bold transition-colors group-hover:text-primary">{fw.title}</h3>
                <p className="leading-relaxed text-sub-text relative z-10">
                  {fw.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="py-32 bg-white relative z-10" id="protocol">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mb-24 text-center">
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Ship Fast. Ship Right.</span>
            <h2 className="text-heading-text mt-4 text-3xl font-black tracking-tight md:text-5xl">The Protocol</h2>
            <p className="mt-4 text-sub-text">A 6-week velocity process to move from concept to deployment.</p>
          </motion.div>
          
          <div className="relative space-y-12 md:space-y-24">
            {/* Animated central connection line */}
            <motion.div 
              initial={{ height: 0 }} 
              whileInView={{ height: "100%" }} 
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-4 w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-success-green/30 origin-top z-0"
            ></motion.div>

            {[
              { num: "01", title: "Discovery & Audit", desc: "Deep dive into your business logic, user personas, and core technical requirements to define the MVP scope." },
              { num: "02", title: "Architectural Blueprint", desc: "Defining the stack, database schema, and infrastructure setup to ensure scalability from the first line of code.", reverse: true },
              { num: "03", title: "Sprint 0: Infrastructure", desc: "Setting up CI/CD, staging environments, and boilerplate foundation for rapid feature iteration." },
              { num: "04", title: "Velocity Build", desc: "The meat of the project. Shipping core features in 1-week cycles with frequent stakeholder updates.", reverse: true },
              { num: "05", title: "Security Hardening", desc: "Penetration testing, optimization, and refining the user experience for production-ready polish." },
              { num: "rocket_launch", title: "Mission Deployment", desc: "Final handoff, training, and production launch. Your MVP is live and ready for real users.", reverse: true, isFinal: true }
            ].map((step, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className={`relative flex flex-col md:flex-row ${step.reverse ? 'md:flex-row-reverse' : ''} md:items-center group`}>
                <motion.div 
                  initial={{ scale: 0 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className={`z-10 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-110 md:absolute md:left-1/2 md:-translate-x-1/2 ${step.isFinal ? 'bg-success-green text-white' : 'bg-primary text-white'}`}
                >
                  {step.isFinal ? <span className="material-symbols-outlined text-2xl">rocket_launch</span> : <span className="technical-label text-xl font-bold">{step.num}</span>}
                </motion.div>
                <div className={`mt-6 md:mt-0 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] md:w-[45%] relative ${step.isFinal ? 'border-2 border-success-green bg-success-green/5' : 'border border-gray-100 bg-background-light hover:border-primary/20 hover:bg-white'}`}>
                  {/* Connection pointing arrow to central pipeline for desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent ${step.reverse ? 'left-[-12px] border-r-[12px] border-r-gray-100' : 'right-[-12px] border-l-[12px] border-l-gray-100'} ${step.isFinal && step.reverse ? '!border-r-success-green/20' : ''}`}></div>
                  
                  <h4 className={`mb-3 text-xl font-bold ${step.isFinal ? 'text-success-green' : 'text-heading-text'}`}>{step.title}</h4>
                  <p className="text-base leading-relaxed text-sub-text">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-24 bg-white relative z-10" id="achievements">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mb-16 text-center">
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Milestones & Validation</span>
            <h2 className="text-heading-text mt-4 text-3xl font-black tracking-tight md:text-5xl">Achievements & Certifications</h2>
            <p className="mt-4 text-sub-text">Formal recognition of technical expertise and industry contributions.</p>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Certification",
                icon: "verified",
                title: "Google Advanced Data Analytics",
                desc: "Advanced professional certification covering machine learning, statistics, and predictive analytics.",
                date: "2024",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
                link: "https://www.credly.com/badges/7cfafc1c-886f-441e-a88a-5b23ab9aa0ef"
              },
              {
                category: "Certification",
                icon: "verified",
                title: "Google Data Analytics Professional",
                desc: "Completed Google’s professional certification covering comprehensive data analysis and visualization.",
                date: "2023",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
                link: "https://www.credly.com/badges/eebd608e-d1c7-449d-bd45-3cc3ba771634"
              },
              {
                category: "Education",
                icon: "school",
                title: "PG Diploma, Mobile Solutions",
                desc: "Completed postgraduate program with distinction in mobile application development at Conestoga College.",
                date: "2023",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
              },
              {
                category: "Education",
                icon: "school",
                title: "B.E. in Information Technology",
                desc: "Graduated with 9.2 CGPA (~3.8 GPA), consistently among top academic performers at Gujarat Technological University.",
                date: "2020",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
              },
              {
                category: "Award",
                icon: "emoji_events",
                title: "Devang Mehta IT Award",
                desc: "Ranked among top 100 IT students across all GTU-affiliated colleges. Awarded consecutively.",
                date: "2018 & 2019",
                img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop"
              },
              {
                category: "Award",
                icon: "emoji_events",
                title: "Best Academic Performance Award",
                desc: "Recognized for outstanding academic performance among IT department students at VIT Gujarat.",
                date: "2018",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0e53a0?q=80&w=600&auto=format&fit=crop"
              },
              {
                category: "Speaking",
                icon: "mic",
                title: "Android Development Lecture",
                desc: "Invited expert speaker delivering Basics of Android Development lecture at Parul University.",
                date: "2021",
                img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group flex flex-col h-full justify-between rounded-xl border border-gray-100 bg-background-light p-8 transition-all hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(25,130,204,0.1)] hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none"></div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{item.icon}</span>
                    </div>
                    <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary/70">{item.category}</span>
                  </div>

                  <h3 className="text-heading-text mb-3 text-lg font-bold transition-colors group-hover:text-primary leading-tight">{item.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-sub-text">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <span className="technical-label text-[10px] font-bold uppercase tracking-widest text-primary/70">{item.date}</span>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 hover:underline text-xs font-bold transition-colors">
                      <span>View Credential</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Filter */}
      <section className="py-24 bg-background-light relative z-10" id="filter">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mb-16 text-center">
            <span className="technical-label text-xs font-bold uppercase tracking-widest text-primary">Pre-Qualification Matrix</span>
            <h2 className="text-heading-text mt-4 text-3xl font-black tracking-tight md:text-5xl">The Filter</h2>
            <p className="mt-4 text-sub-text">I only partner with founders where I can provide a 10x ROI on architecture.</p>
          </motion.div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Ideal Match */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="rounded-2xl border-2 border-success-green/20 bg-white p-10 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(39,165,81,0.2)] transition-shadow">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-green/10 text-success-green">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-heading-text">Ideal Partnership</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Founders with a validated market and a clear roadmap for the next 12 months.",
                  "Startups looking for a long-term technical partner, not just a \"feature factory.\"",
                  "Ventures that value scalability, security, and technical excellence from Day 1.",
                  "Teams with seed funding or a self-sustaining revenue model."
                ].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 transition-transform">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-green/10 text-success-green mt-0.5"><span className="material-symbols-outlined text-sm font-bold">add</span></span>
                    <span className="text-main-text font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Non-Match */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="rounded-2xl border border-gray-200 bg-gray-50/80 p-10 opacity-90 hover:opacity-100 transition-opacity">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-icon-gray">
                  <span className="material-symbols-outlined text-3xl">cancel</span>
                </div>
                <h3 className="text-2xl font-bold text-heading-text">Non-Match</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Pre-validation \"ideas\" that haven't talked to a single potential customer yet.",
                  "Founders looking for the \"cheapest possible\" offshore dev shop build.",
                  "Projects where technical debt is viewed as a \"future problem\" rather than a cost.",
                  "Short-term mercenary work without a vision for a scalable product."
                ].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: -5 }} className="flex items-start gap-4 transition-transform">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-icon-gray mt-0.5"><span className="material-symbols-outlined text-sm font-bold">remove</span></span>
                    <span className="text-sub-text font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mt-20 text-center">
            <a href="https://wa.me/+918780572995" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-12 py-5 text-lg font-black text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">Ready to Build? Connect with me <span className="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span></span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="w-12 bg-white/20 mix-blend-overlay"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Home;
