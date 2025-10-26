import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Award,
  Star,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Share2,
  Trophy,
  Zap,
  Crown,
  Gift,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: 'exploration' | 'learning' | 'social' | 'progression';
  requirement: string;
  points: number;
  unlocked: boolean;
  unlockedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface UserProgress {
  totalPoints: number;
  level: number;
  experience: number;
  experienceToNext: number;
  achievements: string[];
  streak: number;
  forecastsCompleted: number;
  skillsAnalyzed: number;
  reportsShared: number;
}

const AchievementSystem = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalPoints: 1250,
    level: 8,
    experience: 250,
    experienceToNext: 750,
    achievements: ['first-forecast', 'skill-explorer', 'trend-watcher'],
    streak: 7,
    forecastsCompleted: 12,
    skillsAnalyzed: 156,
    reportsShared: 3
  });

  const [showAchievements, setShowAchievements] = useState(false);

  const { toast } = useToast();

  const achievements: Achievement[] = [
    {
      id: 'first-forecast',
      title: 'First Steps',
      description: 'Complete your first career forecast',
      icon: Target,
      category: 'exploration',
      requirement: '1 forecast completed',
      points: 100,
      unlocked: true,
      unlockedDate: '2025-01-15',
      rarity: 'common'
    },
    {
      id: 'skill-explorer',
      title: 'Skill Explorer',
      description: 'Analyze 50 different skills',
      icon: BookOpen,
      category: 'learning',
      requirement: '50 skills analyzed',
      points: 250,
      unlocked: true,
      unlockedDate: '2025-01-20',
      rarity: 'common'
    },
    {
      id: 'trend-watcher',
      title: 'Trend Watcher',
      description: 'Check industry trends for 7 days straight',
      icon: TrendingUp,
      category: 'progression',
      requirement: '7 day streak',
      points: 200,
      unlocked: true,
      unlockedDate: '2025-01-25',
      rarity: 'rare'
    },
    {
      id: 'career-planner',
      title: 'Career Planner',
      description: 'Create 10 different career scenarios',
      icon: Target,
      category: 'progression',
      requirement: '10 scenarios created',
      points: 500,
      unlocked: false,
      rarity: 'epic'
    },
    {
      id: 'social-butterfly',
      title: 'Social Butterfly',
      description: 'Share 5 reports with your network',
      icon: Share2,
      category: 'social',
      requirement: '5 reports shared',
      points: 300,
      unlocked: false,
      rarity: 'rare'
    },
    {
      id: 'ai-proof',
      title: 'AI-Proof Pioneer',
      description: 'Achieve 90%+ AI-proof score',
      icon: Award,
      category: 'progression',
      requirement: '90% AI-proof score',
      points: 750,
      unlocked: false,
      rarity: 'legendary'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'rare': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'epic': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'legendary': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exploration': return Target;
      case 'learning': return BookOpen;
      case 'social': return Users;
      case 'progression': return TrendingUp;
      default: return Award;
    }
  };

  const checkAchievements = () => {
    // Simulate achievement checking
    const newAchievements = [];

    if (userProgress.forecastsCompleted >= 10 && !userProgress.achievements.includes('career-planner')) {
      newAchievements.push('career-planner');
    }

    if (userProgress.reportsShared >= 5 && !userProgress.achievements.includes('social-butterfly')) {
      newAchievements.push('social-butterfly');
    }

    if (userProgress.forecastsCompleted >= 1 && !userProgress.achievements.includes('first-forecast')) {
      newAchievements.push('first-forecast');
    }

    if (newAchievements.length > 0) {
      setUserProgress(prev => ({
        ...prev,
        achievements: [...prev.achievements, ...newAchievements],
        totalPoints: prev.totalPoints + newAchievements.reduce((sum, id) => {
          const achievement = achievements.find(a => a.id === id);
          return sum + (achievement?.points || 0);
        }, 0)
      }));

      newAchievements.forEach(id => {
        const achievement = achievements.find(a => a.id === id);
        if (achievement) {
          toast({
            title: "🎉 Achievement Unlocked!",
            description: `${achievement.title}: ${achievement.description}`,
          });
        }
      });
    }
  };

  useEffect(() => {
    checkAchievements();
  }, [userProgress.forecastsCompleted, userProgress.reportsShared]);

  const unlockedAchievements = achievements.filter(a => userProgress.achievements.includes(a.id));
  const lockedAchievements = achievements.filter(a => !userProgress.achievements.includes(a.id));

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            Your Progress
          </CardTitle>
          <CardDescription>
            Level {userProgress.level} • {userProgress.totalPoints.toLocaleString()} points earned
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Level {userProgress.level} Progress</span>
              <span>{userProgress.experience}/{userProgress.experience + userProgress.experienceToNext} XP</span>
            </div>
            <Progress value={(userProgress.experience / (userProgress.experience + userProgress.experienceToNext)) * 100} className="w-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-lg font-bold text-primary">{userProgress.forecastsCompleted}</div>
              <div className="text-xs text-muted-foreground">Forecasts</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-lg font-bold text-secondary">{userProgress.skillsAnalyzed}</div>
              <div className="text-xs text-muted-foreground">Skills</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-lg font-bold text-accent">{userProgress.streak}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{unlockedAchievements.length}</div>
              <div className="text-xs text-muted-foreground">Badges</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievement Gallery
          </CardTitle>
          <CardDescription>
            {unlockedAchievements.length} of {achievements.length} achievements unlocked
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Unlocked Achievements */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-green-600">Unlocked ({unlockedAchievements.length})</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {unlockedAchievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.id} className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-green-800">{achievement.title}</div>
                      <div className="text-xs text-green-600">{achievement.points} points • {achievement.unlockedDate}</div>
                    </div>
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Locked Achievements */}
          <div className="space-y-3">
            <div className="text-sm font-medium text-muted-foreground">Locked ({lockedAchievements.length})</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lockedAchievements.map((achievement) => {
                const Icon = achievement.icon;
                const CategoryIcon = getCategoryIcon(achievement.category);
                return (
                  <div key={achievement.id} className="flex items-center gap-3 p-3 bg-muted/50 border border-muted rounded-lg opacity-60">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-muted-foreground">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.requirement}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                      <Badge variant="outline" className="text-xs">
                        {achievement.points} pts
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-600" />
            Leaderboard
          </CardTitle>
          <CardDescription>
            See how you rank against other career explorers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium">You</div>
                <div className="text-sm text-muted-foreground">Level {userProgress.level} • {userProgress.totalPoints.toLocaleString()} points</div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">#{Math.floor(Math.random() * 100) + 1}</Badge>
            </div>

            <div className="space-y-2">
              {[
                { name: 'Career Master', level: 15, points: 3500 },
                { name: 'Skill Guru', level: 12, points: 2800 },
                { name: 'Trend Seeker', level: 10, points: 2100 }
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-3 p-2 border rounded-lg">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 2}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{user.name}</div>
                    <div className="text-xs text-muted-foreground">Level {user.level}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{user.points.toLocaleString()} pts</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            Daily Challenges
          </CardTitle>
          <CardDescription>
            Complete daily tasks to earn bonus points
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <div className="font-medium">Run 1 career forecast</div>
                <div className="text-sm text-muted-foreground">+50 points</div>
              </div>
              <Badge className="bg-green-100 text-green-800">Completed</Badge>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <div className="font-medium">Analyze 5 new skills</div>
                <div className="text-sm text-muted-foreground">+75 points • 3/5 completed</div>
              </div>
              <div className="flex gap-2">
                <Progress value={60} className="w-16" />
                <Badge variant="secondary">In Progress</Badge>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Gift className="w-5 h-5 text-purple-600" />
              <div className="flex-1">
                <div className="font-medium">Share a report with friends</div>
                <div className="text-sm text-muted-foreground">+100 points</div>
              </div>
              <Badge variant="outline">Available</Badge>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button>
              <Gift className="w-4 h-4 mr-2" />
              View All Challenges
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AchievementSystem;