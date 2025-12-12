import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { SECTION_ORDER, SECTIONS } from '../constants';
import HouseSchematic from '../components/HouseSchematic';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

const CinematicScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<SectionId>('intro');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to section indices (0 to 6)
  // Total sections: 7. Range per section ~ 0.14
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSections = SECTION_ORDER.length;
    const index = Math.min(
      Math.floor(latest * totalSections),
      totalSections - 1
    );
    const newId = SECTION_ORDER[index];
    if (newId !== activeSectionId) {
      setActiveSectionId(newId);
    }
  });

  // Smooth opacity transform for the whole stage to fade out at the very end
  const stageOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
  const stageScale = useTransform(scrollYProgress, [0.95, 1], [1, 0.9]);

  // Current active data
  const activeData = SECTIONS[activeSectionId];

  return (
    <div 
      ref={containerRef} 
      className="relative h-[600vh] bg-black" 
    >
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row"
        style={{ opacity: stageOpacity, scale: stageScale }}
      >
        
        {/* --- LEFT: Content Stage --- */}
        <div className="w-full md:w-1/2 h-full relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20">
          
          <div className="relative min-h-[400px] w-full max-w-2xl">
             {/* Animate text swaps */}
             <motion.div
                key={activeSectionId}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
             >
                {/* Label */}
                <p className="text-sm font-bold tracking-[0.2em] text-neutral-500 uppercase">
                  {activeData.label}
                </p>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#FAFAF9] text-balance">
                  {activeData.headline}
                </h1>

                {/* Subline */}
                <p className="text-lg md:text-xl text-neutral-400 font-light max-w-md">
                  {activeData.subline}
                </p>

                {/* Conditional CTAs based on section */}
                {activeSectionId === 'intro' && (
                  <div className="flex gap-4 pt-4">
                    <Button variant="ghost" className="pl-0 hover:pl-2">See our work</Button>
                    <Button>Get a growth plan</Button>
                  </div>
                )}

                {activeSectionId === 'reassemble' && (
                   <div className="flex flex-col sm:flex-row gap-4 pt-8">
                     <Button className="w-full sm:w-auto">Book a 20-min call</Button>
                     <Button variant="secondary" className="w-full sm:w-auto">Request a quote</Button>
                   </div>
                )}
             </motion.div>
          </div>

          {/* Intro scroll hint */}
          {activeSectionId === 'intro' && (
            <motion.div 
              className="absolute bottom-12 left-6 md:left-24 text-neutral-600 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <ChevronDown />
            </motion.div>
          )}

        </div>

        {/* --- RIGHT: 3D Stage --- */}
        <div className="absolute inset-0 md:static md:w-1/2 h-full flex items-center justify-center pointer-events-none md:pointer-events-auto">
          {/* Background Gradient Spot */}
          <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 to-transparent opacity-50" />
          
          <div className="relative w-full h-full flex items-center justify-center">
             {/* The House Model */}
             <div className="relative z-10 scale-75 md:scale-100">
                <HouseSchematic section={activeSectionId} />
             </div>

             {/* Floating Project Cards */}
             {/* They only appear when projects exist for the section */}
             <div className="absolute inset-0 z-20 pointer-events-none">
                {activeData.projects.map((project, idx) => {
                  // Calculate positions based on index to scatter them
                  const positions = [
                    "top-[15%] right-[10%]",
                    "top-[45%] right-[5%]",
                    "bottom-[20%] right-[15%]"
                  ];
                  
                  return (
                    <div key={project.id} className={`absolute ${positions[idx]} hidden md:block`}>
                        <ProjectCard project={project} index={idx} />
                    </div>
                  );
                })}
             </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default CinematicScroll;