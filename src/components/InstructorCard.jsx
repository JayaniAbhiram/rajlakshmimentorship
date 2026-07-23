import React from 'react';
import { GraduationCap, Award, CheckCircle, Mail, UserCheck, Star, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export default function InstructorCard({ onOpenEnroll, onOpenCertificate }) {
  return (
    <section id="instructor" className="py-20 relative bg-gradient-to-b from-white via-teal-50/60 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-black uppercase tracking-wider border border-teal-200 shadow-xs">
              <GraduationCap className="w-4 h-4 text-teal-700" />
              Learn Directly from an IIT Madras Scholar
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              MEET YOUR COURSE INSTRUCTOR
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              1-to-1 Live mentorship directly from a distinguished researcher, mentor, and educator with over a decade of teaching excellence.
            </p>
          </div>
        </Reveal>

        {/* Main Highlighted Instructor Banner */}
        <Reveal variant="scale" delay={150}>
          <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 bg-white border-2 border-teal-500/40 shadow-2xl relative overflow-hidden group hover:border-teal-500 transition-all duration-500">
            
            {/* Ambient Accent */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: High Resolution Instructor Portrait */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group/img">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 via-emerald-500 to-cyan-500 rounded-3xl blur-md opacity-50 group-hover/img:opacity-80 transition-opacity duration-300" />
                  <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border-4 border-white shadow-xl">
                    <img
                      src="/instructor.jpg"
                      alt="Dr. Rajlakshmi Nayak"
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent text-white text-center">
                      <p className="text-xs font-black">Dr. Rajlakshmi Nayak</p>
                      <p className="text-[10px] text-teal-300 font-bold">PhD IIT Madras</p>
                    </div>
                  </div>
                </div>

                {/* Title & Qualification Badges */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Dr. Rajlakshmi Nayak
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-300 shadow-xs hover:scale-105 transition-transform">
                      🎓 PhD IIT Madras
                    </span>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 shadow-xs hover:scale-105 transition-transform">
                      🏛️ MTech NIT Rourkela
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Credentials & Highlights */}
              <div className="md:col-span-7 space-y-6">
                
                <div className="inline-block px-3.5 py-1 rounded-md bg-teal-800 text-white text-xs font-black tracking-widest uppercase shadow-sm">
                  COURSE INSTRUCTOR & MENTOR
                </div>

                {/* Key Highlighted Points Grid with Micro-hover */}
                <div className="grid grid-cols-1 gap-3 text-sm text-slate-800 font-medium">
                  
                  <div className="p-3.5 rounded-2xl bg-teal-50/80 border border-teal-200/90 flex items-start gap-3 shadow-xs hover:-translate-y-0.5 hover:bg-teal-50 transition-all">
                    <div className="p-2 rounded-xl bg-teal-600 text-white flex-shrink-0 mt-0.5 shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">10+ Years of Teaching & Mentoring Experience</h4>
                      <p className="text-xs text-slate-600 font-medium">Over a decade guiding engineering graduates in computer science and data intelligence.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200/90 flex items-start gap-3 shadow-xs hover:-translate-y-0.5 hover:bg-cyan-50 transition-all">
                    <div className="p-2 rounded-xl bg-cyan-600 text-white flex-shrink-0 mt-0.5 shadow-xs">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">Researcher | Mentor | Educator</h4>
                      <p className="text-xs text-slate-600 font-medium">Published researcher combining cutting-edge academic theory with practical coding implementations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex items-start gap-3 shadow-xs hover:-translate-y-0.5 hover:bg-emerald-50 transition-all">
                    <div className="p-2 rounded-xl bg-emerald-600 text-white flex-shrink-0 mt-0.5 shadow-xs">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">Personal Mission Statement</h4>
                      <p className="text-xs font-bold text-teal-800 italic">
                        "Passionate about making Machine Learning simple, practical & impactful."
                      </p>
                    </div>
                  </div>

                </div>

                {/* Highlights Checklist */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-bold pt-1">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-teal-600 flex-shrink-0" />
                    <span>Concepts made simple with real-life engineering examples</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-teal-600 flex-shrink-0" />
                    <span>Step-by-step guidance to build ML models from scratch in Python</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-teal-600 flex-shrink-0" />
                    <span>Personalized 1-to-1 live interactive sessions & doubt solving</span>
                  </p>
                </div>

                {/* Contact & Razorpay Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href="mailto:rajlakshmi02@gmail.com"
                    className="text-xs font-black text-teal-800 hover:text-teal-900 flex items-center gap-2 bg-teal-50 px-3.5 py-2.5 rounded-xl border border-teal-200 shadow-xs hover:bg-teal-100 transition-all"
                  >
                    <Mail className="w-4 h-4 text-teal-700" />
                    rajlakshmi02@gmail.com
                  </a>

                  <button
                    onClick={onOpenEnroll}
                    className="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 hover:from-teal-800 hover:to-emerald-700 text-white font-black text-xs shadow-lg shadow-teal-700/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    Enroll with Dr. Rajlakshmi via Razorpay
                  </button>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* 3 Main Poster Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <Reveal variant="fadeUp" delay={200}>
            <div className="p-6 rounded-2xl glass-card-light space-y-3 hover:-translate-y-1.5 transition-all h-full">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shadow-xs">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-slate-900">1-to-1 MENTORSHIP</h4>
              <p className="text-xs font-extrabold text-teal-700">Personal attention, better learning</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Direct private sessions tailored to your background. Ask questions freely without large batch distractions.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={350}>
            <div className="p-6 rounded-2xl glass-card-light space-y-3 hover:-translate-y-1.5 transition-all h-full">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-slate-900">PRACTICAL & HANDS-ON</h4>
              <p className="text-xs font-extrabold text-cyan-700">Code more. Understand better.</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Hands-on coding in Python (NumPy, Pandas, Scikit-learn, Matplotlib, etc.) right from day 1.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={500}>
            <div className="p-6 rounded-2xl glass-card-light space-y-3 hover:-translate-y-1.5 transition-all h-full flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black text-slate-900">CERTIFICATE OF COMPLETION</h4>
                <p className="text-xs font-extrabold text-emerald-700">Add value to your resume & LinkedIn</p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Earn an official verified certificate signed by Dr. Rajlakshmi Nayak (PhD IIT Madras).
                </p>
              </div>
              <button
                onClick={onOpenCertificate}
                className="text-xs font-extrabold text-teal-700 hover:underline pt-2 flex items-center gap-1"
              >
                <span>View Certificate Preview</span>
                <span>&rarr;</span>
              </button>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
