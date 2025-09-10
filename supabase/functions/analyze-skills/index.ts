import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { skills, profession, experience } = await req.json();
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const prompt = `Sebagai AI expert dalam analisis karier masa depan, analisis profesi "${profession}" dengan pengalaman ${experience} tahun dan skill: ${skills.join(', ')}.

Berikan analisis dalam format JSON dengan struktur berikut:
{
  "aiImpactScore": number (0-100, semakin tinggi semakin berisiko tergantikan AI),
  "riskLevel": "Low" | "Medium" | "High",
  "futureOutlook": {
    "nextYear": "deskripsi singkat",
    "next3Years": "deskripsi singkat", 
    "next5Years": "deskripsi singkat"
  },
  "recommendations": {
    "skillsToLearn": [array skill yang harus dipelajari],
    "skillsToImprove": [array skill yang harus ditingkatkan],
    "aiProofSkills": [array skill yang tahan AI]
  },
  "transitionPaths": [
    {
      "targetRole": "nama role",
      "difficulty": "Easy" | "Medium" | "Hard",
      "timeframe": "dalam bulan",
      "requiredSkills": [array skill yang dibutuhkan]
    }
  ],
  "marketData": {
    "currentDemand": "High" | "Medium" | "Low",
    "futureDemand": "High" | "Medium" | "Low", 
    "salaryTrend": "Increasing" | "Stable" | "Decreasing"
  }
}

Berikan analisis yang akurat berdasarkan tren pasar kerja Indonesia dan perkembangan AI terkini.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          {
            role: 'system',
            content: 'Anda adalah AI expert dalam analisis karier masa depan yang fokus pada pasar kerja Indonesia dan dampak AI terhadap profesi.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_completion_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;
    
    // Parse the JSON response
    let parsedAnalysis;
    try {
      parsedAnalysis = JSON.parse(analysis);
    } catch (parseError) {
      console.error('Failed to parse AI response:', analysis);
      // Return a fallback response if parsing fails
      parsedAnalysis = {
        aiImpactScore: 50,
        riskLevel: "Medium",
        futureOutlook: {
          nextYear: "Perubahan bertahap dalam industri",
          next3Years: "Adaptasi teknologi AI mulai terlihat",
          next5Years: "Transformasi signifikan di bidang ini"
        },
        recommendations: {
          skillsToLearn: ["Digital literacy", "AI collaboration"],
          skillsToImprove: skills,
          aiProofSkills: ["Critical thinking", "Creativity", "Empathy"]
        },
        transitionPaths: [
          {
            targetRole: "AI-Enhanced " + profession,
            difficulty: "Medium",
            timeframe: "12-18 bulan",
            requiredSkills: ["AI tools", "Digital collaboration"]
          }
        ],
        marketData: {
          currentDemand: "Medium",
          futureDemand: "Medium",
          salaryTrend: "Stable"
        }
      };
    }

    return new Response(JSON.stringify(parsedAnalysis), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in analyze-skills function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to analyze skills',
        details: error.message 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});