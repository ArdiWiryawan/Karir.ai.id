import React, { useState, useMemo, useEffect } from 'react';
import { SkillBlueprint, Phase as BlueprintPhase, Skill as BlueprintSkill } from '@/types/blueprint';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';
import GlobalProgressBar from './roadmap/GlobalProgressBar';
import PhaseCheckpoint from './roadmap/PhaseCheckpoint';
import { motion } from 'framer-motion';

// Fungsi untuk mengkonversi BlueprintSkill ke PanelSkill
const convertToPanelSkill = (skill: BlueprintSkill): any => ({
  ...skill,
  name: skill.title,
  type: skill.type === 'hard' ? 'Hard Skill' : 'Soft Skill',
  timeToMaster: '3-6 bulan', // Default value
  importance: 8, // Default value
  details: skill.description,
});

// Fungsi untuk mengkonversi BlueprintPhase ke format yang diharapkan oleh PhaseCheckpoint
const convertToPanelPhase = (phase: BlueprintPhase, index: number, totalPhases: number) => ({
  ...phase,
  skills: phase.skills.map(convertToPanelSkill)
});

interface BlueprintViewProps {
  blueprint: SkillBlueprint;
}

export default function BlueprintView({ blueprint }: BlueprintViewProps) {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(blueprint.phases[0]?.id || null);
  const [completedGoals, setCompletedGoals] = useState<Record<string, boolean>>({});

  const allMasteryGoals = useMemo(() => {
    return blueprint.phases.flatMap(phase => 
      phase.skills.flatMap(skill => skill.masteryGoals || [])
    );
  }, [blueprint.phases]);

  const totalMasteryGoals = allMasteryGoals.length;

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(`progress_${blueprint.profession}`);
      if (savedProgress) {
        setCompletedGoals(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to parse progress from localStorage", error);
    }
  }, [blueprint.profession]);

  const handleGoalToggle = (goalId: string) => {
    const newCompletedGoals = { ...completedGoals, [goalId]: !completedGoals[goalId] };
    setCompletedGoals(newCompletedGoals);
    try {
      localStorage.setItem(`progress_${blueprint.profession}`, JSON.stringify(newCompletedGoals));
    } catch (error) {
      console.error("Failed to save progress to localStorage", error);
    }
  };

  const completedGoalsCount = Object.values(completedGoals).filter(Boolean).length;

  const getRiskStyles = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'tinggi':
        return { bg: 'bg-red-50', text: 'text-red-700', icon: <ShieldCheck className="h-5 w-5" /> };
      case 'sedang':
        return { bg: 'bg-yellow-50', text: 'text-yellow-700', icon: <ShieldCheck className="h-5 w-5" /> };
      case 'rendah':
        return { bg: 'bg-green-50', text: 'text-green-700', icon: <ShieldCheck className="h-5 w-5" /> };
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-700', icon: <ShieldCheck className="h-5 w-5" /> };
    }
  };

  const riskLevel = typeof blueprint.meta.aiRisk === 'string' 
    ? blueprint.meta.aiRisk 
    : blueprint.meta.aiRisk?.level || 'sedang';
    
  const riskStyles = getRiskStyles(riskLevel);
  
  // Konversi semua fase ke format yang diharapkan
  const panelPhases = useMemo(() => 
    blueprint.phases.map((phase, index) => 
      convertToPanelPhase(phase, index, blueprint.phases.length)
    ),
    [blueprint.phases]
  );

  return (
    <div className="font-manrope bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen p-4 md:p-8 antialiased">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-6xl mx-auto text-center md:text-left"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            Career Roadmap
          </span>
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
        >
          {blueprint.profession} Mastery Path
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed mx-auto md:mx-0"
        >
          {blueprint.meta.summary}
        </motion.p>
      </motion.header>

      {/* Global Progress Bar */}
      {totalMasteryGoals > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 hover:shadow-xl transition-all duration-500"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-700">Progress Keseluruhan</h3>
            <span className="text-sm font-medium text-blue-600">{completedGoalsCount} dari {totalMasteryGoals} Tercapai</span>
          </div>
          <GlobalProgressBar completedGoals={completedGoalsCount} totalGoals={totalMasteryGoals} />
        </motion.div>
      )}

      {/* Meta Info Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Gaji</h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">
                {blueprint.meta.salary.junior} - {blueprint.meta.salary.senior}
              </p>
              <p className="text-sm text-gray-500">Rentang gaji per bulan</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">Level Junior hingga Senior</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Prospek</h3>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">
                {blueprint.meta.growth}
              </p>
              <p className="text-sm text-gray-500">Tingkat pertumbuhan karir</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-2 bg-green-100 rounded-full flex-1 mr-2">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{ width: `${blueprint.meta.growth === 'Tinggi' ? '80%' : blueprint.meta.growth === 'Sedang' ? '50%' : '30%'}` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {blueprint.meta.growth === 'Tinggi' ? 'Tinggi' : blueprint.meta.growth === 'Sedang' ? 'Sedang' : 'Rendah'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-500 group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Risiko AI</h3>
              <div className={`p-2 ${riskStyles.bg.replace('bg-', 'bg-').replace('-50', '-100')} rounded-lg`}>
                {React.cloneElement(riskStyles.icon, { 
                  className: `h-5 w-5 ${riskStyles.text}` 
                })}
              </div>
            </div>
            <div className="space-y-1">
              <p className={`text-2xl font-bold ${riskStyles.text} capitalize`}>
                {riskLevel}
              </p>
              <p className="text-sm text-gray-500">Tingkat risiko otomatisasi</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <div className="h-2 bg-gray-100 rounded-full flex-1 mr-2">
                  <div 
                    className={`h-full rounded-full ${riskStyles.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} 
                    style={{ width: riskLevel === 'tinggi' ? '80%' : riskLevel === 'sedang' ? '50%' : '20%' }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${riskStyles.text}`}>
                  {riskLevel}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent -z-10"></div>
        <div className="relative">
          {/* Garis vertikal timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100 shadow-lg"></div>
          
          {/* Daftar fase */}
          <div className="space-y-16 py-8">
            {panelPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative group"
              >
                <PhaseCheckpoint
                  phase={phase}
                  index={index}
                  isLast={index === panelPhases.length - 1}
                  onGoalToggle={handleGoalToggle}
                  completedGoals={completedGoals}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Dekorasi akhir timeline */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            className="absolute left-0 top-full mt-12 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 text-base font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Journey Complete!
            </p>
            <p className="mt-1 text-sm text-gray-500">You've reached the end of your roadmap</p>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-gradient-to-br from-indigo-600 to-blue-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
