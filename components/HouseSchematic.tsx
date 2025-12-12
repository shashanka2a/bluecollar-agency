import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionId } from '../types';

interface HouseSchematicProps {
  section: SectionId;
}

const HouseSchematic: React.FC<HouseSchematicProps> = ({ section }) => {
  // Animation states for parts
  const isRoofLifted = section === 'roofing';
  const isHvacActive = section === 'hvac';
  const isPlumbingActive = section === 'plumbing';
  const isElectricalActive = section === 'electrical';
  const isExteriorActive = section === 'exterior';
  const isReassemble = section === 'reassemble';

  // Base house container variants
  const containerVariants: Variants = {
    initial: { scale: 0.8, rotateY: -15, y: 50, opacity: 0 },
    intro: { scale: 1, rotateY: -15, y: 0, opacity: 1 },
    roofing: { scale: 0.9, rotateY: -10, y: 50, opacity: 1 },
    hvac: { scale: 1, rotateY: 30, y: 50, opacity: 1 }, // Increased rotation to show side
    plumbing: { scale: 1.1, rotateY: 0, y: 20, opacity: 1 },
    electrical: { scale: 1.1, rotateY: 0, y: 20, opacity: 1 },
    exterior: { scale: 0.85, rotateY: -5, y: -20, opacity: 1 },
    reassemble: { scale: 0.8, rotateY: 0, y: 0, opacity: 1 },
  };

  return (
    <div className="w-full h-full flex items-center justify-center perspective-1000">
      <motion.div
        className="relative w-80 h-80 md:w-96 md:h-96 transform-style-3d"
        variants={containerVariants}
        initial="initial"
        animate={section}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- ROOF --- */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[120px] z-30 transform-style-3d origin-bottom"
          animate={{
            y: isRoofLifted ? -120 : 0,
            rotateX: isRoofLifted ? 10 : 0,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        >
            {/* Front Gable */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[192px] border-r-[192px] border-b-[120px] border-l-transparent border-r-transparent border-b-neutral-800 drop-shadow-2xl">
                 {/* Roof highlight */}
                 {isRoofLifted && (
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="absolute -left-[192px] top-[120px] w-[384px] h-[4px] bg-[#E8B4A0]" 
                     />
                 )}
            </div>
        </motion.div>

        {/* --- MAIN BODY (Walls) --- */}
        <div className="absolute top-[120px] left-[10%] w-[80%] h-[200px] bg-neutral-900 border border-neutral-700 shadow-2xl transform-style-3d">
            
            {/* --- PIPES (Plumbing) --- */}
            <motion.div 
                className="absolute inset-0 z-20 overflow-hidden"
                animate={{ opacity: isPlumbingActive ? 1 : 0 }}
            >
                {/* Simulated Pipes */}
                <div className="absolute left-[20%] top-0 w-2 h-full bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute left-[20%] top-[40%] w-[60%] h-2 bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="absolute right-[20%] bottom-0 w-2 h-[60%] bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                
                {/* Moving Water Effect */}
                {isPlumbingActive && (
                     <motion.div 
                        className="absolute left-[20%] top-0 w-2 h-10 bg-white blur-sm"
                        animate={{ y: [0, 200], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                     />
                )}
            </motion.div>

             {/* --- WIRING (Electrical) --- */}
             <motion.div 
                className="absolute inset-0 z-20"
                animate={{ opacity: isElectricalActive ? 1 : 0 }}
            >
                 <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none" stroke="#EAB308" strokeWidth="1">
                    <path d="M10 90 L10 50 L50 50 L50 10 L90 10" strokeDasharray="4 2" />
                    <path d="M90 90 L90 70 L30 70 L30 30" strokeDasharray="4 2" />
                    
                    {/* Spark */}
                    {isElectricalActive && (
                        <motion.circle 
                            cx="0" cy="0" r="2" fill="white"
                            animate={{ 
                                pathLength: [0, 1], 
                                opacity: [0, 1, 0],
                                offsetDistance: ["0%", "100%"]
                            }}
                            style={{ offsetPath: "path('M10 90 L10 50 L50 50 L50 10 L90 10')" }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        />
                    )}
                 </svg>
            </motion.div>
        </div>

        {/* --- HVAC UNIT --- */}
        <motion.div
            className="absolute top-[220px] -right-[50px] w-[80px] h-[80px] bg-neutral-800 border border-neutral-600 rounded-sm transform-style-3d flex items-center justify-center z-50"
            animate={{
                x: isHvacActive ? 20 : 0,
                scale: isHvacActive ? 1.2 : 1,
                boxShadow: isHvacActive ? "0 0 30px rgba(59,130,246, 0.4)" : "none",
                borderColor: isHvacActive ? "#3B82F6" : "#525252"
            }}
        >
             {/* Fan Blades */}
             <div className="w-[60px] h-[60px] rounded-full border border-neutral-500 relative flex items-center justify-center overflow-hidden bg-black">
                <motion.div 
                    className="w-full h-1 bg-neutral-500 absolute"
                    animate={isHvacActive ? { rotate: 360 } : { rotate: 0 }}
                    transition={isHvacActive ? { repeat: Infinity, duration: 0.6, ease: "linear" } : { duration: 0.5 }}
                />
                 <motion.div 
                    className="w-full h-1 bg-neutral-500 absolute"
                    style={{ rotate: 90 }}
                    animate={isHvacActive ? { rotate: 450 } : { rotate: 90 }}
                    transition={isHvacActive ? { repeat: Infinity, duration: 0.6, ease: "linear" } : { duration: 0.5 }}
                />
             </div>
             {/* Cold Vapor */}
             {isHvacActive && (
                 <motion.div 
                    className="absolute -top-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                 />
             )}
        </motion.div>

        {/* --- EXTERIOR (Fence & Grass) --- */}
        <motion.div
            className="absolute bottom-0 left-[-20%] w-[140%] h-[60px] z-40 flex items-end justify-between overflow-hidden pointer-events-none"
            animate={{ 
                y: isExteriorActive ? 0 : 100, 
                opacity: isExteriorActive ? 1 : 0 
            }}
        >
             {/* Fence Pickets */}
             {Array.from({ length: 12 }).map((_, i) => (
                 <div key={i} className="w-[8%] h-full bg-neutral-800 rounded-t-md border-x border-t border-neutral-600 relative top-2" />
             ))}
        </motion.div>
        
        {/* Grass Layer */}
        {isExteriorActive && (
            <motion.div 
                className="absolute -bottom-4 left-[-30%] w-[160%] h-10 bg-green-900/50 blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />
        )}

      </motion.div>
    </div>
  );
};

export default HouseSchematic;