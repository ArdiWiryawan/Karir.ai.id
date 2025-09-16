import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skill } from "@/types/blueprint";

interface RoadmapItemProps {
  item: Skill;
  isCompleted: boolean;
  onToggleComplete: () => void;
  depth?: number;
}

export function RoadmapItem({
  item,
  isCompleted,
  onToggleComplete,
  depth = 0,
}: RoadmapItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusStyles = {
    required: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    recommended: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    optional: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  };

  const typeStyles = {
    hard: "bg-primary/10 text-primary",
    soft: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn("group relative", depth > 0 && "ml-6")}
    >
      <div
        className={cn(
          "relative flex items-start gap-4 p-4 rounded-lg border border-transparent",
          "transition-all duration-200 hover:border-muted-foreground/10 hover:bg-muted/30",
          depth > 0 && "before:absolute before:left-[-1.5rem] before:top-1/2 before:-translate-y-1/2",
          "before:h-px before:w-4 before:bg-muted-foreground/20"
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onToggleComplete}
                className={cn(
                  "flex-none w-5 h-5 rounded-full border-2 transition-all duration-200",
                  "hover:ring-2 hover:ring-primary/20",
                  isCompleted
                    ? "bg-primary border-primary text-white"
                    : "border-muted-foreground/50"
                )}
              >
                {isCompleted && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full p-1"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle completion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-medium flex-grow">{item.title}</h3>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  typeStyles[item.type]
                )}
              >
                {item.type}
              </span>
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  statusStyles[item.status]
                )}
              >
                {item.status}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}

          {item.resources && item.resources.length > 0 && (
            <div className="flex items-center gap-2 mt-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {item.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80
                             hover:underline transition-colors"
                  >
                    {resource.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {item.details && item.details.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Details List */}
      <AnimatePresence>
        {isExpanded && item.details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-8 mt-2"
          >
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}