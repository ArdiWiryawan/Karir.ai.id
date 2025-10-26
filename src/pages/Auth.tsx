import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Github, Chrome, Twitter, ArrowLeft, CheckCircle, Shield, Zap } from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [step, setStep] = useState<1 | 2>(1); // Progressive onboarding step
  const [mode, setMode] = useState<'signin' | 'signup' | 'recovery'>('signin');
  const [onboardingStep, setOnboardingStep] = useState<'auth' | 'profile' | 'preferences'>('auth');
  const [userRole, setUserRole] = useState<'student' | 'hr' | 'career-switcher' | ''>('');
  const [experience, setExperience] = useState('');
  const [industry, setIndustry] = useState('');
  const { signIn, signUp, signInWithProvider, resetPassword, updatePassword, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }

    // Check for recovery mode in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'recovery') {
      setMode('recovery');
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Step 1: Validate email & password only
    if (step === 1) {
      if (email && password) {
        setStep(2);
      }
      return;
    }

    // Step 2: Create account
    setIsLoading(true);

    const { error } = await signUp(email, password, fullName);
    
    if (error) {
      toast({
        title: "Pendaftaran gagal",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setEmail('');
      setPassword('');
      setFullName('');
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      });
    }
    
    setIsLoading(false);
  };

  const handleSocialLogin = async (provider: 'google' | 'github' | 'twitter') => {
    setIsLoading(true);

    const { error } = await signInWithProvider(provider);

    if (error) {
      toast({
        title: "Social login failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      // Redirect to onboarding after successful social login
      setOnboardingStep('profile');
      toast({
        title: "Welcome!",
        description: "Let's complete your profile to get started.",
      });
    }

    setIsLoading(false);
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await resetPassword(email);

    if (error) {
      toast({
        title: "Password reset failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password reset email sent",
        description: "Please check your email for password reset instructions.",
      });
      setMode('signin');
    }

    setIsLoading(false);
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await updatePassword(password);

    if (error) {
      toast({
        title: "Password update failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password updated",
        description: "Your password has been successfully updated.",
      });
      setMode('signin');
    }

    setIsLoading(false);
  };

  // Profile Setup Component
  const ProfileSetup = () => (
    <Card className="border-border/50 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Complete Your Profile
        </CardTitle>
        <CardDescription>
          Help us personalize your career insights
        </CardDescription>
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm">2</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user-role">I am a...</Label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'student', label: '🎓 Student/Fresh Graduate', desc: 'Looking for first job or internship' },
                { value: 'hr', label: '👥 HR/Recruiter', desc: 'Planning hiring and talent strategy' },
                { value: 'career-switcher', label: '🔄 Career Switcher', desc: 'Exploring new career paths' }
              ].map((role) => (
                <div
                  key={role.value}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    userRole === role.value
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-border/80 hover:bg-muted/50'
                  }`}
                  onClick={() => setUserRole(role.value as any)}
                >
                  <div className="font-medium">{role.label}</div>
                  <div className="text-sm text-muted-foreground">{role.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
            >
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years (Entry Level)</option>
              <option value="2-5">2-5 years (Mid Level)</option>
              <option value="6-10">6-10 years (Senior)</option>
              <option value="10+">10+ years (Expert)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry Interest</Label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
            >
              <option value="">Select industry</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setOnboardingStep('auth')}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={() => setOnboardingStep('preferences')}
            className="flex-1"
            disabled={!userRole || !experience || !industry}
          >
            Continue
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          🔒 Your data is encrypted and only used for personalization — retained 30 days.
        </div>
      </CardContent>
    </Card>
  );

  // Preferences Setup Component
  const PreferencesSetup = () => (
    <Card className="border-border/50 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Almost Done!
        </CardTitle>
        <CardDescription>
          Set your preferences for better recommendations
        </CardDescription>
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold">Profile Summary</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {userRole === 'student' && 'Student/Fresh Graduate'}
              {userRole === 'hr' && 'HR/Recruiter'}
              {userRole === 'career-switcher' && 'Career Switcher'} •
              {experience} experience • {industry} industry
            </p>
          </div>

          <div className="space-y-3">
            <Label>Notification Preferences</Label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-input text-primary focus:ring-ring" />
                <span className="text-sm">Weekly career insights and skill updates</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-input text-primary focus:ring-ring" />
                <span className="text-sm">New job opportunities in my field</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-input text-primary focus:ring-ring" />
                <span className="text-sm">Monthly industry reports and trends</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setOnboardingStep('profile')}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={() => {
              // Save preferences and redirect to main app
              navigate('/');
              toast({
                title: "Welcome to Karir AI!",
                description: "Your profile is set up. Let's explore your career insights!",
              });
            }}
            className="flex-1"
          >
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  if (onboardingStep !== 'auth') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>

          {onboardingStep === 'profile' && <ProfileSetup />}
          {onboardingStep === 'preferences' && <PreferencesSetup />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
        
        <Card className="border-border/50 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Karir AI
            </CardTitle>
            <CardDescription>
              Create your account or sign in to continue
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue={mode} className="w-full">
              <TabsList className={mode === 'recovery' ? "grid w-full grid-cols-1" : "grid w-full grid-cols-2"}>
                <TabsTrigger value="signin" onClick={() => setMode('signin')}>Sign In</TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setMode('signup')}>Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="space-y-4">
                <form onSubmit={handleSignIn} className="space-y-4" role="form" aria-labelledby="signin-title">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-describedby="signin-email-description"
                      autoComplete="email"
                    />
                    <div id="signin-email-description" className="sr-only">
                      Enter your registered email address
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      aria-describedby="signin-password-description"
                      autoComplete="current-password"
                    />
                    <div id="signin-password-description" className="sr-only">
                      Enter your account password
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                    aria-describedby="signin-button-description"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                  <div id="signin-button-description" className="sr-only">
                    Sign in to your account with email and password
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="button"
                      onClick={() => setMode('recovery')}
                      className="text-sm text-muted-foreground hover:text-foreground underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4">
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`h-2 w-16 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
                  <div className={`h-2 w-16 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                </div>
                
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="recovery" className="space-y-4">
                <form onSubmit={handlePasswordReset} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recovery-email">Email</Label>
                    <Input
                      id="recovery-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Email"}
                  </Button>

                  <div className="text-center mt-4">
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="text-sm text-muted-foreground hover:text-foreground underline"
                    >
                      Back to Sign In
                    </button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6">
              <Separator className="my-4" />
              <p className="text-center text-sm text-muted-foreground mb-4">
                Or continue with
              </p>
              
              <div className="grid grid-cols-3 gap-3" role="group" aria-label="Social login options">
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin('google')}
                  disabled={isLoading}
                  className="p-2 min-h-[44px] min-w-[44px]"
                  aria-label="Sign in with Google"
                  title="Sign in with Google"
                >
                  <Chrome className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin('github')}
                  disabled={isLoading}
                  className="p-2 min-h-[44px] min-w-[44px]"
                  aria-label="Sign in with GitHub"
                  title="Sign in with GitHub"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin('twitter')}
                  disabled={isLoading}
                  className="p-2 min-h-[44px] min-w-[44px]"
                  aria-label="Sign in with Twitter"
                  title="Sign in with Twitter"
                >
                  <Twitter className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;