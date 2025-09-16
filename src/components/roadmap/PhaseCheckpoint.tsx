import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Circle, 
  ArrowRight,
  BookOpen,
  Target,
  Code,
  Zap,
  Clock,
  Award,
  BarChart2
} from 'lucide-react';
import { Phase as BlueprintPhase, Skill as BlueprintSkill } from '@/types/blueprint';
import SkillMasteryPanel, { Skill as PanelSkill, CoreConcept, MasteryGoal, PracticalProject } from './SkillMasteryPanel';

import type { Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

// Fungsi untuk mengkonversi BlueprintSkill ke Skill yang diharapkan oleh Panel
const convertToPanelSkill = (skill: BlueprintSkill): PanelSkill => {
  return {
    id: skill.id,
    name: skill.title,
    type: skill.type === 'hard' ? 'Hard Skill' : 'Soft Skill',
    timeToMaster: '3-6 bulan', // Default value, bisa disesuaikan
    importance: 8, // Default value, bisa disesuaikan
    details: skill.description,
    coreConcepts: skill.coreConcepts as CoreConcept[] | undefined,
    masteryGoals: skill.masteryGoals as MasteryGoal[] | undefined,
    practicalProjects: skill.practicalProjects as PracticalProject[] | undefined,
    // Untuk kompatibilitas
    title: skill.title,
    description: skill.description
  };
};

// Sesuaikan tipe Phase dengan properti yang digunakan di komponen
interface Phase extends Omit<BlueprintPhase, 'skills'> {
  skills: PanelSkill[];
}

interface PhaseCheckpointProps {
  phase: Phase;
  index: number;
  isLast: boolean;
  onGoalToggle: (goalId: string) => void;
  completedGoals: Record<string, boolean>;
}

export default function PhaseCheckpoint({ 
  phase, 
  index, 
  isLast, 
  onGoalToggle, 
  completedGoals 
}: PhaseCheckpointProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  
  // Hitung persentase penyelesaian untuk fase ini
  const phaseGoals = phase.skills.flatMap(skill => 
    skill.masteryGoals || []
  );
  const completedPhaseGoals = phaseGoals.filter(goal => completedGoals[goal.id]).length;
  const completionPercentage = phaseGoals.length > 0 
    ? Math.round((completedPhaseGoals / phaseGoals.length) * 100) 
    : 0;

  // Hitung total skill yang sudah memiliki setidaknya satu tujuan yang diselesaikan
  const skillsWithProgress = phase.skills.filter(skill => 
    (skill.masteryGoals || []).some(goal => completedGoals[goal.id])
  ).length;

  return (
    <motion.div 
      className="relative group"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Timeline connector */}
      {!isLast && (
        <motion.div 
          className="absolute left-6 top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-100"
          variants={itemVariants}
        ></motion.div>
      )}
      
      {/* Phase card */}
      <div className="relative z-10 flex items-start">
        {/* Timeline dot */}
        <motion.div 
          className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white border-4 border-indigo-100 shadow-lg group-hover:border-indigo-200 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
            completionPercentage === 100 
              ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' 
              : 'bg-gradient-to-br from-indigo-100 to-blue-50 text-indigo-600'
          } font-bold text-sm shadow-inner`}>
            {completionPercentage === 100 ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              index + 1
            )}
          </div>
        </motion.div>
        
        {/* Phase content */}
        <motion.div 
          className="ml-6 flex-1"
          variants={itemVariants}
        >
          {/* Phase header */}
          <motion.div 
            className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-indigo-100 cursor-pointer ${
              isExpanded ? 'ring-2 ring-indigo-100' : ''
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ y: -2 }}
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    {completionPercentage === 100 && (
                      <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" /> Selesai
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">{phase.description}</p>
                  
                  {/* Stats */}
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1.5 text-indigo-500" />
                      {phase.skills.length} Keterampilan
                    </div>
                    {phaseGoals.length > 0 && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Target className="h-4 w-4 mr-1.5 text-amber-500" />
                        {phaseGoals.length} Tujuan
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1.5 text-blue-500" />
                      {Math.ceil(phase.skills.length * 1.5)} Minggu
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  {phaseGoals.length > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{completedPhaseGoals}/{phaseGoals.length} Tercapai ({completionPercentage}%)</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${completionPercentage}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <button 
                  className={`ml-4 p-1.5 rounded-full transition-all duration-200 ${
                    isExpanded 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-400 hover:bg-gray-50 hover:text-gray-500'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    transition: { 
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    transition: { 
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  className="overflow-hidden border-t border-gray-100"
                >
                  <div className="p-5 pt-4 bg-gray-50/50">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <Zap className="h-4 w-4 text-amber-500 mr-2" />
                      Keterampilan yang Akan Dipelajari
                    </h4>
                    
                    <div className="space-y-3">
                      {phase.skills.length > 0 ? (
                        phase.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * skillIndex }}
                            className="bg-white rounded-lg shadow-xs p-4 border border-gray-100 hover:border-indigo-100 transition-colors"
                          >
                            <SkillMasteryPanel
                              skill={convertToPanelSkill(skill as unknown as BlueprintSkill)}
                              onGoalToggle={onGoalToggle}
                              completedGoals={completedGoals}
                            />
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-6 text-gray-400">
                          <p>Tidak ada keterampilan yang ditentukan untuk fase ini.</p>
                        </div>
                      )}
                    </div>
                    
                    {phase.skills.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                        <button 
                          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                          onClick={() => {
                            // Scroll to next phase if not last
                            if (!isLast) {
                              document.getElementById(`phase-${index + 1}`)?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }}
                        >
                          {isLast ? 'Selesai!' : 'Lanjut ke fase berikutnya'}
                          {!isLast && <ArrowRight className="ml-1 h-4 w-4" />}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-4 top-0 h-32 w-32 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-30 -z-10 blur-2xl transition-opacity duration-500"
        variants={itemVariants}
      />
    </motion.div>
  );
}
