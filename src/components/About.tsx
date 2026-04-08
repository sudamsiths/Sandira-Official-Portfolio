'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, User, Code2 } from 'lucide-react';

const skills = [
  'REST API development',
  'third-party service integration',
  'clean and maintainable code',
  'OOP and design patterns',
  'Agile team collaboration',
  'problem solving and adaptability',
  'modern software architectures',
  'continuous technical learning',
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <User size={14} />
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Full-stack developer specializing in Java and Spring Boot backends and React and Next.js frontends, with hands-on internship experience building production-grade applications.
          </p>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Proficient in designing REST APIs, integrating third-party services, and writing clean, maintainable code. Experienced in Agile team environments with strong foundations in OOP, design patterns, and modern software architectures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                <span className="text-sm md:text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Achievements / Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
            <div className="glass-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/5 transition-all">
              <span className="text-3xl md:text-4xl font-bold text-white">10+</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Projects Built</span>
            </div>
            <div className="glass-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/5 transition-all">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Intern</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Experience</span>
            </div>
            <div className="glass-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/5 transition-all">
              <Code2 size={32} className="text-orange-500 mb-2" />
              <span className="text-sm text-white font-semibold">Clean Code Architect</span>
            </div>
            <div className="glass-card p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/5 transition-all">
              <Award size={32} className="text-rose-500 mb-2" />
              <span className="text-sm text-white font-semibold">Full Stack Expert</span>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 blur-[80px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

