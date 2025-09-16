import React from 'react';
import { SkillBlueprint } from '@/types/blueprint';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface BlueprintViewProps {
  blueprint: SkillBlueprint;
  onOpenInteractive?: () => void;
}

export default function BlueprintView({ blueprint, onOpenInteractive }: BlueprintViewProps) {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      {/* Header Card */}
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blueprint Karir: {blueprint.profession}</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Profesi</td>
                <td className="px-4 py-2 text-gray-600">{blueprint.profession}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Ringkasan AI</td>
                <td className="px-4 py-2 text-gray-600">{blueprint.meta.summary}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Gaji (Tahunan)</td>
                <td className="px-4 py-2 text-gray-600">{blueprint.meta.salary.junior} (Junior) - {blueprint.meta.salary.senior} (Senior)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold text-gray-700">Pertumbuhan</td>
                <td className="px-4 py-2 text-gray-600">{blueprint.meta.growth}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-700">Risiko AI</td>
                <td className="px-4 py-2 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{blueprint.meta.aiRisk.percentage}%</span>
                    <div className="w-48">
                      <Progress value={blueprint.meta.aiRisk.percentage} />
                    </div>
                    <span className="text-muted-foreground">{blueprint.meta.aiRisk.level}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{blueprint.meta.aiRisk.description}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Roadmap Phases */}
      {blueprint.phases.map((phase) => (
        <div key={phase.id} className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800">▼ {phase.title}</h2>
            <p className="text-gray-600 mt-1">{phase.description}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-gray-700">Ikon</th>
                  <th className="px-4 py-2 text-gray-700">Keterampilan</th>
                  <th className="px-4 py-2 text-gray-700">Rincian & Konsep Kunci</th>
                </tr>
              </thead>
              <tbody>
                {phase.skills.map((skill) => (
                  <tr key={skill.id} className="border-t">
                    <td className="px-4 py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${skill.type === 'hard' ? 'bg-primary/10 text-primary' : 'bg-purple-100 text-purple-800'}`}>
                        {skill.type === 'hard' ? '🛠️' : '🧠'}
                      </span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-800">{skill.title}</td>
                    <td className="px-4 py-2 text-gray-600">
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {skill.details && typeof skill.details === 'string' ? (
                          <li>{skill.details}</li>
                        ) : Array.isArray(skill.details) ? (
                          skill.details.map((d, i) => <li key={i}>{d}</li>)
                        ) : null}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
