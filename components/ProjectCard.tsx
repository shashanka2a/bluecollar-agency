'use client';

import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      className="relative w-full max-w-sm bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl group cursor-default"
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -50, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: index * 0.1 
      }}
      whileHover={{ 
        y: -5,
        rotateX: 2,
        rotateY: -2,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(232, 180, 160, 0.1)"
      }}
    >
      {/* Image thumbnail */}
      <div className="h-40 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.clientName} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute bottom-3 left-4 z-20">
          <p className="text-white font-semibold tracking-tight">{project.clientName}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-400 font-light">{project.description}</p>
        
        {/* Stat Highlight */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-[2px] bg-[#E8B4A0]" />
          <span className="text-2xl font-bold text-[#E8B4A0] tracking-tighter">
            {project.stat}
          </span>
        </div>
      </div>

      {/* Glossy sheen effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};