import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface GlobalProgressBarProps {
  completedGoals: number;
  totalGoals: number;
}

export default function GlobalProgressBar({ completedGoals, totalGoals }: GlobalProgressBarProps) {
  const percentage = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  const getMotivationalMessage = () => {
    if (percentage === 0) return 'Perjalanan seribu mil dimulai dengan satu langkah. Ayo mulai!';
    if (percentage < 25) return 'Awal yang bagus! Teruslah melangkah maju.';
    if (percentage < 50) return 'Momentum terbangun! Anda sudah di jalur yang benar.';
    if (percentage < 75) return 'Luar biasa! Separuh perjalanan telah terlampaui.';
    if (percentage < 100) return 'Hampir sampai! Jangan menyerah sekarang.';
    return 'Selamat! Anda telah menguasai semua tujuan!';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="shadow-md border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Target className="h-6 w-6 mr-3 text-[#4A65F6]" />
              <h3 className="font-inter text-lg font-bold text-gray-800">Progres Belajar Anda</h3>
            </div>
            <span className="font-inter font-bold text-lg text-[#4A65F6]">{percentage}%</span>
          </div>
          <Progress value={percentage} className="bg-[#00C897] h-2" />
          <p className="text-sm text-gray-600 mt-3 text-center">{getMotivationalMessage()}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
