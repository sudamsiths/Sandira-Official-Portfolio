'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Box, Layers, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Waste Management System',
    type: 'Completed - 2025',
    featured: true,
    description: 'End-to-end web application for electronic waste management using microservice architecture and MySQL. Includes parcel tracking, branch management, and delivery workflows.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Microservices'],
    links: {
      frontend: 'https://github.com/sudamsiths/E-Waste-Management-System-Frontend.git',
      backend: 'https://github.com/sudamsiths/E-Waste-Management-System-Backend.git',
    },
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Clothing Store LK',
    type: 'In Progress',
    featured: true,
    badge: 'Team of 3',
    description: 'Full-stack clothing store web application built collaboratively by a team of 3. Includes authentication, order processing, and scalable service architecture.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Spring Security', 'Swagger', 'Java', 'MySQL'],
    links: {
      frontend: 'https://github.com/Collaborate-team/Clothing-Store-LK-FE.git',
      backend: 'https://github.com/Collaborate-team/Clothing-Store-LK.git',
    },
    color: 'from-rose-600 to-pink-600'
  },
  {
    title: 'MOS Burgers Ordering System',
    type: 'Completed - 2024',
    description: 'Full-stack system for burger shop operations covering menu management, order placement, and customer record management.',
    tech: ['Spring Boot', 'HTML', 'CSS', 'JavaScript', 'Hibernate', 'ORM'],
    links: {
      frontend: 'https://github.com/sudamsiths/MOS-BURGERS-Frontend',
      backend: 'https://github.com/sudamsiths/MOS-Burgers-Backend'
    }
  },
  {
    title: 'Clothify Store POS System',
    type: 'Completed - 2024',
    description: 'JavaFX desktop POS application for product management, inventory tracking, sales processing, customer management, and reporting.',
    tech: ['JavaFX', 'MySQL', 'Scene Builder', 'Google Guice'],
    links: {
      repo: 'https://github.com/sudamsiths/Clothify-Store-POS-System'
    }
  },
  {
    title: 'Crypto Portfolio Tracker',
    type: 'Completed - 2025',
    description: 'Responsive dashboard for real-time crypto market analysis with AI-powered insights via Gemini API.',
    tech: ['HTML', 'Tailwind CSS', 'Chart.js', 'CoinGecko API', 'Gemini API'],
    links: {
      repo: 'https://github.com/sudamsiths/Crypto-Portfolio-Tracker'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <Layers size={14} />
            My Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card overflow-hidden hover:border-orange-500/30 transition-all ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900/50 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform">
                    {project.featured ? <Box size={28} /> : <Code2 size={24} />}
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.frontend && (
                       <a href={project.links.frontend} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-xs">
                         <ExternalLink size={16} /> Frontend
                       </a>
                    )}
                    {project.links.backend && (
                       <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-xs">
                         <ExternalLink size={16} /> Backend
                       </a>
                    )}
                  </div>
                </div>

                <div className="space-y-4 grow">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.type && (
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-white/10 text-slate-300 border border-white/20">
                        {project.type}
                      </span>
                    )}
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tech.map((skill) => (
                    <span
                      key={`${project.title}-${skill}`}
                      className="px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-xs font-semibold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

