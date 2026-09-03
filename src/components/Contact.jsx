import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', 'bot-field': '' });
  const [formState, setFormState] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const encode = (data) =>
    Object.keys(data).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ submitting: true, submitted: false, error: null });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setFormState({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '', 'bot-field': '' });
      })
      .catch(() =>
        setFormState({ submitting: false, submitted: false, error: 'An error occurred. Please send a direct email.' })
      );
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080c14] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all";

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold tracking-wider uppercase">
            08 — CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">Let's Build Something</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">Have a project, opportunity, or idea? I'd be happy to connect.</p>
          <div className="w-12 h-1 bg-indigo-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Direct contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Get In Touch</h3>
              <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you have a full-stack job opening, an internship opportunity, a freelance project, or simply want to say hello, feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-4">
              <a href={personalInfo.socialLinks.email}
                className="glass-card p-4 rounded-xl flex items-center gap-4 group hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a href={personalInfo.socialLinks.phone}
                className="glass-card p-4 rounded-xl flex items-center gap-4 group hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Phone Number</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-slate-400 block mb-3 uppercase tracking-wider">Social Accounts:</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send A Message</h3>

              {formState.submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You!</h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-200">Message sent successfully. I'll respond as soon as possible.</p>
                  <button onClick={() => setFormState({ submitting: false, submitted: false, error: null })}
                    className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out: <input name="bot-field" value={formData['bot-field']} onChange={handleChange} /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Your Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Your Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Subject *</label>
                    <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Web Project Inquiry / Opportunity" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5 font-medium">Your Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." className={`${inputClass} resize-none`} />
                  </div>

                  {formState.error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/40 text-red-700 dark:text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{formState.error}</span>
                    </div>
                  )}

                  <button type="submit" disabled={formState.submitting}
                    className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 text-sm">
                    {formState.submitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                    ) : (
                      <><Send className="w-4 h-4" /><span>Send Message</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
