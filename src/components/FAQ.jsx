import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ({ onOpenEnroll }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Who is this course designed for?',
      a: 'This course is tailored specifically for 2nd, 3rd & Final Year B.Tech engineering students across all streams (CSE, IT, ECE, EEE, Mechanical, Civil, etc.) who want to master Machine Learning from scratch and build industry-ready projects.'
    },
    {
      q: 'How does the 1-to-1 mentorship work compared to normal online classes?',
      a: 'Unlike group webinars or pre-recorded video lectures, every session is a private 1-on-1 live call directly with Dr. Rajlakshmi Nayak. You get dedicated personal attention, customized pace, and live code debugging.'
    },
    {
      q: 'What if I have college exams, lab tests, or mid-terms?',
      a: 'The weekly 4-hour schedule is completely flexible. You can reschedule session slots according to your college timetable, exam dates, or personal convenience.'
    },
    {
      q: 'Do I need prior Machine Learning or Python experience?',
      a: 'No prior ML knowledge is required! The course begins with Module 1 covering Python basics, NumPy, and Pandas math foundations before building ML models.'
    },
    {
      q: 'How does the Razorpay payment reservation work?',
      a: 'You can choose to either pay the full course fee (₹4,999) or reserve your 1-to-1 slot with an initial seat deposit of ₹999 via Razorpay. Once reserved, Dr. Rajlakshmi Nayak will contact you to finalize your session timing.'
    },
    {
      q: 'Will I receive a verified certificate for my resume & LinkedIn?',
      a: 'Yes! Upon completing the 7 modules and your capstone ML project, you will receive a verified Certificate of Completion signed by Dr. Rajlakshmi Nayak (PhD IIT Madras).'
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-gray-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-14 space-y-3">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about the 1-to-1 Machine Learning mentorship course.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-gray-900 border-teal-500/50 shadow-xl'
                    : 'bg-gray-900/40 hover:bg-gray-900/80 border-gray-800'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-800/60 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            Have a custom question about the course? Email Dr. Rajlakshmi Nayak directly at{' '}
            <a href="mailto:rajlakshmi02@gmail.com" className="text-teal-400 font-bold hover:underline">
              rajlakshmi02@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
