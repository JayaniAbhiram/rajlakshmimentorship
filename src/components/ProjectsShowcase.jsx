import React from 'react';
import { Database, Terminal, Code, Award, Check, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectsShowcase({ onOpenEnroll }) {
  const projects = [
    {
      title: 'Real-Estate & House Price Prediction Engine',
      category: 'Supervised Regression',
      description: 'Clean raw housing datasets, perform multi-variable feature engineering, train Lasso/Ridge regression models, and measure R² & RMSE metrics.',
      dataset: '15,000+ Real Housing Records',
      tech: ['Pandas', 'Scikit-learn', 'Matplotlib', 'NumPy'],
      metric: '94.2% R² Score'
    },
    {
      title: 'Customer Churn & Retention Analytics',
      category: 'Classification & Probability',
      description: 'Analyze telecom customer churn indicators, train Logistic Regression & Random Forest models, and calculate Precision-Recall ROC curves.',
      dataset: '7,000 Telecom Customer Profiles',
      tech: ['Random Forest', 'ROC-AUC', 'Seaborn'],
      metric: '91.8% F1 Score'
    },
    {
      title: 'E-Commerce Customer Segmentation',
      category: 'Unsupervised Clustering',
      description: 'Group high-value customers into distinct behavioral personas using K-Means Clustering and Principal Component Analysis (PCA).',
      dataset: 'Online Retail Transaction Data',
      tech: ['K-Means', 'PCA', 'Elbow Method'],
      metric: '3 Persona Clusters'
    },
    {
      title: 'Full-Stack ML Model Web API Deployment',
      category: 'Production Capstone Project',
      description: 'Serialize your trained model with Joblib, build a FastAPI REST backend endpoint, and link it with an interactive web UI dashboard.',
      dataset: 'Live API Production Endpoint',
      tech: ['FastAPI', 'Joblib', 'REST API', 'Vercel/Uvicorn'],
      metric: 'Live Production Web App'
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            Build Your Resume Portfolio
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Projects You Will Work On
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            No toy examples. You will build end-to-end Machine Learning pipelines using authentic real-world datasets.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-gray-800 flex flex-col justify-between group hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60">
                    {proj.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {proj.description}
                </p>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800/80 flex items-center gap-2.5 text-xs text-gray-400">
                  <Database className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">Dataset: <strong className="text-gray-200">{proj.dataset}</strong></span>
                </div>

              </div>

              <div className="pt-6 mt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenEnroll}
                  className="text-xs font-semibold text-teal-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>Build This</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Resume & LinkedIn Guidance Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-teal-950/80 via-gray-900 to-indigo-950/80 border border-teal-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Resume & Portfolio Guidance Included</h4>
              <p className="text-xs text-gray-300">
                Dr. Rajlakshmi Nayak personally reviews your GitHub repositories and resume to highlight your ML capstone project for campus placements.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnroll}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
          >
            Get Mentored 1-on-1
          </button>
        </div>

      </div>
    </section>
  );
}
