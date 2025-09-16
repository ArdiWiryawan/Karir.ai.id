import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Target, Code, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tipe untuk CoreConcept, MasteryGoal, dan PracticalProject
export interface CoreConcept {
  title: string;
  description: string;
}

export interface MasteryGoal {
  id: string;
  description: string;
}

export interface PracticalProject {
  title: string;
  description: string;
  link?: string;
}

// Tipe Skill yang digunakan oleh komponen ini
export interface Skill {
  id: string;
  name: string;
  type: 'Hard Skill' | 'Soft Skill';
  timeToMaster: string;
  importance: number;
  details?: string;
  coreConcepts?: CoreConcept[];
  masteryGoals?: MasteryGoal[];
  practicalProjects?: PracticalProject[];
  // Untuk kompatibilitas dengan data lama
  title?: string;
  description?: string;
}

interface SkillMasteryPanelProps {
  skill: Skill;
  onGoalToggle?: (goalId: string) => void;
  completedGoals?: Record<string, boolean>;
}

export default function SkillMasteryPanel({ skill, onGoalToggle, completedGoals = {} }: SkillMasteryPanelProps) {
  const [activeTab, setActiveTab] = useState<'concepts' | 'goals' | 'projects'>('concepts');
  
  // Gunakan name, title, atau fallback ke string default
  const skillName = skill.name || skill.title || 'Keterampilan Tanpa Nama';
  // Gunakan details, description, atau string kosong
  const skillDescription = skill.details || skill.description || '';
  const [expanded, setExpanded] = useState(true);

  const completionPercentage = skill.masteryGoals?.length
    ? Math.round((skill.masteryGoals.filter(goal => completedGoals[goal.id]).length / skill.masteryGoals.length) * 100)
    : 0;

  const renderCoreConcepts = () => (
    <div className="space-y-4">
      <h3 className="font-inter font-semibold text-gray-800 flex items-center">
        <BookOpen className="h-5 w-5 mr-2 text-[#4A65F6]" />
        Konsep Inti
      </h3>
      <div className="space-y-3">
        {skill.coreConcepts?.map((concept, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <h4 className="font-medium text-gray-900">{concept.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{concept.description}</p>
          </div>
        )) || <p className="text-sm text-gray-500 italic">Tidak ada konsep inti yang tersedia.</p>}
      </div>
    </div>
  );

  const renderMasteryGoals = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-inter font-semibold text-gray-800 flex items-center">
          <Target className="h-5 w-5 mr-2 text-[#00C897]" />
          Tujuan Penguasaan
        </h3>
        {skill.masteryGoals?.length > 0 && (
          <div className="flex items-center">
            <span className="text-xs font-medium text-gray-500 mr-2">{completionPercentage}%</span>
            <Progress value={completionPercentage} className="h-2 w-20 bg-gray-200" />
          </div>
        )}
      </div>
      <div className="space-y-2">
        {skill.masteryGoals?.map((goal, index) => (
          <div 
            key={goal.id} 
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => onGoalToggle?.(goal.id)}
          >
            <CheckCircle 
              className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${completedGoals[goal.id] ? 'text-[#00C897]' : 'text-gray-300'}`} 
            />
            <span className={`text-sm ${completedGoals[goal.id] ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {goal.description}
            </span>
          </div>
        )) || <p className="text-sm text-gray-500 italic">Tidak ada tujuan penguasaan yang tersedia.</p>}
      </div>
    </div>
  );

  const renderPracticalProjects = () => (
    <div className="space-y-4">
      <h3 className="font-inter font-semibold text-gray-800 flex items-center">
        <Code className="h-5 w-5 mr-2 text-[#9C27B0]" />
        Proyek Praktis
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {skill.practicalProjects?.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-gray-900">{project.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            <div className="mt-3 text-sm text-[#4A65F6] font-medium flex items-center">
              Mulai Proyek
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        )) || <p className="text-sm text-gray-500 italic col-span-2">Tidak ada proyek praktis yang tersedia.</p>}
      </div>
    </div>
  );

  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div 
        className="px-6 py-4 flex justify-between items-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="font-inter font-semibold text-lg text-gray-900">{skillName}</h3>
          <div className="flex items-center mt-1">
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full mr-2 ${
              skill.type === 'Hard Skill' || (skill as any).type === 'hard' ? 'bg-blue-100 text-[#4A65F6]' : 'bg-purple-100 text-[#9C27B0]'
            }`}>
              {skill.type}
            </span>
            <span className="text-xs text-gray-500">
              {skill.timeToMaster} • {skill.importance}/10 Penting
            </span>
          </div>
        </div>
        {expanded ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <CardContent className="p-6 pt-4 space-y-6">
              <div className="flex space-x-2 border-b border-gray-100 pb-2">
                <button
                  onClick={() => setActiveTab('concepts')}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'concepts' 
                      ? 'text-[#4A65F6] border-b-2 border-[#4A65F6]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Konsep
                </button>
                <button
                  onClick={() => setActiveTab('goals')}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'goals' 
                      ? 'text-[#00C897] border-b-2 border-[#00C897]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Penguasaan
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'projects' 
                      ? 'text-[#9C27B0] border-b-2 border-[#9C27B0]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Proyek
                </button>
              </div>
              
              <div className="min-h-[200px]">
                {activeTab === 'concepts' && renderCoreConcepts()}
                {activeTab === 'goals' && renderMasteryGoals()}
                {activeTab === 'projects' && renderPracticalProjects()}
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
