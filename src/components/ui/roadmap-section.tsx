import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RoadmapItem } from "./roadmap-item";
import { cn } from "@/lib/utils";
import { RoadmapSectionProps } from "@/types/blueprint";

export function RoadmapSection({
  section,
  isExpanded,
  onToggle,
  progress,
  onToggleComplete,
  filterItems
}: RoadmapSectionProps) {
  const filteredItems = filterItems(section.skills);
  
  if (filteredItems.length === 0) {
    return null;
  }

  // Calculate section progress
  const totalItems = section.skills.length;
  const completedItems = section.skills.filter(item => progress[item.id]).length;
  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="mb-8"
    >
      <div className="rounded-lg border border-muted bg-card/50 backdrop-blur-sm 
                    transition-all duration-200 hover:bg-card/80">
        {/* Section Header */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 p-6 cursor-pointer select-none"
        >
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center",
            "transition-transform duration-200",
            isExpanded ? "rotate-0" : "-rotate-90"
          )}>
            <ChevronDown className="w-5 h-5" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="text-sm text-muted-foreground">{section.duration}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {completedItems}/{totalItems} completed
              </span>
            </div>
            
            {section.description && (
              <p className="text-muted-foreground mb-3">{section.description}</p>
            )}
            
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </button>

        {/* Section Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="px-6 pb-6"
            >
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <RoadmapItem
                    key={item.id}
                    item={item}
                    isCompleted={progress[item.id]}
                    onToggleComplete={() => onToggleComplete(item.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}