import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AgencyContent: React.FC = () => {
  return (
    <div className="relative z-30 bg-[#FAFAF9] text-black min-h-screen rounded-t-[3rem] -mt-20 pt-32 pb-24 px-6 md:px-12 lg:px-24 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mb-32">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-center">
          Comprehensive Growth System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "High-Performance Web", desc: "Speed, accessibility, and conversion optimization baked into every pixel." },
            { title: "Local SEO Dominance", desc: "Rank #1 in the maps pack for the keywords that actually drive revenue." },
            { title: "Reputation Management", desc: "Automated review generation to build trust before they even click." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
           <img 
             src="https://picsum.photos/800/800?grayscale" 
             alt="Team working" 
             className="rounded-2xl shadow-xl w-full"
           />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
            <span className="text-[#E8B4A0] font-bold tracking-widest uppercase text-sm">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">We handle the tech.<br/>You handle the tools.</h2>
            <p className="text-lg text-gray-600">
              Most agencies guess. We engineer. Our proprietary "TradeStack" framework ensures your digital presence is as solid as the structures you build.
            </p>
            <ul className="space-y-4">
              {['Market Analysis', 'Competitor Gap Audit', 'Conversion Design', 'Launch & Scale'].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium text-lg">
                  <CheckCircle2 className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
            <Button className="bg-black text-white hover:bg-gray-800 shadow-none mt-4">
              See the blueprint <ArrowRight className="w-4 h-4" />
            </Button>
        </div>
      </div>

      {/* Footer / Final CTA */}
      <div className="max-w-5xl mx-auto text-center bg-black text-white rounded-3xl p-12 md:p-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#3B82F6]/20 via-transparent to-transparent" />
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to fill your schedule?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We only partner with one trade company per city to ensure zero conflict of interest. Check if your territory is available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button className="w-full sm:w-auto text-lg px-8 py-4">Check Availability</Button>
            <Button variant="ghost" className="w-full sm:w-auto">View Pricing</Button>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-24 border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 BlueCollar Agency. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Sitemap</a>
        </div>
      </footer>

    </div>
  );
};

export default AgencyContent;