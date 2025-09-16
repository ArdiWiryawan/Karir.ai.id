import { Routes, Route, Navigate } from 'react-router-dom';
import SkillBlueprintPage from './pages/SkillBlueprintPage';
import NotFound from './pages/NotFound';
// Import other pages as needed

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blueprint/data-scientist" />} />
      <Route path="/blueprint/:profession" element={<SkillBlueprintPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}