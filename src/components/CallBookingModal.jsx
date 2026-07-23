import React, { useState } from 'react';
import { X, Video, CheckCircle2 } from 'lucide-react';

export default function CallBookingModal({ isOpen, onClose, onOpenEnroll }) {
  if (!isOpen) return null;

  const [booked, setBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-07-28',
    slot: '05:00 PM - 05:15 PM'
  });

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8">
        
        <div className="px-6 py-4 bg-teal-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            <h3 className="text-sm font-bold">Book Free 15-Min Intro Call</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {booked ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-900">Call Slot Confirmed!</h4>
            <p className="text-xs text-slate-600">
              Dr. Rajlakshmi Nayak will contact you on <strong className="text-slate-900">{formData.phone}</strong> on <strong className="text-teal-800">{formData.date} at {formData.slot}</strong>.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenEnroll();
              }}
              className="w-full py-3 rounded-xl bg-teal-700 text-white font-extrabold text-xs"
            >
              Proceed to Reserve Course Slot via Razorpay
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-3">
            <p className="text-xs text-slate-600">
              Speak directly with <strong className="text-slate-900">Dr. Rajlakshmi Nayak</strong> to discuss your B.Tech goals.
            </p>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Roy"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="student@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Slot</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none"
                >
                  <option value="05:00 PM - 05:15 PM">05:00 PM - 05:15 PM</option>
                  <option value="06:00 PM - 06:15 PM">06:00 PM - 06:15 PM</option>
                  <option value="07:00 PM - 07:15 PM">07:00 PM - 07:15 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-700 text-white font-extrabold text-xs shadow-md"
            >
              Confirm 15-Min Intro Call Slot
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
