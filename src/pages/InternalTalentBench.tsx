import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Filter,
  Search,
  Building,
  UserCheck,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  skills: string[];
  skillMatch: number;
  readiness: 'ready-now' | 'ready-with-training' | 'at-risk';
  performance: number;
  tenure: string;
  location: string;
}

interface SkillGap {
  skill: string;
  currentCount: number;
  requiredCount: number;
  gap: number;
  priority: 'high' | 'medium' | 'low';
}

const InternalTalentBench = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: '1',
      name: 'Ahmad Santoso',
      role: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js', 'Python'],
      skillMatch: 85,
      readiness: 'ready-now',
      performance: 92,
      tenure: '3 years',
      location: 'Jakarta'
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      role: 'Data Analyst',
      department: 'Analytics',
      skills: ['SQL', 'Python', 'Tableau', 'Excel'],
      skillMatch: 78,
      readiness: 'ready-with-training',
      performance: 88,
      tenure: '2 years',
      location: 'Bandung'
    },
    {
      id: '3',
      name: 'Budi Setiawan',
      role: 'Marketing Manager',
      department: 'Marketing',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
      skillMatch: 65,
      readiness: 'at-risk',
      performance: 75,
      tenure: '5 years',
      location: 'Surabaya'
    }
  ]);

  const [skillGaps, setSkillGaps] = useState<SkillGap[]>([
    {
      skill: 'Machine Learning',
      currentCount: 3,
      requiredCount: 8,
      gap: 5,
      priority: 'high'
    },
    {
      skill: 'Data Science',
      currentCount: 5,
      requiredCount: 10,
      gap: 5,
      priority: 'high'
    },
    {
      skill: 'Cloud Architecture',
      currentCount: 2,
      requiredCount: 6,
      gap: 4,
      priority: 'medium'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [readinessFilter, setReadinessFilter] = useState('all');

  const { toast } = useToast();

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || emp.department === departmentFilter;
    const matchesReadiness = readinessFilter === 'all' || emp.readiness === readinessFilter;

    return matchesSearch && matchesDepartment && matchesReadiness;
  });

  const getReadinessColor = (readiness: string) => {
    switch (readiness) {
      case 'ready-now': return 'bg-green-100 text-green-800 border-green-200';
      case 'ready-with-training': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'at-risk': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getReadinessIcon = (readiness: string) => {
    switch (readiness) {
      case 'ready-now': return CheckCircle;
      case 'ready-with-training': return Clock;
      case 'at-risk': return AlertTriangle;
      default: return Users;
    }
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "Upload Started",
        description: "Processing employee data. This may take a few minutes.",
      });

      // Simulate processing
      setTimeout(() => {
        toast({
          title: "Upload Complete",
          description: `${employees.length} employee records have been processed.`,
        });
      }, 2000);
    }
  };

  const exportReport = () => {
    const dataStr = JSON.stringify({ employees, skillGaps }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `internal-talent-bench-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    toast({
      title: "Export Complete",
      description: "Talent bench report has been downloaded.",
    });
  };

  const totalCostSavings = skillGaps.reduce((sum, gap) => sum + (gap.gap * 50000), 0); // Assuming $50k per external hire

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Internal Talent Bench</h1>
            <p className="text-muted-foreground">
              Map internal skills to future needs and identify mobility opportunities
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Internal Match Rate</CardTitle>
                <Target className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+5%</span> from last quarter
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ready Now</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  Employees ready for promotion
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Gaps</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14</div>
                <p className="text-xs text-muted-foreground">
                  Critical skills missing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Rp {totalCostSavings.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  Potential savings vs external hire
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="employees" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="employees">Employee Mapping</TabsTrigger>
              <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
              <TabsTrigger value="mobility">Mobility Paths</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="employees" className="space-y-6">
              {/* Upload Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Employee Data
                  </CardTitle>
                  <CardDescription>
                    Import employee skills and performance data from HRIS or CSV
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept=".csv,.xlsx"
                        onChange={handleCSVUpload}
                        className="hidden"
                        id="employee-upload"
                      />
                      <Label htmlFor="employee-upload" className="cursor-pointer">
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">Click to upload employee data</p>
                          <p className="text-xs text-muted-foreground">CSV or Excel format</p>
                        </div>
                      </Label>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Building className="w-4 h-4 mr-2" />
                        Connect HRIS
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="search">Search</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="search"
                          placeholder="Search employees..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Department</Label>
                      <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="All departments" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="Engineering">Engineering</SelectItem>
                          <SelectItem value="Analytics">Analytics</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Sales">Sales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Readiness</Label>
                      <Select value={readinessFilter} onValueChange={setReadinessFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="All readiness levels" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Levels</SelectItem>
                          <SelectItem value="ready-now">Ready Now</SelectItem>
                          <SelectItem value="ready-with-training">Ready with Training</SelectItem>
                          <SelectItem value="at-risk">At Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Employee Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Employee Talent Mapping
                  </CardTitle>
                  <CardDescription>
                    {filteredEmployees.length} employees matching current filters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Skill Match</TableHead>
                        <TableHead>Readiness</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEmployees.map((employee) => {
                        const ReadinessIcon = getReadinessIcon(employee.readiness);
                        return (
                          <TableRow key={employee.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{employee.name}</div>
                                <div className="text-sm text-muted-foreground">{employee.location} • {employee.tenure}</div>
                              </div>
                            </TableCell>
                            <TableCell>{employee.role}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={employee.skillMatch} className="w-16" />
                                <span className="text-sm">{employee.skillMatch}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getReadinessColor(employee.readiness)} variant="outline">
                                <ReadinessIcon className="w-3 h-3 mr-1" />
                                {employee.readiness.replace('-', ' ')}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={employee.performance} className="w-16" />
                                <span className="text-sm">{employee.performance}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  View Profile
                                </Button>
                                <Button variant="outline" size="sm">
                                  Suggest Moves
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Critical Skill Gaps
                  </CardTitle>
                  <CardDescription>
                    Skills that need immediate attention for future business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillGaps.map((gap, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">{gap.skill}</h3>
                            <p className="text-sm text-muted-foreground">
                              {gap.currentCount} current • {gap.requiredCount} needed
                            </p>
                          </div>
                          <div className="text-right">
                            <Badge className={gap.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                              {gap.priority} priority
                            </Badge>
                            <div className="text-sm text-muted-foreground mt-1">
                              Gap: {gap.gap} people
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current Coverage</span>
                            <span>{Math.round((gap.currentCount / gap.requiredCount) * 100)}%</span>
                          </div>
                          <Progress value={(gap.currentCount / gap.requiredCount) * 100} className="w-full" />
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm">
                            Find Candidates
                          </Button>
                          <Button variant="outline" size="sm">
                            Plan Training
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobility" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Internal Mobility Opportunities
                  </CardTitle>
                  <CardDescription>
                    Recommended role transitions and career paths
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <UserCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Mobility Recommendations</h3>
                    <p className="text-muted-foreground mb-4">
                      AI-powered suggestions for internal role transitions and upskilling paths
                    </p>
                    <Button>Generate Recommendations</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Talent Analytics Dashboard
                  </CardTitle>
                  <CardDescription>
                    Comprehensive insights into your talent pipeline
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      Detailed workforce planning and succession analytics
                    </p>
                    <Button>View Full Dashboard</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Export Actions */}
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportReport}>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button>
                Schedule Update
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InternalTalentBench;