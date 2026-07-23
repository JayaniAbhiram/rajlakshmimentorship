import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Calendar, Video, CreditCard } from 'lucide-react';
import Reveal from './Reveal';

export default function ContactFooter({ onOpenEnroll, onOpenCertificate }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = `mailto:rajlakshmi02@gmail.com?subject=ML Course Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nEmail: ' + formData.email)}`;
  };

  return (
    <footer className="relative bg-slate-900 text-slate-100 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Callout Card */}
        <Reveal variant="scale">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-2xl border border-teal-600/30">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300">
                <img
                  src="/instructor.jpg"
                  alt="Dr. Rajlakshmi Nayak"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider">
                  Limited Seats for August 2026 Batch
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">
                  Reserve Your 1-to-1 Machine Learning Slot Today
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 font-medium">
                  Start building your first Machine Learning model with Dr. Rajlakshmi Nayak (PhD IIT Madras).
                </p>
              </div>
            </div>

            <button
              onClick={onOpenEnroll}
              className="btn-shimmer px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-teal-700" />
              <span>Enroll via Razorpay</span>
            </button>
          </div>
        </Reveal>

        {/* Info & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-teal-500 shadow-md flex-shrink-0">
                <img
                  src="/instructor.jpg"
                  alt="Dr. Rajlakshmi Nayak"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-black text-white">Dr. Rajlakshmi Nayak</h4>
                <p className="text-xs text-teal-400 font-bold">PhD IIT Madras | MTech NIT Rourkela</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              A personalized 1-to-1 mentorship course designed for 2nd, 3rd & Final Year B.Tech students to build strong ML fundamentals and create models from scratch.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Email: <a href="mailto:rajlakshmi02@gmail.com" className="text-teal-300 font-bold hover:underline">rajlakshmi02@gmail.com</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Batch Starts: <strong className="text-white">1 AUGUST 2026</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Video className="w-4 h-4 text-teal-400" />
                <span>Mode: <strong className="text-white">Live, Interactive 1-to-1 Sessions</strong></span>
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <h4 className="text-sm font-extrabold text-white">Send a Quick Note to Dr. Rajlakshmi</h4>
              
              {submitted ? (
                <div className="p-3 rounded-xl bg-teal-950 text-teal-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Opening email client... You can also email directly at rajlakshmi02@gmail.com</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <textarea
                    required
                    rows={2}
                    placeholder="Questions about the course..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note to rajlakshmi02@gmail.com</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Dr. Rajlakshmi Nayak. Machine Learning Mentorship.</p>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-teal-400 font-mono text-[11px]">
            Deploy Ready for Vercel ⚡
          </span>
        </div>

      </div>
    </footer>
  );
}
