import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Search, Share2, Download, Filter, X, Check } from "lucide-react";
import { useRoadmapProgress } from '@/hooks/useRoadmapProgress';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RoadmapSection } from '@/components/ui/roadmap-section';
import { Skill } from '@/types/blueprint'; // Import Skill type

// Helper function to convert RoadmapItem to Skill
const convertRoadmapItemToSkill = (item: RoadmapItem): Skill => ({
  id: item.id,
  type: 'hard' as const, // Default to hard skill
  title: item.title,
  details: item.description ? [item.description] : [],
  description: item.description,
  status: item.status,
  resources: item.resourceUrl ? [{ title: 'Resource', url: item.resourceUrl }] : [],
  subSkills: item.subItems ? item.subItems.map(convertRoadmapItemToSkill) : []
});

interface RoadmapSection {
  id: string;
  title: string;
  description?: string;
  items: RoadmapItem[];
}

interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  status?: 'required' | 'recommended' | 'optional';
  resourceUrl?: string;
  isCompleted?: boolean;
  subItems?: RoadmapItem[];
}

interface CareerRoadmapProps {
  profession: string;
  sections: RoadmapSection[];
}

export default function CareerRoadmap({ profession, sections }: CareerRoadmapProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const { progress, toggleCompletion, calculateSectionProgress, resetProgress } = useRoadmapProgress(profession);

  // Initialize expanded sections
  useEffect(() => {
    setExpandedSections(new Set(sections.map(s => s.id)));
  }, [sections]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Filter items based on search and status
  const filterItems = (items: Skill[]): Skill[] => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.details && item.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchesStatus = statusFilter.length === 0 || statusFilter.includes(item.status || 'optional');
      return matchesSearch && matchesStatus;
    });
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
    let total = 0;
    let completed = 0;
    
    sections.forEach(section => {
      section.items.forEach(item => {
        const countItem = (item: RoadmapItem) => {
          if (item.status === 'required') {
            total++;
            if (progress[item.id]) completed++;
          }
          item.subItems?.forEach(countItem);
        };
        countItem(item);
      });
    });
    
    return total ? (completed / total) * 100 : 0;
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${profession} Career Roadmap`,
        text: `Check out this career roadmap for ${profession}`,
        url: window.location.href
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleExport = () => {
    const data = {
      profession,
      progress,
      date: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profession.toLowerCase().replace(/\s+/g, '-')}-progress.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50 shadow-sm transition-all duration-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight">{profession} Roadmap</h1>
              <p className="text-muted-foreground">Track your progress and master the skills</p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleExport}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 h-12 rounded-full bg-muted/50 border-muted-foreground/20 
                           focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 
                             hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter([])}
                    className="justify-between"
                  >
                    All Skills
                    {statusFilter.length === 0 && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter(['required'])}
                    className="justify-between"
                  >
                    Required Only
                    {statusFilter.includes('required') && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setStatusFilter(['recommended'])}
                    className="justify-between"
                  >
                    Recommended Only
                    {statusFilter.includes('recommended') && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(overallProgress)}%
                  </span>
                </div>
                <Progress value={overallProgress} className="h-2" />
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetProgress}
                className="text-muted-foreground hover:text-foreground"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div layout>
            {sections.map((section) => (
              <RoadmapSection
                key={section.id}
                section={{
                  ...section,
                  skills: (section.items || []).map(convertRoadmapItemToSkill)
                }}
                isExpanded={expandedSections.has(section.id)}
                onToggle={() => toggleSection(section.id)}
                progress={progress}
                onToggleComplete={toggleCompletion}
                filterItems={filterItems}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}