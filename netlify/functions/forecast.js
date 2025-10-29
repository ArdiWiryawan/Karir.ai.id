// Netlify function to simulate the AI career blueprint API
exports.handler = async (event) => {
  // Parse the incoming request
  const body = JSON.parse(event.body);
  const { userQuery } = body;

  // Simulate API processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate a simulated markdown response based on the user query
  const generateBlueprint = (profession) => {
    // Helper function to create a unique ID
    const createId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Generate blueprint data structure based on profession
    const blueprint = {
      profession,
      meta: {
        summary: `A comprehensive career path for becoming a ${profession}`,
        salary: {
          junior: "Rp 90jt",
          senior: "Rp 300jt+",
        },
        growth: "High",
        aiRisk: {
          percentage: 28,
          level: "Low",
          description: "This role is relatively safe from AI automation in the near future.",
        },
      },
      phases: [
        {
          id: createId("foundation"),
          title: "Foundation Phase",
          description: "Build your fundamental knowledge and skills",
          duration: "1-2 years",
          skills: [
            {
              id: createId("theoretical-foundations"),
              title: "Theoretical Foundations",
              type: "hard",
              status: "required",
              description: "Core concepts and principles of the field",
              details: profession === "Data Scientist" ? [
                "Statistics and Probability",
                "Linear Algebra",
                "Python Programming",
                "SQL and Database Concepts"
              ] : [
                "HTML5 & CSS3",
                "JavaScript Fundamentals",
                "Web Technologies",
                "Browser APIs"
              ],
              resources: [
                {
                  title: "Official Documentation",
                  url: "https://example.com/docs",
                }
              ]
            },
            {
              id: createId("problem-solving"),
              title: "Problem Solving",
              type: "soft",
              status: "required",
              description: "Analytical thinking and problem-solving abilities",
              details: [
                "Critical Thinking",
                "Analytical Reasoning",
                "Systematic Approach to Problems",
                "Debugging Methodology"
              ]
            }
          ]
        },
        {
          id: createId("advanced-concepts"),
          title: "Advanced Concepts",
          description: "Master professional tools and techniques",
          duration: "2-3 years",
          skills: [
            {
              id: createId("professional-tools"),
              title: "Professional Tools & Frameworks",
              type: "hard",
              status: "required",
              description: "Industry-standard tools and frameworks",
              details: profession === "Data Scientist" ? [
                "Machine Learning Libraries (scikit-learn, TensorFlow)",
                "Data Processing Tools (Pandas, NumPy)",
                "Visualization Libraries (Matplotlib, Seaborn)",
                "Version Control (Git)"
              ] : [
                "Modern JavaScript Frameworks (React, Vue)",
                "Build Tools (Webpack, Vite)",
                "Version Control (Git)",
                "CSS Frameworks (Tailwind, Bootstrap)"
              ],
              resources: [
                {
                  title: "Tools Overview",
                  url: "https://example.com/tools",
                }
              ]
            },
            {
              id: createId("team-collaboration"),
              title: "Team Collaboration",
              type: "soft",
              status: "recommended",
              description: "Working effectively in teams",
              details: [
                "Communication Skills",
                "Project Management",
                "Code Review Practices",
                "Documentation"
              ]
            }
          ]
        },
        {
          id: createId("specialization"),
          title: "Specialization",
          description: "Develop expertise in specific areas",
          duration: "3-5 years",
          skills: [
            {
              id: createId("advanced-techniques"),
              title: "Advanced Techniques",
              type: "hard",
              status: "optional",
              description: "Specialized technical skills",
              details: profession === "Data Scientist" ? [
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "MLOps and Model Deployment"
              ] : [
                "Performance Optimization",
                "Security Best Practices",
                "Microfrontends",
                "Web Assembly"
              ],
              resources: [
                {
                  title: "Advanced Topics",
                  url: "https://example.com/advanced",
                }
              ]
            },
            {
              id: createId("leadership"),
              title: "Leadership & Mentoring",
              type: "soft",
              status: "recommended",
              description: "Leading teams and mentoring others",
              details: [
                "Team Leadership",
                "Strategic Planning",
                "Mentoring Junior Developers",
                "Project Planning"
              ]
            }
          ]
        }
      ]
    };

    return blueprint;
  };

  // Return the response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prediction: generateBlueprint(userQuery || 'Data Scientist'),
      timestamp: new Date().toISOString()
    }),
  };
};