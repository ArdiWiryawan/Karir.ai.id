import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TestSkillBlueprint = () => {
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profession.trim()) {
      navigate(`/skill-blueprint?profession=${encodeURIComponent(profession)}`);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Test Skill Blueprint</CardTitle>
          <CardDescription>
            Enter a profession to see the AI-generated career blueprint
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="profession" className="text-sm font-medium">
                Profession
              </label>
              <Input
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="e.g., Data Scientist, UX Designer, AI Engineer"
              />
            </div>
            <Button type="submit" className="w-full">
              View Career Blueprint
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestSkillBlueprint;