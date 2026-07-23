import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8">

        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <h3 className="text-sm font-bold">Verified Certificate Preview</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-teal-50/50 to-white border-2 border-teal-500/40 text-center space-y-4 shadow-sm relative">
            <p className="text-[10px] uppercase font-black tracking-widest text-teal-700">
              Certificate of Completion
            </p>

            <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              MACHINE LEARNING: FOUNDATIONS TO MODELS
            </h4>

            <p className="text-xs text-slate-500 italic">This is to certify that</p>
            <p className="text-lg font-extrabold text-teal-800 underline decoration-teal-500/40">
              [ Student Name ]
            </p>

            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
              has successfully completed the 1-to-1 Machine Learning Mentorship course covering Python Data Stack, Supervised & Unsupervised Learning Algorithms, and Capstone Project.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-slate-200 text-left">
              <div>
                <p className="text-[11px] font-black text-slate-900">Dr. Rajlakshmi Nayak</p>
                <p className="text-[9px] text-teal-700 font-bold">PhD IIT Madras | MTech NIT Rourkela</p>
                <p className="text-[9px] text-slate-500">Course Instructor</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-slate-500">Credential ID: <span className="text-teal-800 font-bold">ML-2026-RN88</span></p>
                <p className="text-[9px] text-emerald-700 font-bold mt-0.5">Verified</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-teal-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Ready for LinkedIn & Resume
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-teal-700 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
