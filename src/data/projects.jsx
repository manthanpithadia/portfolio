import React from 'react';
import { Eye, Cpu, Code, MapPin, Database, Layers, BarChart3, Users } from 'lucide-react';
import { UsersIcon } from '../components/Icons';

/* --- DATA: PROJECTS & CASE STUDIES --- */
export const PROJECTS = [
  {
    id: "vision",
    title: "Vision",
    category: "AI & Accessibility",
    status: "Open Source",
    description: "A high-performance Android application using TensorFlow to assist the visually impaired through real-time object and text recognition.",
    stack: ["Kotlin", "TensorFlow Lite", "OCR", "Android SDK"],
    colorClass: "bg-gradient-to-br from-purple-100 to-purple-50",
    icon: <Eye size={120} />,
    caseStudy: {
      tagline: "Empowering Independence through Computer Vision",
      challenge: "Visually impaired individuals face significant barriers in daily navigation and reading. Existing solutions were often slow, requiring internet connectivity, or lacked intuitive accessibility features compliant with WCAG standards.",
      solution: "I developed a native Android application integrating TensorFlow Lite for offline object detection. I implemented Optical Character Recognition (OCR) for reading text aloud and designed a custom UI with haptic feedback and voice commands to ensure full accessibility.",
      architecture: [
        { title: "On-Device AI", desc: "TensorFlow Lite for offline inference", icon: <Cpu size={24} /> },
        { title: "Recognition Engine", desc: "Custom OCR & Object Detection Models", icon: <Eye size={24} /> },
        { title: "Accessibility Layer", desc: "Haptic Feedback & Voice Command Interface", icon: <Code size={24} /> }
      ],
      results: [
        "75% accuracy in real-time object recognition",
        "Full WCAG compliance with screen reader support",
        "Verified efficacy through extensive user feedback loops"
      ]
    }
  },
  {
    id: "travel-connect",
    title: "Travel Connect",
    category: "Travel Tech",
    status: "Personal Project",
    description: "A scalable destination exploration app utilizing Google Maps API for real-time itineraries and dynamic weather updates.",
    stack: ["Kotlin", "Google Maps API", "Firebase", "MVVM"],
    colorClass: "bg-gradient-to-br from-sky-100 to-sky-50",
    icon: <MapPin size={120} />,
    caseStudy: {
      tagline: "Streamlining the Travel Planning Experience",
      challenge: "Travel planning is often fragmented across multiple apps for maps, weather, and itinerary management. Users needed a unified solution that synced data in real-time across sessions.",
      solution: "Built a robust MVVM architecture application using Kotlin. Integrated Google Maps API for location services and Firebase Realtime Database to sync user itineraries instantly across devices, allowing for offline access to critical travel plans.",
      architecture: [
        { title: "Location Core", desc: "Google Maps API & Geolocation Services", icon: <MapPin size={24} /> },
        { title: "Data Sync", desc: "Firebase Realtime Database + Offline Persistence", icon: <Database size={24} /> },
        { title: "Architecture", desc: "MVVM Pattern with LiveData & ViewModel", icon: <Layers size={24} /> }
      ],
      results: [
        "Reduced user planning time by approximately 20%",
        "Seamless offline data availability",
        "Dynamic push notifications for itinerary updates"
      ]
    }
  },
  {
    id: "freelance-match",
    title: "Match Platform",
    category: "Social Discovery",
    status: "Client Project",
    description: "A digital matchmaking platform focused on UI/UX optimization and user engagement, delivering tailored solutions for the dating domain.",
    stack: ["Android SDK", "Java", "RoomDB", "Analytics"],
    colorClass: "bg-gradient-to-br from-rose-100 to-rose-50",
    icon: <UsersIcon size={120} />,
    caseStudy: {
      tagline: "Boosting Engagement through User-Centric Design",
      challenge: "The client's existing platform suffered from low user retention due to a cluttered interface and poor matchmaking logic. They needed a data-driven redesign to improve satisfaction.",
      solution: "I led the Android development, implementing Material Design principles for a cleaner UI. I also integrated local analytics to track user behavior, allowing us to iteratively improve the matchmaking algorithms based on real interaction data.",
      architecture: [
        { title: "UI Engine", desc: "Material Design & Custom Animations", icon: <Code size={24} /> },
        { title: "Local Data", desc: "SQLite / RoomDB for efficient caching", icon: <Database size={24} /> },
        { title: "Analytics", desc: "Data-driven feature optimization", icon: <BarChart3 size={24} /> }
      ],
      results: [
        "70% boost in user satisfaction scores",
        "Effective skip-logic filtering implementation",
        "Delivered project ahead of schedule"
      ]
    }
  }
];
