'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-bold tracking-tight text-white">
            SANDIRA<span className="text-orange-500">.</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 Sandira Sudamsith | Full Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
           <a href="#about" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">About</a>
           <a href="#projects" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Projects</a>
           <a href="#contact" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Hire Me</a>
        </div>

        <div className="text-sm text-slate-500 font-medium max-w-sm">
          Built with <span className="text-orange-500">Next.js</span> & <span className="text-orange-500">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

