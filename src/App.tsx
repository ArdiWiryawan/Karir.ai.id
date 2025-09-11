import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import SuccessStories from "./pages/SuccessStories";
import SkillForecasting from "./pages/features/SkillForecasting";
import CVBuilder from "./pages/features/CVBuilder";
import InterviewCoach from "./pages/features/InterviewCoach";
import FutureJobProjects from "./pages/features/FutureJobProjects";
import AICoPilot from "./pages/features/AICoPilot";
import TransitionPaths from "./pages/features/TransitionPaths";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/features/skill-forecasting" element={<SkillForecasting />} />
            <Route path="/features/cv-builder" element={<CVBuilder />} />
            <Route path="/features/interview-coach" element={<InterviewCoach />} />
            <Route path="/features/future-job-projects" element={<FutureJobProjects />} />
            <Route path="/features/ai-copilot" element={<AICoPilot />} />
            <Route path="/features/transition-paths" element={<TransitionPaths />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
