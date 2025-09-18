import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// this defines the structure of the json we want back from the model
// it helps ensure the response is consistent
const getBasePromptStructure = () => ({
  summary: "a brief, encouraging summary (2-4 sentences).",
  strengths: ["a key strength based on skills/interests.", "another strength."],
  growthAreas: ["a constructive area for growth.", "another growth area."],
  careerAnalysis: [{
    title: "a relevant career title.",
    reasoning: "a short explanation of why this career is a good match based on the user's profile.",
    pros: ["a reason this career fits the user's specific skills (e.g., 'your creativity skill is a great asset for this role').", "another personalized reason."],
    cons: ["a potential challenge for the user based on their profile (e.g., 'this role is less hands-on, which might not align with your interest in building things').", "another personalized challenge."],
    skillGaps: ["an essential skill the user is missing.", "another skill to develop."],
    suggestedLearningPath: ["a concrete, actionable first step.", "a second step.", "a third step."],
    jobOutlook: "a brief, one-sentence overview of the job market.",
    dayInTheLife: "a brief paragraph describing typical daily tasks.",
    salaryRange: "an estimated yearly salary range in inr for an entry-level position.",
    suggestedCertifications: [{ name: "a relevant certification name.", issuer: "the issuing organization." }],
    suggestedCourses: [{ platform: "coursera/udemy", courseName: "a specific, relevant course name." }],
    suggestedProjects: ["a practical, hands-on project idea.", "another portfolio project idea."]
  }]
});

// these are different prompts for different types of users
const prompts = {
  highSchool: (data) => `
    you are a friendly and encouraging high school career counselor in india. your goal is to help a student explore their future possibilities without pressure.

    a high school student has shared the following with you:
    - their skills: they have mentioned skills like ${JSON.stringify(data.matchedSkills.map(s => s.name))}.
    - what they enjoy: their interests include "${data.interests}".
    - some career ideas: based on their skills, we think these careers might be interesting for them: ${JSON.stringify(data.relevantCareers.map(c => c.title))}.

    your task:
    return a json object.
    critical rule for 'suggestedcertifications': you must suggest at least one relevant, official certificate. if none seem to exist, find the most closely related one. do not leave this field empty.
    critical rule for 'pros' and 'cons': they must be directly linked to the user's provided skills and interests. do not give generic, impersonal points.
    
    good response for certs: [{ "name": "meta front-end developer professional certificate", "issuer": "meta on coursera" }]

    json structure: ${JSON.stringify(getBasePromptStructure())}
  `,
  college: (data) => `
    you are a university career services advisor in india, focused on helping students become job-ready.

    a college student is looking for practical advice. here is their profile:
    - their skills: they have experience with ${JSON.stringify(data.matchedSkills.map(s => s.name))}.
    - what they enjoy: their interests include "${data.interests}".
    - potential career paths: our system has identified these as strong matches: ${JSON.stringify(data.relevantCareers.map(c => c.title))}.

    your task:
    return a json object.
    critical rule for 'suggestedcertifications': you must suggest at least one relevant, official certificate. if none seem to exist, find the most closely related one. do not leave this field empty.
    critical rule for 'pros' and 'cons': they must be directly linked to the user's provided skills and interests. do not give generic, impersonal points.

    good response for certs: [{ "name": "google advanced data analytics professional certificate", "issuer": "google" }]

    json structure: ${JSON.stringify(getBasePromptStructure())}
  `,
  jobSeeker: (data) => `
    you are an expert executive career coach in india with 15 years of experience. your client is a professional looking to advance or pivot their career.

    a professional is seeking guidance. here is their information:
    - their skills: they have proficiency in ${JSON.stringify(data.matchedSkills.map(s => s.name))}.
    - their passions: their interests are "${data.interests}".
    - their experience level: they have "${data.experience}" of professional experience.
    - relevant careers: we have identified these potential career moves: ${JSON.stringify(data.relevantCareers.map(c => c.title))}.

    your task:
    return a json object.
    critical rule for 'suggestedcertifications': you must suggest at least one relevant, official certificate. if none seem to exist, find the most closely related one. do not leave this field empty.
    critical rule for 'pros' and 'cons': they must be directly linked to the user's provided skills and interests. do not give generic, impersonal points.
    
    good response for certs: [{ "name": "aws certified solutions architect - associate", "issuer": "amazon web services" }]

    json structure: ${JSON.stringify(getBasePromptStructure())}
  `
};

// this function calls the generative model with the users data
export const getAiSkillAnalysis = async (data) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" }, // we tell it to give us json back
  });

  const promptGenerator = prompts[data.persona];
  if (!promptGenerator) {
    return { error: true, message: "invalid persona selected." };
  }

  const prompt = promptGenerator(data);

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const parsedResult = JSON.parse(responseText);

    // this section does a final cleanup of the data from the model
    if (parsedResult.careerAnalysis) {
      parsedResult.careerAnalysis.forEach(career => {
        if (!career.suggestedCertifications || !Array.isArray(career.suggestedCertifications)) {
          career.suggestedCertifications = []; // ensure it is always an array
        }
      });
    }

    return parsedResult;
  } catch (error) {
    console.error("error calling the analysis model:", error, { prompt });
    return {
      error: true,
      message: "there was an issue communicating with our analysis service. please try again later."
    };
  }
};