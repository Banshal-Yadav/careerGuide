# SkillSync: Your AI Career Coach

SkillSync is an all-in-one web platform designed to solve the career confusion crisis affecting many Indian graduates. It acts as a personal AI Career Coach, leveraging the power of Google's Gemini 2.5 Flash to provide users with a clear, actionable path from education to a successful career.

## The Problem

While India produces millions of graduates annually, the reality is sobering. A significant majority of students face a three-fold crisis:

- **Career Confusion:** 70% of students are unsure of which career to pursue after school.
- **Limited Awareness:** 93% of students are only aware of seven career options out of more than 250 available paths.
- **The Employability Gap:** Less than half of all graduates are considered employable in their fields.

SkillSync was built to directly address these challenges by providing clarity, direction, and a practical plan.

## Key Features

- **Personalized AI-Powered Assessments:** A comprehensive skills assessment powered by **Google's Gemini 2.5 Flash** analyzes a user's unique skills, interests, and experience level to generate a detailed career roadmap.
- **Targeted Career Matching:** Matches a user's profile against an internal database of over **250 diverse career paths**, revealing high-demand roles and opportunities they may not have known existed.
- **In-Depth Profile Analysis:** Delivers a comprehensive report that identifies the user's key strengths and provides actionable insights on areas for professional growth.
- **Smart Resume Builder:** An integrated tool to create professional, ATS-friendly resumes, with the ability to pre-fill data based on assessment results and save multiple versions.
- **Customized Action Plans:** Generates concrete next steps for career advancement, including suggestions for relevant certifications, online courses, and practical portfolio projects.
- **Dynamic User Dashboard:** A personal profile page where users can view their complete assessment history and manage their saved resumes.
- **Interactive Career Exploration:** Allows users to explore various career paths and understand their specific skill requirements, average salary, and growth prospects.

## Tech Stack

- **Frontend:** React, React Router
- **Backend & Database:** Firebase (Authentication, Firestore)
- **AI/ML:** Google's Gemini 2.5 Flash API
- **Styling:** CSS with custom variables for theming
- **Deployment:** Vite

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/Banshal-Yadav/careerGuide.git
   ```

2. Install NPM packages
   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root of your project and add your Firebase and Gemini API keys:
   ```env
   VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
   VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

## Future Enhancements

We are continuously working to improve SkillSync. Here are the features we plan to add soon:

- **AI-Powered Interview Preparation:** Practice mock interviews with an AI that asks role-specific questions and provides instant, actionable feedback.
- **Customizable Career Roadmaps:** Allow users to track their progress, set personal deadlines, and dynamically update their learning path as they acquire new skills.
- **Centralized Learning & Resource Hub:** A curated library of top-rated courses and articles tailored to a user's skill gaps, with community recommendations.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## Contact

Project Link: [https://github.com/Banshal-Yadav/careerGuide](https://github.com/Banshal-Yadav/careerGuide)

## Acknowledgements

- [Google Gemini API](https://ai.google.dev/)
- [Firebase](https://firebase.google.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
