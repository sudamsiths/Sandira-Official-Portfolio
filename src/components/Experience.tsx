'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'SimpliFy Labs (LK)',
    role: 'Intern Software Engineer',
    duration: 'Sep 2025 – Mar 2026',
    location: 'Sri Lanka',
    responsibilities: [
      'Collaborated with a development team to build and ship a real-world production application: Ceygo PWA 2 (live).',
      'Built the company website using Next.js.',
      'Contributed as a Full-Stack Developer using React for frontend and Spring Boot with MySQL for backend.',
      'Involved in API integration, testing, QA, test case writing, and UI design.',
      'Applied OOP principles and clean code practices throughout development.',
      'Demonstrated strong teamwork, problem-solving, and adaptability in a fast-paced environment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={14} />
            Professional Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-5 sm:pl-8 md:pl-0"
            >
              {/* Vertical line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-orange-500/20 md:hidden" />
              
              <div className="glass-card p-6 md:p-8 hover:border-orange-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 text-slate-400 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-slate-500">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 md:gap-y-3">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3 text-slate-400 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-2 shrink-0 group-hover:bg-orange-500 transition-colors" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

