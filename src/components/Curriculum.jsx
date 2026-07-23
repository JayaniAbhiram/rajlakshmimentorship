import React from 'react';
import { BookOpen, CheckCircle2, Code2, Layers, Cpu, CreditCard, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function Curriculum({ onOpenEnroll }) {
  const modules = [
    {
      id: 1,
      title: 'ML Fundamentals & Python Basics',
      icon: '⚙️',
      desc: 'NumPy, Pandas, matrices, vectorization, and core Python logic for ML algorithms.'
    },
    {
      id: 2,
      title: 'Data Handling & Exploration',
      icon: '📊',
      desc: 'Data cleaning, feature scaling, EDA, and visual analytics with Matplotlib & Seaborn.'
    },
    {
      id: 3,
      title: 'Supervised Learning',
      icon: '🎯',
      desc: 'Linear Regression, Logistic Regression, Decision Trees, Random Forests, and SVMs from scratch.'
    },
    {
      id: 4,
      title: 'Unsupervised Learning',
      icon: '🌌',
      desc: 'K-Means Clustering, Hierarchical Clustering, and Principal Component Analysis (PCA).'
    },
    {
      id: 5,
      title: 'Model Evaluation & Tuning',
      icon: '⚙️',
      desc: 'Cross-validation, Hyperparameter tuning, Confusion matrix, ROC-AUC, and precision optimization.'
    },
    {
      id: 6,
      title: 'Build & Deploy Your ML Model',
      icon: '🚀',
      desc: 'Turn Jupyter models into production web APIs using FastAPI & interactive web dashboards.'
    },
    {
      id: 7,
      title: 'Real-World Projects',
      icon: '💡',
      desc: 'Work on authentic datasets, capstone projects, and GitHub portfolio setup for placements.'
    }
  ];

  const highlights = [
    'Concepts made simple with real-life examples',
    'Hands-on coding in Python (NumPy, Pandas, Scikit-learn, Matplotlib, etc.)',
    'Step-by-step guidance to build ML models from scratch',
    'Personalized doubt solving & mentorship',
    'Mini Projects + Final ML Project',
    'Build a strong portfolio for internships, placements & higher studies',
    'Certificate of Completion'
  ];

  return (
    <section id="syllabus" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <p className="text-xs font-black text-teal-700 uppercase tracking-widest flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4" />
              Core Course Syllabus
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              WHAT YOU WILL LEARN
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              From Python fundamentals to your first deployed Machine Learning model.
            </p>
          </div>
        </Reveal>

        {/* 7 Modules Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {modules.map((mod, idx) => (
            <Reveal key={mod.id} variant="fadeUp" delay={idx * 100}>
              <div className="p-5 rounded-2xl glass-card-light flex flex-col justify-between border border-slate-200 hover:border-teal-500 hover:-translate-y-1.5 transition-all duration-300 h-full group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 font-black text-sm flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      0{mod.id}
                    </span>
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">{mod.icon}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-teal-800 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {mod.desc}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-extrabold text-teal-700">
                  <Code2 className="w-3.5 h-3.5" /> Hands-on Python Code
                </div>
              </div>
            </Reveal>
          ))}

          {/* 8th Card CTA */}
          <Reveal variant="scale" delay={700}>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 text-white flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-transform duration-300 h-full">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-white/20 text-white text-[10px] font-black uppercase tracking-wider">
                  Full 7 Modules
                </span>
                <h3 className="text-lg font-black">Ready to Start Your ML Journey?</h3>
                <p className="text-xs text-teal-100 leading-relaxed font-medium">
                  Reserve your 1-on-1 slot for August 1, 2026 batch today.
                </p>
              </div>
              <button
                onClick={onOpenEnroll}
                className="mt-4 w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-teal-900 font-black text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Enroll via Razorpay
              </button>
            </div>
          </Reveal>
        </div>

        {/* Poster Course Highlights Box */}
        <Reveal variant="fadeUp" delay={800}>
          <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border-2 border-teal-500/40 shadow-xl space-y-4 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-black text-slate-900 text-center sm:text-left flex items-center gap-2">
              <CheckCircle2 className="w-5.5 h-5.5 text-teal-600" />
              COURSE HIGHLIGHTS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-teal-50/60 hover:border-teal-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
