import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CareerRoadmap from '@/components/CareerRoadmap';
import BlueprintView from '@/components/BlueprintView';
import { useLocation } from 'react-router-dom';

interface RoadmapSection {
  id: string;
  title: string;
  description?: string;
  items: RoadmapItem[];
}

interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  status?: 'required' | 'recommended' | 'optional';
  resourceUrl?: string;
  isCompleted?: boolean;
  subItems?: RoadmapItem[];
}

export default function RoadmapPage() {
  const { profession } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [roadmapData, setRoadmapData] = useState<RoadmapSection[]>([]);
  const [blueprintFromState, setBlueprintFromState] = useState<any | null>(null);
  const [showInteractive, setShowInteractive] = useState(false);

  // If the blueprint was passed via navigation state from SkillBlueprintPage, use it directly
  useEffect(() => {
    const state: any = (location && (location as any).state) || {};
    if (state.blueprint && Array.isArray(state.blueprint.phases)) {
      const sectionsFromBlueprint: RoadmapSection[] = state.blueprint.phases.map((phase: any) => ({
        id: phase.id || phase.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: phase.title,
        description: phase.description || '',
        items: Array.isArray(phase.skills) ? phase.skills.map((s: any) => ({
          id: s.id || s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          title: s.title,
          description: s.description || '',
          status: s.status || 'optional',
          resourceUrl: s.resources && s.resources[0] ? s.resources[0].url : s.resourceUrl || undefined,
          isCompleted: false,
          subItems: []
        })) : []
      }));

      setRoadmapData(sectionsFromBlueprint);
      setBlueprintFromState(state.blueprint);
      setIsLoading(false);
      return;
    }
  }, [location]);

  useEffect(() => {
    if (profession) {
      fetchRoadmap(profession);
    }
  }, [profession]);

  const fetchRoadmap = async (professionName: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/.netlify/functions/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userQuery: professionName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // If the function returns a structured blueprint object (with phases/skills), map it
      if (data.prediction && Array.isArray(data.prediction.phases)) {
        const sectionsFromBlueprint: RoadmapSection[] = data.prediction.phases.map((phase: any) => ({
          id: phase.id || phase.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          title: phase.title || 'Phase',
          description: phase.description || '',
          items: Array.isArray(phase.skills)
            ? phase.skills.map((s: any) => ({
                id: s.id || s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                title: s.title,
                description: s.description || '',
                status: s.status || 'optional',
                resourceUrl: s.resources && s.resources[0] ? s.resources[0].url : s.resourceUrl || undefined,
                isCompleted: false,
                subItems: s.subSkills && Array.isArray(s.subSkills) ? s.subSkills.map((sub: any) => ({
                  id: sub.id || sub.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  title: sub.title,
                  description: sub.description || '',
                  status: sub.status || 'optional',
                })) : []
              }))
            : []
        }));

        setRoadmapData(sectionsFromBlueprint);
      } else {
        // Fallback: transform markdown/string into default sections
        const sections = transformToRoadmapSections(data.prediction);
        setRoadmapData(sections);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load roadmap');
    } finally {
      setIsLoading(false);
    }
  };

  // Transform markdown content into structured roadmap sections
  const transformToRoadmapSections = (markdownContent: string): RoadmapSection[] => {
    // Parse markdown content and create sections with unique IDs
    const createId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const sections: RoadmapSection[] = [
      {
        id: 'fundamental-skills',
        title: "Fundamental Skills",
        items: [
          {
            id: 'programming-languages',
            title: "Programming Languages",
            status: "required",
            subItems: [
              { 
                id: 'python',
                title: "Python",
                description: "Essential for data analysis and machine learning",
                status: "required",
                resourceUrl: "https://www.python.org/about/gettingstarted/"
              },
              {
                id: 'sql',
                title: "SQL",
                description: "Database querying and data manipulation",
                status: "required",
                resourceUrl: "https://www.w3schools.com/sql/default.asp"
              },
              {
                id: 'r-lang',
                title: "R",
                description: "Statistical computing and graphics",
                status: "recommended",
                resourceUrl: "https://www.r-project.org/about.html"
              }
            ]
          },
          {
            id: 'mathematics-statistics',
            title: "Mathematics & Statistics",
            status: "required",
            subItems: [
              { 
                id: 'linear-algebra',
                title: "Linear Algebra",
                status: "required",
                description: "Vectors, matrices, and linear transformations",
                resourceUrl: "https://www.khanacademy.org/math/linear-algebra"
              },
              {
                id: 'calculus',
                title: "Calculus",
                status: "required",
                description: "Derivatives, integrals, and optimization",
                resourceUrl: "https://www.khanacademy.org/math/calculus-1"
              },
              {
                id: 'probability-statistics',
                title: "Probability & Statistics",
                status: "required",
                description: "Statistical inference and probability theory",
                resourceUrl: "https://www.khanacademy.org/math/statistics-probability"
              }
            ]
          }
        ]
      },
      {
        id: 'advanced-skills',
        title: "Advanced Skills",
        items: [
          {
            id: 'machine-learning',
            title: "Machine Learning",
            status: "required",
            subItems: [
              {
                id: 'supervised-learning',
                title: "Supervised Learning",
                status: "required",
                description: "Classification and regression techniques",
                resourceUrl: "https://scikit-learn.org/stable/supervised_learning.html"
              },
              {
                id: 'unsupervised-learning',
                title: "Unsupervised Learning",
                status: "required",
                description: "Clustering and dimensionality reduction",
                resourceUrl: "https://scikit-learn.org/stable/unsupervised_learning.html"
              },
              {
                id: 'deep-learning',
                title: "Deep Learning",
                status: "recommended",
                description: "Neural networks and deep architectures",
                resourceUrl: "https://www.deeplearning.ai/"
              }
            ]
          },
          {
            id: 'tools-frameworks',
            title: "Tools & Frameworks",
            status: "recommended",
            subItems: [
              {
                id: 'tensorflow-pytorch',
                title: "TensorFlow/PyTorch",
                status: "recommended",
                description: "Deep learning frameworks",
                resourceUrl: "https://www.tensorflow.org/learn"
              },
              {
                id: 'scikit-learn',
                title: "Scikit-learn",
                status: "required",
                description: "Machine learning library",
                resourceUrl: "https://scikit-learn.org/stable/getting_started.html"
              },
              {
                id: 'pandas-numpy',
                title: "Pandas & NumPy",
                status: "required",
                description: "Data manipulation and numerical computing",
                resourceUrl: "https://pandas.pydata.org/docs/getting_started/index.html"
              }
            ]
          }
        ]
      },
      {
        id: 'soft-skills',
        title: "Soft Skills & Business Knowledge",
        items: [
          {
            id: 'communication',
            title: "Communication",
            status: "required",
            description: "Ability to explain complex concepts to non-technical stakeholders",
            resourceUrl: "https://www.coursera.org/learn/communication-in-the-workplace"
          },
          {
            id: 'business-acumen',
            title: "Business Acumen",
            status: "recommended",
            description: "Understanding business objectives and KPIs",
            resourceUrl: "https://www.coursera.org/learn/business-acumen"
          }
        ]
      }
    ];

    return sections;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
          <p className="text-lg font-medium">Loading Career Roadmap...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button
            onClick={() => profession && fetchRoadmap(profession)}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* If we have a blueprint available, show the full blueprint view */}
      {blueprintFromState ? (
        <div>
          <BlueprintView blueprint={blueprintFromState} onOpenInteractive={() => setShowInteractive(true)} />
          {showInteractive && (
            <div className="mt-8">
              <CareerRoadmap profession={profession || 'Career'} sections={roadmapData} />
            </div>
          )}
        </div>
      ) : (
        <CareerRoadmap profession={profession || 'Career'} sections={roadmapData} />
      )}
    </div>
  );
}