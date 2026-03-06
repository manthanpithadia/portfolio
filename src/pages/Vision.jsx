import React from 'react';
import vision1 from '../assets/images/vision1.png';
import vision2 from '../assets/images/vision2.png';
import vision3 from '../assets/images/vision3.png';
const Vision = () => {
  return (
    <div className="text-blue-text antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-heading sm:text-6xl mb-6">
              VISION
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 mb-10">
              An Android mobile application designed to assist visually impaired individuals by providing real-time text reading, object detection, voice interaction, and navigation support.
            </p>
            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">Android (Java/Kotlin)</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">TensorFlow / YOLO v3</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">OpenCV</span>
              <span className="tech-label inline-flex items-center rounded bg-white px-3 py-1 text-xs font-medium border border-slate-200">Google Maps API</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">

            {/* 1. Project Overview */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Project Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p><strong>Purpose of the Product:</strong> VISION was developed to improve the independence and accessibility of visually impaired users by enabling them to interact with their surroundings through AI-powered vision technologies and voice-based controls.</p>
                <p>The application helps users read printed text in real time, detect nearby objects, navigate using voice guidance, and interact with the application hands-free. By combining computer vision, speech recognition, and navigation services, the app aims to significantly improve everyday accessibility.</p>
              </div>
            </div>

            {/* 2. Problem Statement & Target Users */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Problem Statement</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">The Problem</h3>
                  <p className="mb-4 text-sm text-slate-600">Individuals with partial or full blindness often face challenges performing everyday tasks resulting in reduced independence.</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Reading printed text on menus, labels, or signs</li>
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Identifying objects in their surroundings</li>
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Navigating unfamiliar environments</li>
                    <li className="flex gap-2"><span className="text-red-500 material-symbols-outlined shrink-0 text-sm mt-1">close</span> Interacting with visual mobile applications</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-3">Target Users</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> Individuals with partial or complete vision loss</li>
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> Visually impaired users in unfamiliar environments</li>
                    <li className="flex gap-2"><span className="text-primary material-symbols-outlined shrink-0 text-sm mt-1">check</span> Users requiring assistive tech for daily tasks</li>
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 italic">A mobile solution using AI and voice interaction can significantly enhance accessibility and autonomy.</p>
                </div>
              </div>
            </div>

            {/* 3. Solution */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Solution</h2>
              <p className="text-slate-600 mb-6">
                VISION is an AI-powered assistive Android application integrating computer vision, speech recognition, and navigation services. Using the smartphone camera and AI models, it analyzes the environment and provides audio feedback to users.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 text-center">Core Workflow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-700 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Voice / Camera Input</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">AI Processing (OCR/YOLO)</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">Text-to-Speech Output</div>
                  <span className="material-symbols-outlined text-slate-300 rotate-90 md:rotate-0">arrow_forward</span>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">User Receives Guidance</div>
                </div>
              </div>
            </div>

            {/* 4. Key Features */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">document_scanner</span>
                  <h3 className="font-bold text-lg mb-2">Real-Time Text Reading (OCR)</h3>
                  <p className="text-sm text-slate-600">Extracts text from the camera feed using OCR to read menus/labels and provides instant audio feedback.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">center_focus_strong</span>
                  <h3 className="font-bold text-lg mb-2">Object Detection (YOLO v3)</h3>
                  <p className="text-sm text-slate-600">Integrates deep learning models to identify objects in frame and improve real-world environmental awareness.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">record_voice_over</span>
                  <h3 className="font-bold text-lg mb-2">Voice Command Interaction</h3>
                  <p className="text-sm text-slate-600">A robust voice interface (e.g., "Read text", "Start navigation") enables a seamlessly hands-free user experience.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">explore</span>
                  <h3 className="font-bold text-lg mb-2">Navigation Assistance</h3>
                  <p className="text-sm text-slate-600">Integrates Google Maps API for route guidance, audio instructions, and confident location awareness.</p>
                </div>
              </div>
            </div>
            {/* UI Design & Key Screens */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-heading">
                  UI Design & Key Screens
                </h2>
              </div>

              {/* Vision Screens */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">                   
                    <img src={vision1} alt="Vision Screen 1" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Home Screen</h4>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={vision2} alt="Vision Screen 2" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">OCR Screen</h4>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden group">
                    <img src={vision3} alt="Vision Screen 3" className="w-full h-auto object-cover" /> 
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-800">Object Detection</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* 6. System Architecture */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">System Architecture</h2>
              <div className="p-8 border border-slate-200 rounded-2xl bg-slate-50 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">Android App (Camera / Mic Input)</div>
                  <span className="material-symbols-outlined text-slate-400">arrow_downward</span>
                  <div className="w-full max-w-sm p-4 bg-white border border-slate-200 rounded-xl font-bold shadow-sm">AI Layer (OCR / YOLO v3 OpenCV)</div>
                  <span className="material-symbols-outlined text-slate-400">arrow_downward</span>
                  <div className="w-full max-w-sm p-4 bg-slate-900 text-white rounded-xl font-bold shadow-sm">Text-to-Speech Engine Output</div>
                </div>
                <p className="mt-8 text-sm text-slate-600 max-w-2xl mx-auto">This architecture allows real-time processing on mobile devices, efficient inference, and seamless integration with hardware to ensure low latency and responsive feedback.</p>
              </div>
            </div>

            {/* 7. Technical Challenges */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6">Technical Challenges</h2>
              <div className="space-y-6">
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 1 — Real-Time Image Processing</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> Maintaining smooth mobile performance while analyzing camera feed.<br/>
                  <strong>Solution:</strong> Optimized camera frame processing and limited analysis frequency to balance accuracy and overhead.</p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 2 — Object Detection on Mobile</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> YOLO v3 models are computationally expensive for mobile hardware.<br/>
                  <strong>Solution:</strong> Used optimized model inference and reduced input resolution to manage resource constraints.</p>
                </div>
                <div className="bg-white border text-left border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-primary">Challenge 3 — Accessibility-Focused UI</h3>
                  <p className="text-slate-600"><strong>Problem:</strong> Visual UI paradigms do not translate to visually impaired users.<br/>
                  <strong>Solution:</strong> Designed primarily with voice-first interactions and heavily fortified audio feedback loops.</p>
                </div>
              </div>
            </div>

            {/* 8. Performance / 9. Results */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Performance & Optimization</h2>
                <ul className="space-y-4 text-slate-600">
                  <li><strong>Frame Processing:</strong> Processed selectively to reduce CPU load.</li>
                  <li><strong>Model Optimization:</strong> YOLO optimized for robust mobile inference with lower latency.</li>
                  <li><strong>Efficient API Usage:</strong> Navigation requests throttled to avoid exhausting API calls.</li>
                  <li><strong>Background Processing:</strong> AI tasks executed asynchronously to keep the UI thread responsive.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Results & Impact</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">visibility</span> Independence via printed text access</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">explore</span> Improved environmental awareness</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">mic</span> Highly usable hands-free interaction</li>
                  <li className="flex gap-3"><span className="material-symbols-outlined text-success-green">directions_walk</span> Confident location navigation assistance</li>
                </ul>
              </div>
            </div>

            {/* 10. Lessons & 11. Future */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Lessons Learned</h2>
                <ul className="space-y-4 text-slate-600 list-disc list-inside">
                  <li>On-device machine learning requires strict balancing between speed and accuracy.</li>
                  <li>Building for accessibility requires completely rethinking visual conventions toward audio queues.</li>
                  <li>Asynchronous execution is critical to avoid OS-level app freezes when running inference.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-heading mb-6">Future Improvements</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">watch</span> Integration with smart glasses</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">model_training</span> Improved depth-layer object models</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">route</span> Detailed indoor navigation routing</li>
                </ul>
              </div>
            </div>

            {/* 12. Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-heading mb-6 text-center">Technology Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">Android SDK (Java/Kotlin)</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">TensorFlow</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">YOLO v3</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">OpenCV</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">Google Maps API</span>
                <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium border border-slate-200">Text-to-Speech Engine</span>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Vision;
