import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Clock,
  Target,
  CheckCircle,
  PlayCircle,
  ExternalLink,
  Calendar,
  Award,
  Users,
  Star,
  Download
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface SkillGap {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  priority: 'high' | 'medium' | 'low';
  timeToComplete: string;
}

interface LearningModule {
  id: string;
  title: string;
  type: 'course' | 'project' | 'practice' | 'assessment';
  provider: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: 'free' | 'paid';
  rating: number;
  url: string;
  completed: boolean;
}

interface PlaybookTask {
  id: string;
  title: string;
  description: string;
  type: 'learning' | 'practice' | 'networking' | 'application';
  duration: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  dueDate?: string;
  resources: string[];
}

const SkillPlaybook = ({ skillGap }: { skillGap: SkillGap }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [currentTab, setCurrentTab] = useState('overview');

  const { toast } = useToast();

  const learningModules: LearningModule[] = [
    {
      id: '1',
      title: 'Python for Data Science',
      type: 'course',
      provider: 'Coursera',
      duration: '40 hours',
      difficulty: 'intermediate',
      cost: 'paid',
      rating: 4.8,
      url: 'https://coursera.org/python-data-science',
      completed: false
    },
    {
      id: '2',
      title: 'Machine Learning Fundamentals',
      type: 'course',
      provider: 'edX',
      duration: '60 hours',
      difficulty: 'advanced',
      cost: 'free',
      rating: 4.9,
      url: 'https://edx.org/ml-fundamentals',
      completed: false
    },
    {
      id: '3',
      title: 'Data Analysis Portfolio Project',
      type: 'project',
      provider: 'GitHub',
      duration: '20 hours',
      difficulty: 'intermediate',
      cost: 'free',
      rating: 4.7,
      url: 'https://github.com/data-portfolio',
      completed: false
    }
  ];

  const playbookTasks: PlaybookTask[] = [
    {
      id: '1',
      title: 'Complete Python fundamentals course',
      description: 'Finish the Python for Data Science course on Coursera',
      type: 'learning',
      duration: '2 weeks',
      priority: 'high',
      completed: false,
      resources: ['Coursera Python Course', 'Python Documentation']
    },
    {
      id: '2',
      title: 'Build a data analysis project',
      description: 'Create a portfolio project analyzing real dataset',
      type: 'practice',
      duration: '1 week',
      priority: 'high',
      completed: false,
      resources: ['Kaggle Datasets', 'GitHub Portfolio Template']
    },
    {
      id: '3',
      title: 'Join data science community',
      description: 'Participate in online forums and networking events',
      type: 'networking',
      duration: 'Ongoing',
      priority: 'medium',
      completed: false,
      resources: ['Reddit r/datascience', 'Meetup.com Data Events']
    },
    {
      id: '4',
      title: 'Apply for junior data analyst roles',
      description: 'Submit applications to 5 relevant positions',
      type: 'application',
      duration: '1 month',
      priority: 'medium',
      completed: false,
      dueDate: '2025-02-15',
      resources: ['LinkedIn Job Search', 'Indeed', 'Company Career Pages']
    }
  ];

  const handleTaskComplete = (taskId: string) => {
    setCompletedTasks(prev => [...prev, taskId]);
    const task = playbookTasks.find(t => t.id === taskId);
    if (task) {
      toast({
        title: "Task Completed! 🎉",
        description: `${task.title} has been marked as complete.`,
      });
    }
  };

  const handleModuleStart = (module: LearningModule) => {
    window.open(module.url, '_blank');
    toast({
      title: "Module Started",
      description: `Opening ${module.title} in ${module.provider}`,
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'learning': return BookOpen;
      case 'practice': return Target;
      case 'networking': return Users;
      case 'application': return PlayCircle;
      default: return CheckCircle;
    }
  };

  const totalTasks = playbookTasks.length;
  const completedCount = completedTasks.length;
  const progressPercentage = (completedCount / totalTasks) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <BookOpen className="w-4 h-4 mr-2" />
          Generate Playbook
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Skill Development Playbook
          </DialogTitle>
          <DialogDescription>
            Personalized learning path to master {skillGap.skill}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="learning">Learning Modules</TabsTrigger>
            <TabsTrigger value="tasks">Action Plan</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Skill Gap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{skillGap.skill}</div>
                  <div className="text-sm text-muted-foreground">
                    Level {skillGap.currentLevel} → {skillGap.targetLevel}
                  </div>
                  <Badge className={getPriorityColor(skillGap.priority)}>
                    {skillGap.priority} priority
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{skillGap.timeToComplete}</div>
                  <div className="text-sm text-muted-foreground">
                    Estimated completion
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Start: Today</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{completedCount}/{totalTasks}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Tasks completed
                  </div>
                  <Progress value={progressPercentage} className="w-full" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Learning Path</CardTitle>
                <CardDescription>
                  Structured approach to achieve your skill goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Foundation Building</div>
                      <div className="text-sm text-muted-foreground">Learn core concepts and fundamentals</div>
                    </div>
                    <Badge>2 weeks</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Practical Application</div>
                      <div className="text-sm text-muted-foreground">Build projects and gain hands-on experience</div>
                    </div>
                    <Badge variant="secondary">3 weeks</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Advanced Topics</div>
                      <div className="text-sm text-muted-foreground">Master advanced concepts and specializations</div>
                    </div>
                    <Badge variant="secondary">4 weeks</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid gap-4">
              {learningModules.map((module) => (
                <Card key={module.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{module.title}</h3>
                          <Badge variant={module.type === 'course' ? 'default' : 'secondary'}>
                            {module.type}
                          </Badge>
                          <Badge variant={module.cost === 'free' ? 'outline' : 'default'}>
                            {module.cost}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {module.rating}
                          </span>
                          <span>{module.provider}</span>
                          <Badge variant="outline" className="text-xs">
                            {module.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive course covering essential concepts and practical applications.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleModuleStart(module)}
                          className="flex items-center gap-2"
                        >
                          <PlayCircle className="w-4 h-4" />
                          Start Learning
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <div className="space-y-4">
              {playbookTasks.map((task) => {
                const TypeIcon = getTypeIcon(task.type);
                const isCompleted = completedTasks.includes(task.id);

                return (
                  <Card key={task.id} className={`transition-all ${isCompleted ? 'opacity-75' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={isCompleted}
                          onCheckedChange={() => handleTaskComplete(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <TypeIcon className="w-4 h-4 text-primary" />
                            <h3 className={`font-medium ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </h3>
                            <Badge className={getPriorityColor(task.priority)} variant="secondary">
                              {task.priority}
                            </Badge>
                          </div>
                          <p className={`text-sm mb-3 ${isCompleted ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                            {task.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {task.duration}
                            </span>
                            {task.dueDate && (
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                Due: {task.dueDate}
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {task.resources.map((resource, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {resource}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {isCompleted && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Export Playbook
              </Button>
              <Button variant="outline" className="flex-1">
                Schedule Reminders
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>
                  Track your advancement through the playbook
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{completedCount} of {totalTasks} tasks</span>
                  </div>
                  <Progress value={progressPercentage} className="w-full" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{skillGap.timeToComplete}</div>
                    <div className="text-sm text-muted-foreground">Est. Time Left</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Recent Achievements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Course Completed</div>
                        <div className="text-xs text-muted-foreground">Python for Data Science - 2 days ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Project Submitted</div>
                        <div className="text-xs text-muted-foreground">Data Analysis Portfolio - 1 week ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SkillPlaybook;