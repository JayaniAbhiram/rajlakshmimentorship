import React, { useState, useEffect } from 'react';
import { CreditCard, ShieldCheck, Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar({ onOpenEnroll, onOpenCertificate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Instructor', href: '#instructor' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Who Should Join', href: '#audience' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Instructor Portrait */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-teal-600 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src="/instructor.jpg"
                alt="Dr. Rajlakshmi Nayak"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base flex items-center gap-1.5">
                Dr. Rajlakshmi Nayak
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  PhD IIT Madras
                </span>
              </span>
              <p className="text-[11px] text-slate-500 font-bold">1-to-1 Machine Learning Mentorship</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-slate-100/90 px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-teal-800 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCertificate}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              Sample Certificate
            </button>

            <button
              onClick={onOpenEnroll}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-black text-xs shadow-md shadow-teal-600/20 active:scale-95 transition-all"
            >
              <CreditCard className="w-4 h-4" />
              Enroll via Razorpay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenEnroll}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-teal-600 shadow-sm"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificate();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100"
            >
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              Sample Certificate
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black text-white bg-gradient-to-r from-teal-600 to-emerald-600 shadow-md"
            >
              <CreditCard className="w-4 h-4" />
              Reserve Slot via Razorpay
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
