import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstructorCard from './components/InstructorCard';
import Curriculum from './components/Curriculum';
import BranchRoadmap from './components/BranchRoadmap';
import ContactFooter from './components/ContactFooter';
import RazorpayCheckoutModal from './components/RazorpayCheckoutModal';
import CertificateModal from './components/CertificateModal';
import CallBookingModal from './components/CallBookingModal';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white">
      {/* Light Ambient Canvas */}
      <ParticleBackground />

      {/* Header Navigation */}
      <Navbar
        onOpenEnroll={() => setEnrollModalOpen(true)}
        onOpenCertificate={() => setCertificateModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-2">
        <Hero
          onOpenEnroll={() => setEnrollModalOpen(true)}
          onOpenCall={() => setCallModalOpen(true)}
        />

        <InstructorCard
          onOpenEnroll={() => setEnrollModalOpen(true)}
          onOpenCertificate={() => setCertificateModalOpen(true)}
        />

        <Curriculum
          onOpenEnroll={() => setEnrollModalOpen(true)}
        />

        <BranchRoadmap
          onOpenEnroll={() => setEnrollModalOpen(true)}
        />
      </main>

      {/* Footer & Direct Mail Form */}
      <ContactFooter
        onOpenEnroll={() => setEnrollModalOpen(true)}
        onOpenCertificate={() => setCertificateModalOpen(true)}
      />

      {/* Razorpay & Support Modals */}
      <RazorpayCheckoutModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
      />

      <CertificateModal
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
      />

      <CallBookingModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        onOpenEnroll={() => setEnrollModalOpen(true)}
      />
    </div>
  );
}
