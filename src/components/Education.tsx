'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ExternalLink, BadgeCheck } from 'lucide-react';

const education = [
  {
    institution: 'University of Moratuwa',
    degree: 'BIT Undergraduate',
    timeline: 'Starting 2025',
    details: [],
    icon: GraduationCap,
  },
  {
    institution: 'iCET Institute of Computer Engineering Technology',
    degree: 'ICD Developer Programme',
    timeline: 'Nov 2024 - Present',
    details: [
      'Currently enrolled, developing expertise in enterprise and standalone application development with Java and Spring Boot.',
      'Building strong foundations in OOP, design patterns, and modern software architectures.',
    ],
    icon: Award,
  },
  {
    institution: 'G.C.E. Advanced Level',
    degree: 'Completed 2023',
    timeline: '2024',
    details: [],
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: 'Crash Course: AWS Basics',
    issuer: 'KodeKloud',
    link: 'https://learn.kodekloud.com/certificate/5b544983-2fe0-41f3-8c0b-e969d355952a',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-950/20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen size={14} />
            Academic Background
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            My <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 space-y-4 hover:bg-white/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <item.icon size={32} />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  {item.institution}
                </h3>
                <p className="text-slate-400 font-medium">{item.degree}</p>
                <p className="text-sm text-rose-300 font-semibold">{item.timeline}</p>
                {item.details.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400/70 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <BadgeCheck size={14} />
            Certifications
          </div>

          {certifications.map((cert) => (
            <div
              key={cert.link}
              className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-linear-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 p-6 md:p-8 shadow-xl shadow-amber-500/10"
            >
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    <BadgeCheck size={14} />
                    Verified Certificate
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-sm text-slate-300">Issued by {cert.issuer}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-5 py-2.5 text-amber-200 hover:bg-amber-400/20 hover:text-white transition-colors font-semibold"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

