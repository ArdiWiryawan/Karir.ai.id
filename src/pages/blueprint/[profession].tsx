import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface BlueprintData {
  prediction: string;
  // Add other fields if the API returns more data
}

export default function SkillBlueprintPage() {
  // Router for getting profession from URL
  const { profession } = useParams<{profession: string}>();

  // State management
  const [blueprintMarkdown, setBlueprintMarkdown] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch blueprint data
  const fetchBlueprint = async (professionName: string) => {
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

      const data: BlueprintData = await response.json();
      setBlueprintMarkdown(data.prediction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching the blueprint');
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch data when profession changes
  useEffect(() => {
    if (profession) {
      fetchBlueprint(profession);
    }
  }, [profession]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
          <p className="text-lg font-medium">Menganalisis Blueprint Karir...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
          <button 
            onClick={() => profession && fetchBlueprint(profession)}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  // Render blueprint content
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Blueprint Karir: {profession}
      </h1>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>
          {blueprintMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}