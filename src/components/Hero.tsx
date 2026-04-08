'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ChevronRight, Download, Send, Mail, MapPin, Phone, Link2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headingText = "Hi, I'm Sandira Sudamsith";

export default function Hero() {
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    if (typedLength >= headingText.length) {
      return;
    }

    const timer = setTimeout(() => {
      setTypedLength((prev) => prev + 1);
    }, 70);

    return () => clearTimeout(timer);
  }, [typedLength]);

  const visibleText = headingText.slice(0, typedLength);
  const introText = visibleText.slice(0, 8);
  const nameText = visibleText.slice(8);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full animate-pulse " style={{ animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="mx-auto w-fit">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-2xl shadow-blue-500/20">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-slate-900">
                <Image
                  src="/image/profile-pic2.png"
                  alt="Sandira Sudamsith profile photo"
                  fill
                  priority
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse" />{' '}
            Accepting New Projects
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span>{introText}</span>
            <span className="text-gradient">{nameText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block ml-1 text-blue-400"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
            <span className="text-blue-500">Software Engineer Intern</span>
            <span className="text-slate-600">&</span>
            <span className="text-purple-500">Full Stack Developer</span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-1">
            I build scalable backend systems, modern web applications, REST APIs, and production-ready full stack solutions using Java, Spring Boot, React, and Next.js.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> Panadura, Sri Lanka</span>
            <span className="inline-flex items-center gap-1.5 break-all"><Mail size={14} /> sudamsiths@gmail.com</span>
            <span className="inline-flex items-center gap-1.5"><Phone size={14} /> +94 72 215 1182</span>
            <a href="https://www.linkedin.com/in/sandira-liyanage-73627b226/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><Link2 size={14} /> LinkedIn</a>
            <a href="https://github.com/sudamsiths" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><Link2 size={14} /> GitHub</a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
            <a href="#projects" className="btn-gradient w-full sm:w-auto">
              View Projects
              <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/10 bg-white/5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a
              href="/CV/Sandira%20Sudamsith%20CV.pdf"
              download="Sandira-Sudamsith-CV.pdf"
              className="text-sm font-medium text-slate-400 hover:text-white transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-all flex items-center gap-2">
              <Send className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Animation Placeholder */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
