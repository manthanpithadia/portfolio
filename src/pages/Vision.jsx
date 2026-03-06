import React from 'react';
import { motion } from 'framer-motion';
import vision1 from '../assets/images/vision1.png';
import vision2 from '../assets/images/vision2.png';
import vision3 from '../assets/images/vision3.png';

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

const Vision = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="absolute inset-0 -z-10 bg-slate-50"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              VISION
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              An Android mobile application designed to assist visually impaired individuals by providing real-time text reading, object detection, voice interaction, and navigation support.
            </motion.p>
            {/* Tech Badges */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-3 mb-12">
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">Android (Java/Kotlin)</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">TensorFlow / YOLO v3</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">OpenCV</motion.span>
              <motion.span variants={fadeUp} className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200 transition-all hover:border-primary hover:text-primary hover:shadow-sm cursor-default">Google Maps API</motion.span>
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
                <p><strong>Purpose of the Product:</strong> VISION was developed to improve the independence and accessibility of visually impaired users by enabling them to interact with their surroundings through AI-powered vision technologies and voice-based controls.</p>
                <p>The application helps users read printed text in real time, detect nearby objects, navigate using voice guidance, and interact with the application hands-free. By combining computer vision, speech recognition, and navigation services, the app aims to significantly improve everyday accessibility.</p>
              </div>
            </motion.div>

            {/* 2. Problem Statement & Target Users */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Problem Statement</motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeUp} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <p className="mb-4 text-sm text-slate-600">Individuals with partial or full blindness often face challenges performing everyday tasks resulting in reduced independence.</p>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Reading printed text on menus, labels, or signs</span></li>
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Identifying objects in their surroundings</span></li>
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Navigating unfamiliar environments</span></li>
                    <li className="flex gap-3 group"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1 transition-transform group-hover:scale-125">close</span> <span>Interacting with visual mobile applications</span></li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-success-green/20 shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(39,165,81,0.2)] hover:-translate-y-1">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>Individuals with partial or complete vision loss</span></li>
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>Visually impaired users in unfamiliar environments</span></li>
                    <li className="flex gap-3 group"><span className="text-success-green bg-success-green/10 p-1 rounded-full material-symbols-outlined shrink-0 text-xs mt-0.5 transition-transform group-hover:rotate-12">check</span> <span>Users requiring assistive tech for daily tasks</span></li>
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 italic">A mobile solution using AI and voice interaction can significantly enhance accessibility and autonomy.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* 3. Solution */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Solution</h2>
              <p className="text-slate-600 mb-6">
                VISION is an AI-powered assistive Android application integrating computer vision, speech recognition, and navigation services. Using the smartphone camera and AI models, it analyzes the environment and provides audio feedback to users.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <h3 className="font-bold text-lg mb-6 text-center">Core Workflow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">Voice / Camera Input</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">AI Processing (OCR/YOLO)</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm transition-colors hover:bg-white hover:border-primary/30">Text-to-Speech Output</motion.div>
                  <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="material-symbols-outlined text-primary rotate-90 md:rotate-0">arrow_forward</motion.span>
                  <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-auto p-4 bg-primary text-white rounded-lg shadow-md transition-shadow hover:shadow-lg">User Receives Guidance</motion.div>
                </div>
              </div>
            </motion.div>

            {/* 4. Key Features */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Key Features</motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: "document_scanner", title: "Real-Time Text Reading (OCR)", desc: "Extracts text from the camera feed using OCR to read menus/labels and provides instant audio feedback." },
                  { icon: "center_focus_strong", title: "Object Detection (YOLO v3)", desc: "Integrates deep learning models to identify objects in frame and improve real-world environmental awareness." },
                  { icon: "record_voice_over", title: "Voice Command Interaction", desc: "A robust voice interface (e.g., \"Read text\", \"Start navigation\") enables a seamlessly hands-free user experience." },
                  { icon: "explore", title: "Navigation Assistance", desc: "Integrates Google Maps API for route guidance, audio instructions, and confident location awareness." }
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="group border border-slate-200 bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20">
                    <span className="material-symbols-outlined text-primary mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">{feature.icon}</span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* UI Design & Key Screens */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
              <div className="flex items-center justify-between mb-6">
                <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-heading">
                  UI Design & Key Screens
                </motion.h2>
              </div>

              {/* Vision Screens */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">                   
                    <img src={vision1} alt="Vision Screen 1" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Home Screen</h4>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={vision2} alt="Vision Screen 2" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">OCR Screen</h4>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group transition-all hover:shadow-xl hover:border-primary/20 cursor-pointer">
                    <img src={vision3} alt="Vision Screen 3" className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Object Detection</h4>
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
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">Android App (Camera / Mic Input)</motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="material-symbols-outlined text-primary/50">arrow_downward</motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm transition-all hover:border-primary/30">AI Layer (OCR / YOLO v3 OpenCV)</motion.div>
                  <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="material-symbols-outlined text-primary/50">arrow_downward</motion.span>
                  <motion.div whileHover={{ scale: 1.02 }} className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-md transition-all">Text-to-Speech Engine Output</motion.div>
                </div>
                <p className="mt-8 text-sm text-slate-600 max-w-2xl mx-auto relative z-10">This architecture allows real-time processing on mobile devices, efficient inference, and seamless integration with hardware to ensure low latency and responsive feedback.</p>
              </div>
            </motion.div>

            {/* 7. Technical Challenges */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Technical Challenges</h2>
              <div className="space-y-6">
                {[
                  { title: "Challenge 1 — Real-Time Image Processing", prob: "Maintaining smooth mobile performance while analyzing camera feed.", sol: "Optimized camera frame processing and limited analysis frequency to balance accuracy and overhead." },
                  { title: "Challenge 2 — Object Detection on Mobile", prob: "YOLO v3 models are computationally expensive for mobile hardware.", sol: "Used optimized model inference and reduced input resolution to manage resource constraints." },
                  { title: "Challenge 3 — Accessibility-Focused UI", prob: "Visual UI paradigms do not translate to visually impaired users.", sol: "Designed primarily with voice-first interactions and heavily fortified audio feedback loops." }
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
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">memory</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Frame Processing:</strong>
                      <span className="text-sm">Processed selectively to reduce CPU load.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">speed</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Model Optimization:</strong>
                      <span className="text-sm">YOLO optimized for robust mobile inference with lower latency.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">api</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Efficient API Usage:</strong>
                      <span className="text-sm">Navigation requests throttled to avoid exhausting API calls.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><span className="material-symbols-outlined text-[18px]">settings_system_daydream</span></span>
                    <div>
                      <strong className="block text-slate-800 mb-1">Background Processing:</strong>
                      <span className="text-sm">AI tasks executed asynchronously to keep the UI thread responsive.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">Results & Impact</h2>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">visibility</span></span> 
                    <span className="font-medium text-slate-200">Independence via printed text access</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">explore</span></span> 
                    <span className="font-medium text-slate-200">Improved environmental awareness</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">mic</span></span> 
                    <span className="font-medium text-slate-200">Highly usable hands-free interaction</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-success-green transition-transform group-hover:scale-110"><span className="material-symbols-outlined">directions_walk</span></span> 
                    <span className="font-medium text-slate-200">Confident location navigation assistance</span>
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
                    <span>On-device machine learning requires strict balancing between speed and accuracy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Building for accessibility requires completely rethinking visual conventions toward audio queues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span>Asynchronous execution is critical to avoid OS-level app freezes when running inference.</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Future Improvements</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">watch</span>
                    <span className="font-medium">Integration with smart glasses</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">model_training</span>
                    <span className="font-medium">Improved depth-layer object models</span>
                  </li>
                  <li className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50 transition-colors hover:border-primary/20 hover:bg-white group">
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:scale-110">route</span>
                    <span className="font-medium">Detailed indoor navigation routing</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* 12. Tech Stack */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6 text-center">Technology Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Android SDK (Java/Kotlin)", "TensorFlow", "YOLO v3", "OpenCV", "Google Maps API", "Text-to-Speech Engine"
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

export default Vision;
