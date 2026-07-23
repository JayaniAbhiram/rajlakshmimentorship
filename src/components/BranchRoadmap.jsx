import React from 'react';
import { Users, Database, Terminal, FolderCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function BranchRoadmap({ onOpenEnroll }) {
  const targetGoals = [
    'Master ML fundamentals from scratch',
    'Build real projects using authentic datasets',
    'Strengthen placement-ready engineering skills',
    'Get an edge for internships, higher studies & career opportunities'
  ];

  const workOnItems = [
    { title: 'Real Datasets', icon: Database, desc: 'Analyze real-world authentic datasets' },
    { title: 'Live Coding & Doubt Solving', icon: Terminal, desc: '1-to-1 live interactive coding support' },
    { title: 'Mini Projects', icon: FolderCheck, desc: 'Hands-on practical mini models' },
    { title: 'Final End-to-End ML Project', icon: FileText, desc: 'Complete capstone ML web application' },
    { title: 'Resume & Portfolio Guidance', icon: Users, desc: 'GitHub & resume optimization for placements' }
  ];

  return (
    <section id="audience" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Box 1: WHO SHOULD JOIN? */}
          <Reveal variant="slideLeft" delay={150}>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white shadow-2xl flex flex-col justify-between space-y-6 h-full hover:scale-[1.01] transition-transform duration-300">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/30 text-teal-200 text-xs font-black uppercase tracking-wider border border-teal-400/40">
                  WHO SHOULD JOIN?
                </div>

                <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                  Designed for 2nd, 3rd & Final Year B.Tech Students
                </h3>

                <p className="text-xs sm:text-sm text-teal-100 font-medium">
                  For students from any stream (<strong className="text-white font-black">CSE, IT, ECE, EEE, Mechanical, Civil, etc.</strong>) who want to:
                </p>

                <div className="space-y-3 pt-2">
                  {targetGoals.map((goal, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-extrabold">
                      <div className="w-5 h-5 rounded-full bg-teal-500/40 text-teal-300 flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-teal-700/60">
                <button
                  onClick={onOpenEnroll}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Reserve 1-on-1 Seat via Razorpay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Box 2: YOU WILL WORK ON */}
          <Reveal variant="slideRight" delay={300}>
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-2xl flex flex-col justify-between space-y-6 h-full hover:scale-[1.01] transition-transform duration-300">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-black uppercase tracking-wider border border-teal-200">
                  YOU WILL WORK ON
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Practical Deliverables & Experience
                </h3>

                <div className="space-y-3 pt-2">
                  {workOnItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5 hover:border-teal-400 hover:-translate-x-1 transition-all duration-300">
                        <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 font-bold">
                ✨ Direct guidance from Dr. Rajlakshmi Nayak (PhD IIT Madras)
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
