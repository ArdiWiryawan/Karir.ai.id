import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import InternalTalentBench from './pages/InternalTalentBench';
import Subscription from './pages/Subscription';
import SkillForecasting from './pages/features/SkillForecasting';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/features/skill-forecasting" element={<SkillForecasting />} />
      <Route path="/internal-talent-bench" element={
        <ProtectedRoute>
          <InternalTalentBench />
        </ProtectedRoute>
      } />
      <Route path="/subscription" element={
        <ProtectedRoute>
          <Subscription />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}