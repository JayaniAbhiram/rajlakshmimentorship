import React from 'react';
import { UserCheck, Code, Award, CheckCircle, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function BenefitsGrid({ onOpenCertificate, onOpenEnroll }) {
  const highlights = [
    {
      icon: UserCheck,
      title: '1-to-1 MENTORSHIP',
      subtitle: 'Personal attention, better learning',
      description: 'Unlike crowded batch lectures, every single class is a private 1-on-1 session directly with Dr. Rajlakshmi Nayak. Ask questions freely and learn at your custom pace.',
      badge: '100% Dedicated'
    },
    {
      icon: Code,
      title: 'PRACTICAL & HANDS-ON',
      subtitle: 'Code more. Understand better.',
      description: 'Zero theoretical fluff. Every concept is implemented live in Python Jupyter notebooks using NumPy, Pandas, Scikit-learn, and Matplotlib from line 1.',
      badge: 'Live Coding'
    },
    {
      icon: Award,
      title: 'CERTIFICATE OF COMPLETION',
      subtitle: 'Add value to your resume & LinkedIn',
      description: 'Earn an official Machine Learning Verified Certificate signed by Dr. Rajlakshmi Nayak (PhD IIT Madras) to boost your internship & placement applications.',
      badge: 'IIT Madras Credential',
      actionable: true
    }
  ];

  return (
    <section className="py-20 relative bg-gray-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Star className="w-4 h-4" />
            Course Highlights
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Why Choose This 1-to-1 Course?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            The most effective way for B.Tech engineering students to master Machine Learning.
          </p>
        </div>

        {/* 3 Main Pillars from poster */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-card border border-gray-800 flex flex-col justify-between relative group hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 text-teal-400 border border-teal-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-800/80">
                  {item.actionable ? (
                    <button
                      onClick={onOpenCertificate}
                      className="w-full py-2.5 rounded-xl bg-teal-950/80 hover:bg-teal-900 text-teal-300 font-bold text-xs border border-teal-800 flex items-center justify-center gap-2 transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 text-teal-400" />
                      <span>Preview Verified Certificate</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>Guaranteed in every session</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
