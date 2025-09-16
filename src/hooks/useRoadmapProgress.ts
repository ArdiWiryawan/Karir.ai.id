import { useState, useEffect } from 'react';

interface ProgressState {
  [key: string]: boolean;
}

export function useRoadmapProgress(profession: string) {
  const [progress, setProgress] = useState<ProgressState>({});
  const storageKey = `roadmap-progress-${profession}`;

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [storageKey]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress, storageKey]);

  // Toggle completion status of an item
  const toggleCompletion = (itemId: string) => {
    setProgress(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Calculate progress percentage for a section
  const calculateSectionProgress = (sectionItems: string[]) => {
    if (!sectionItems.length) return 0;
    const completedItems = sectionItems.filter(id => progress[id]);
    return (completedItems.length / sectionItems.length) * 100;
  };

  // Reset progress
  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(storageKey);
  };

  return {
    progress,
    toggleCompletion,
    calculateSectionProgress,
    resetProgress
  };
}