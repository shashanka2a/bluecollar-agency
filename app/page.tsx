'use client';

import React, { useEffect } from 'react';
import CinematicScroll from '../sections/CinematicScroll';
import AgencyContent from '../sections/AgencyContent';

// Smooth scrolling wrapper using native CSS behavior or just layout
export default function Home() {
  
  // Basic scroll restoration fix
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <main className="w-full min-h-screen bg-black">
      {/* Navigation Header (Fixed) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
         <div className="font-bold text-xl tracking-tighter pointer-events-auto cursor-pointer">
            BLUECOLLAR
         </div>
         <div className="hidden md:flex gap-8 text-sm font-medium pointer-events-auto">
            <a href="#" className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Process</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
         </div>
         <div className="pointer-events-auto">
            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors">
              Book Call
            </button>
         </div>
      </nav>

      {/* The 3D Scroll Sequence */}
      <CinematicScroll />
      
      {/* The Standard Content */}
      <AgencyContent />
    </main>
  );
}

