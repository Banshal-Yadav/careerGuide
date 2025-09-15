import { GoogleGenerativeAI } from "@google/generative-ai";

// get api key from .env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// gets a detailed career analysis from the gemini model.
export const getAiSkillAnalysis = async (matchedSkills, relevantCareers, interests, education) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  });

  // prompt for the gemini
  const prompt = `
    You are an expert career advisor with 15 years of experience coaching students and professionals in India. 
    Your advice is realistic, insightful, and encouraging. Analyze the user data below to provide a personalized 
    career roadmap.

    **User Profile:**
    - Education Level: "${education}"
    - Stated Skills: ${JSON.stringify(matchedSkills.map(s => s.name))}
    - Stated Interests: "${interests}"
    - Pre-filtered Career Matches: ${JSON.stringify(relevantCareers.map(c => c.title))}

    **Your Task:**
    Return a single, clean JSON object. Do not include any other text. The JSON object must have the following structure:

    {
      "summary": "A brief, encouraging summary (2-4 sentences) that acknowledges the user's current profile and sets a positive tone for their career journey.",
      "strengths": [
        "A bullet point identifying a key strength based on the combination of their skills and interests.",
        "Another bullet point about a different strength."
      ],
      "growthAreas": [
        "A constructive bullet point about an area where the user could grow.",
        "Another bullet point suggesting a potential growth area."
      ],
      "careerAnalysis": [
        {
          "title": "The first career title from the pre-filtered list.",
          "matchScore": "A percentage score (0-100) of how well the user's profile aligns with this career. Be realistic.",
          "pros": [
            "A bullet point on why this career is a strong fit based on their skills/interests.",
            "Another reason this career is a good match."
          ],
          "cons": [
            "A potential challenge or reason this career might be difficult for the user.",
            "Another potential drawback to consider."
          ],
          "skillGaps": [
            "An essential skill the user is missing for this path.",
            "Another crucial skill to develop."
          ],
          "suggestedLearningPath": "A concrete, actionable first step. For example: 'Start with a foundational Python for data science course on Coursera or freeCodeCamp.'",
          "jobOutlook": "A brief, one-sentence overview of the job market for this role (e.g., 'High demand with steady growth expected over the next 5 years.')",
          
          // ---- new fields added below ----
          "dayInTheLife": "A brief paragraph describing the typical daily tasks and responsibilities for this role.",
          "salaryRange": "An estimated yearly salary range in INR (e.g., '₹4,00,000 - ₹8,00,000') for an entry-level position in India.",
          "suggestedCertifications": [
            "A relevant and popular certification for this career.",
            "Another useful certification."
          ]
        }
      ]
    }

    **Important Rules:**
    1. Analyze the top 2-3 most relevant careers from the list provided.
    2. The analysis must be balanced. Don't just praise; provide constructive feedback and realistic cons.
    3. The 'suggestedLearningPath' must be a specific, beginner-friendly first step.
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return {
      error: true,
      message: "There was an issue communicating with the AI. Please try again later."
    };
  }
};