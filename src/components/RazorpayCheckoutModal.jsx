import React, { useState } from 'react';
import { X, CreditCard, ExternalLink, ShieldCheck, CheckCircle2, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function RazorpayCheckoutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const paymentPageUrl =
    import.meta.env.VITE_RAZORPAY_PAYMENT_PAGE_URL ||
    'https://pages.razorpay.com/pl_TGvceSAoIVUIjC/view';

  const handleOpenRazorpayPage = () => {
    window.open(paymentPageUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8">

        {/* Top Header */}
        <div className="px-6 py-4.5 bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/20 text-white shadow-sm">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold flex items-center gap-2">
                Razorpay Enrollment Gateway
              </h3>
              <p className="text-xs text-teal-100 font-medium">1-to-1 ML Mentorship • Dr. Rajlakshmi Nayak</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 text-center">

          <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
            <CreditCard className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h4 className="text-2xl font-black text-slate-900 leading-tight">
              Complete Your Registration via Razorpay
            </h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              You are being redirected to the official <strong className="text-teal-800 font-bold">Razorpay Payment Page</strong> for Dr. Rajlakshmi Nayak's Machine Learning Mentorship Course.
            </p>
          </div>

          {/* Course Details Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Course:</span>
              <span className="text-slate-900 font-extrabold">Machine Learning: Foundations to Models</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Instructor:</span>
              <span className="text-teal-800 font-bold">Dr. Rajlakshmi Nayak (PhD IIT Madras)</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Batch Start Date:</span>
              <span className="text-slate-900 font-bold">7 AUGUST 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Mode:</span>
              <span className="text-emerald-700 font-bold">Live 1-to-1 Interactive Sessions</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleOpenRazorpayPage}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white font-black text-sm shadow-xl shadow-teal-600/25 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Pay & Register on Razorpay</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <a
              href={paymentPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 text-center text-xs font-bold text-teal-700 hover:underline"
            >
              Direct Link: {paymentPageUrl}
            </a>
          </div>

          {/* Security Banner */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1 text-teal-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> 256-Bit Official Razorpay Encrypted Gateway
            </span>
            <span>UPI • Cards • NetBanking</span>
          </div>

        </div>

      </div>
    </div>
  );
}
