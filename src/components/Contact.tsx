'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Link2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage(null);
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setIsError(true);
        setStatusMessage(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setFormState({ name: '', email: '', message: '' });
      setStatusMessage('Message sent successfully. I will get back to you soon.');
    } catch {
      setIsError(true);
      setStatusMessage('Could not send message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare size={14} />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 md:p-8 space-y-7 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                    <p className="text-base md:text-lg font-medium group-hover:text-orange-400 transition-colors break-all">sudamsiths@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Location</p>
                    <p className="text-lg font-medium group-hover:text-rose-400 transition-colors">Panadura, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Link2, href: 'https://github.com/sudamsiths' },
                    { icon: Link2, href: 'https://www.linkedin.com/in/sandira-liyanage-73627b226/' },
                    { icon: Link2, href: 'https://www.facebook.com/sadirasudamsith12' }
                  ].map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-400">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-400">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-400">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message goes here..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient py-4 flex items-center justify-center gap-2 group"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              {statusMessage && (
                <p className={`text-sm ${isError ? 'text-red-400' : 'text-emerald-400'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

