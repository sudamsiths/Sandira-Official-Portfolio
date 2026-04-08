'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaDatabase, FaJava, FaPlug } from 'react-icons/fa6';
import {
  SiApachemaven,
  SiCss,
  SiDocker,
  SiGit,
  SiHibernate,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

type SkillItem = {
  name: string;
  icon: IconType;
  iconClassName: string;
};

type SkillCategory = {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Java', icon: FaJava, iconClassName: 'text-orange-400' },
      { name: 'JavaScript', icon: SiJavascript, iconClassName: 'text-yellow-300' },
      { name: 'TypeScript', icon: SiTypescript, iconClassName: 'text-blue-400' },
      { name: 'Python', icon: SiPython, iconClassName: 'text-yellow-400' },
      { name: 'HTML', icon: SiHtml5, iconClassName: 'text-orange-500' },
      { name: 'Go', icon: FaPlug, iconClassName: 'text-cyan-300' },
      { name: 'C# (Learning)', icon: FaPlug, iconClassName: 'text-violet-300' },
      { name: 'PHP (Learning)', icon: FaPlug, iconClassName: 'text-indigo-300' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layout,
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, iconClassName: 'text-green-400' },
      { name: 'React', icon: SiReact, iconClassName: 'text-cyan-300' },
      { name: 'Next.js', icon: SiNextdotjs, iconClassName: 'text-slate-100' },
      { name: 'JavaFX', icon: FaJava, iconClassName: 'text-orange-400' },
      { name: 'JPA', icon: FaDatabase, iconClassName: 'text-cyan-300' },
      { name: 'Hibernate', icon: SiHibernate, iconClassName: 'text-amber-500' },
      { name: 'JWT (Learning)', icon: FaPlug, iconClassName: 'text-violet-300' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, iconClassName: 'text-sky-400' },
      { name: 'Bootstrap', icon: SiCss, iconClassName: 'text-purple-400' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'SQL', icon: FaDatabase, iconClassName: 'text-cyan-300' },
      { name: 'MySQL', icon: SiMysql, iconClassName: 'text-blue-400' },
      { name: 'MongoDB', icon: SiMongodb, iconClassName: 'text-green-500' },
      { name: 'MongoDB (Learning)', icon: SiMongodb, iconClassName: 'text-green-500' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, iconClassName: 'text-pink-300' },
      { name: 'VS Code', icon: VscVscode, iconClassName: 'text-blue-500' },
      { name: 'PyCharm', icon: SiIntellijidea, iconClassName: 'text-green-400' },
      { name: 'Git', icon: SiGit, iconClassName: 'text-orange-500' },
      { name: 'GitHub', icon: SiGit, iconClassName: 'text-slate-100' },
      { name: 'Figma', icon: SiCss, iconClassName: 'text-rose-400' },
      { name: 'Docker', icon: SiDocker, iconClassName: 'text-blue-400' },
      { name: 'AWS (Learning)', icon: FaPlug, iconClassName: 'text-amber-400' },
      { name: 'CI/CD (Learning)', icon: FaPlug, iconClassName: 'text-violet-300' },
      { name: 'Postman', icon: SiPostman, iconClassName: 'text-orange-400' },
      { name: 'Swagger', icon: SiSpringboot, iconClassName: 'text-green-400' },
      { name: 'Maven', icon: SiApachemaven, iconClassName: 'text-rose-400' },
      { name: 'MySQL Workbench', icon: SiMysql, iconClassName: 'text-blue-400' },
      { name: 'HeidiSQL', icon: FaDatabase, iconClassName: 'text-sky-300' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Code2 size={14} />
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Technical <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Languages, frameworks, databases, tools, and soft skills I use to deliver scalable production-grade applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 flex flex-col items-start space-y-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500/80 via-indigo-500/80 to-purple-500/80" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
                <div className="p-2 rounded-xl bg-slate-800 border border-white/10 group-hover:border-blue-400/40 transition-colors">
                  <category.icon size={20} className="text-slate-200" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white tracking-wide uppercase">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-slate-900/80 border border-white/10 p-3 text-center transition-all duration-300 hover:border-blue-400/40 hover:bg-slate-900 hover:scale-[1.03]"
                    >
                      <skill.icon className={`text-2xl ${skill.iconClassName}`} />
                      <span className="text-xs md:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
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
