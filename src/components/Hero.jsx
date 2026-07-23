import React from 'react';
import { Sparkles, Calendar, Clock, Video, Award, ArrowRight, CreditCard, GraduationCap, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero({ onOpenEnroll, onOpenCall }) {
  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/80 via-slate-50 to-white">
      
      {/* Dynamic Animated Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-tr from-teal-200/50 via-cyan-200/30 to-emerald-200/40 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Batch Announcement Pill */}
        <Reveal variant="fadeUp" delay={100}>
          <div className="flex justify-center mb-6">
            <button
              onClick={onOpenEnroll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-teal-300 text-teal-800 text-xs font-bold shadow-md hover:bg-teal-100/90 transition-all hover:scale-105 active:scale-95 cursor-pointer animate-pulse-ring"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600"></span>
              </span>
              <span>Batch Starts 7 AUGUST 2026</span>
              <span className="text-teal-400">•</span>
              <span className="text-teal-900 font-black">Reserve your slot now!</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 text-teal-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>

        {/* Hero Poster Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          <Reveal variant="fadeUp" delay={200}>
            <p className="text-xs sm:text-sm uppercase tracking-widest font-black text-teal-700 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              Build • Understand • Apply
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            </p>
          </Reveal>

          <Reveal variant="scale" delay={300}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              MACHINE LEARNING <br />
              <span className="gradient-text-light">FOUNDATIONS TO MODELS</span>
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={400}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-800 text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md hover:bg-teal-900 transition-colors">
              ✨ A Personalized 1-to-1 Mentorship Course
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={500}>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Designed for <strong className="text-slate-900 font-bold underline decoration-teal-500/50 underline-offset-4">2nd, 3rd & Final Year B.Tech Students</strong>. Build strong ML fundamentals and create your first Machine Learning model from scratch.
            </p>
          </Reveal>

          {/* Highlighted Instructor Showcase Pill with Photo */}
          <Reveal variant="scale" delay={600}>
            <div className="pt-3 flex justify-center">
              <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-3xl bg-white border-2 border-teal-500/50 shadow-xl hover:shadow-2xl hover:border-teal-500 transition-all duration-300 group cursor-pointer" onClick={onOpenEnroll}>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-teal-600 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src="/instructor.jpg"
                    alt="Dr. Rajlakshmi Nayak"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-left space-y-0.5">
                  <p className="text-[10px] font-black uppercase text-teal-700 tracking-wider flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" /> COURSE INSTRUCTOR
                  </p>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-teal-800 transition-colors">
                    Dr. Rajlakshmi Nayak
                  </h3>
                  <p className="text-xs font-extrabold text-slate-600 flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] border border-teal-200 font-black">
                      PhD IIT Madras
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 text-[10px] border border-cyan-200 font-black">
                      MTech NIT Rourkela
                    </span>
                    <span className="text-[10px] text-teal-700 font-bold hidden sm:inline">
                      • 10+ Years Experience
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action Buttons */}
          <Reveal variant="fadeUp" delay={700}>
            <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnroll}
                className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-sm sm:text-base shadow-xl shadow-teal-600/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
              >
                <CreditCard className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Enroll Now via Razorpay</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCall}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-md hover:border-slate-400 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-teal-600" />
                <span>Book 1-to-1 Intro Call</span>
              </button>
            </div>
          </Reveal>

          {/* Core Feature Cards Grid with Staggered Animations */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Reveal variant="fadeUp" delay={800}>
              <div className="p-4 rounded-2xl glass-card-light text-left space-y-1 border border-teal-200/90 group hover:-translate-y-1.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-extrabold uppercase text-slate-500">BATCH STARTS</p>
                <p className="text-sm font-black text-slate-900">7 AUGUST 2026</p>
                <p className="text-[11px] font-bold text-teal-700">Reserve your slot now!</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={900}>
              <div className="p-4 rounded-2xl glass-card-light text-left space-y-1 border border-teal-200/90 group hover:-translate-y-1.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-extrabold uppercase text-slate-500">ONLINE MODE</p>
                <p className="text-sm font-black text-slate-900">Live, Interactive</p>
                <p className="text-[11px] font-bold text-cyan-700">1-to-1 Sessions</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={1000}>
              <div className="p-4 rounded-2xl glass-card-light text-left space-y-1 border border-teal-200/90 group hover:-translate-y-1.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-extrabold uppercase text-slate-500">WEEKLY HOURS</p>
                <p className="text-sm font-black text-slate-900">4 HOURS / Week</p>
                <p className="text-[11px] font-bold text-indigo-700">Flexible scheduling</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={1100}>
              <div className="p-4 rounded-2xl glass-card-light text-left space-y-1 border border-teal-200/90 group hover:-translate-y-1.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-extrabold uppercase text-slate-500">100% ONLINE</p>
                <p className="text-sm font-black text-slate-900">Learn Anywhere</p>
                <p className="text-[11px] font-bold text-emerald-700">Verified Certificate</p>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
