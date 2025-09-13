// list of skills with different names and aliases
export const skillsData = {
  technical: [
    { id: 'javascript', name: 'JavaScript', aliases: ['js', 'javascript', 'ecmascript', 'node'] },
    { id: 'python', name: 'Python', aliases: ['python', 'py', 'django', 'flask'] },
    { id: 'react', name: 'React', aliases: ['react', 'reactjs', 'react.js', 'jsx'] },
    { id: 'html', name: 'HTML', aliases: ['html', 'html5', 'markup', 'web'] },
    { id: 'css', name: 'CSS', aliases: ['css', 'css3', 'styling', 'sass', 'scss'] },
    { id: 'sql', name: 'SQL', aliases: ['sql', 'mysql', 'database', 'postgresql', 'db'] },
    { id: 'nodejs', name: 'Node.js', aliases: ['node', 'nodejs', 'node.js', 'backend'] },
    { id: 'git', name: 'Git', aliases: ['git', 'github', 'version control', 'gitlab'] },
    { id: 'java', name: 'Java', aliases: ['java', 'spring', 'jsp'] },
    { id: 'mongodb', name: 'MongoDB', aliases: ['mongodb', 'mongo', 'nosql'] },
    { id: 'angular', name: 'Angular', aliases: ['angular', 'angularjs', 'typescript'] },
    { id: 'vue', name: 'Vue.js', aliases: ['vue', 'vuejs', 'vue.js'] },
    { id: 'php', name: 'PHP', aliases: ['php', 'laravel', 'wordpress'] },
    { id: 'aws', name: 'AWS', aliases: ['aws', 'amazon web services', 'cloud'] },
    { id: 'docker', name: 'Docker', aliases: ['docker', 'containers', 'kubernetes'] }
  ],
  soft: [
    { id: 'communication', name: 'Communication Skills', aliases: ['communication', 'speaking', 'presentation', 'talking', 'public speaking'] },
    { id: 'leadership', name: 'Leadership', aliases: ['leadership', 'team lead', 'management', 'leading', 'mentor'] },
    { id: 'problem_solving', name: 'Problem Solving', aliases: ['problem solving', 'troubleshooting', 'analytical', 'debugging'] },
    { id: 'teamwork', name: 'Teamwork', aliases: ['teamwork', 'collaboration', 'team player', 'cooperative'] },
    { id: 'time_management', name: 'Time Management', aliases: ['time management', 'organization', 'planning', 'scheduling'] },
    { id: 'creativity', name: 'Creativity', aliases: ['creativity', 'creative thinking', 'innovation', 'artistic'] },
    { id: 'adaptability', name: 'Adaptability', aliases: ['adaptability', 'flexible', 'learning', 'quick learner'] },
    { id: 'critical_thinking', name: 'Critical Thinking', aliases: ['critical thinking', 'analysis', 'logic', 'reasoning'] }
  ],
  industry: [
    { id: 'digital_marketing', name: 'Digital Marketing', aliases: ['marketing', 'digital marketing', 'social media', 'seo', 'advertising'] },
    { id: 'project_management', name: 'Project Management', aliases: ['project management', 'agile', 'scrum', 'pm', 'kanban'] },
    { id: 'data_analysis', name: 'Data Analysis', aliases: ['data analysis', 'analytics', 'excel', 'reporting', 'statistics'] },
    { id: 'graphic_design', name: 'Graphic Design', aliases: ['design', 'graphic design', 'photoshop', 'ui design', 'visual design'] },
    { id: 'content_writing', name: 'Content Writing', aliases: ['writing', 'content writing', 'copywriting', 'blogging'] },
    { id: 'sales', name: 'Sales', aliases: ['sales', 'selling', 'business development', 'customer relations'] },
    { id: 'finance', name: 'Finance', aliases: ['finance', 'accounting', 'financial analysis', 'budgeting'] },
    { id: 'hr', name: 'Human Resources', aliases: ['hr', 'human resources', 'recruitment', 'hiring'] }
  ]
};

// list of career paths with their required skills.
export const careersData = [
  {
    id: 'frontend_developer',
    title: 'Frontend Developer',
    requiredSkills: ['javascript', 'html', 'css', 'react'],
    softSkills: ['problem_solving', 'teamwork'],
    industrySkills: [],
    description: 'Build user-facing web applications and interfaces',
    averageSalary: '₹6-12 LPA',
    growthProspect: 'High'
  },
  {
    id: 'full_stack_developer',
    title: 'Full Stack Developer',
    requiredSkills: ['javascript', 'nodejs', 'sql', 'html', 'css'],
    softSkills: ['problem_solving', 'communication', 'adaptability'],
    industrySkills: [],
    description: 'Work on both frontend and backend development',
    averageSalary: '₹8-16 LPA',
    growthProspect: 'Very High'
  },
  {
    id: 'digital_marketer',
    title: 'Digital Marketing Specialist',
    requiredSkills: [],
    softSkills: ['communication', 'creativity', 'teamwork'],
    industrySkills: ['digital_marketing', 'data_analysis'],
    description: 'Plan and execute digital marketing campaigns',
    averageSalary: '₹4-8 LPA',
    growthProspect: 'High'
  },
  {
    id: 'data_analyst',
    title: 'Data Analyst',
    requiredSkills: ['sql', 'python'],
    softSkills: ['critical_thinking', 'problem_solving'],
    industrySkills: ['data_analysis'],
    description: 'Analyze data to provide business insights',
    averageSalary: '₹5-10 LPA',
    growthProspect: 'Very High'
  },
  {
    id: 'ui_ux_designer',
    title: 'UI/UX Designer',
    requiredSkills: ['html', 'css'],
    softSkills: ['creativity', 'communication', 'critical_thinking'],
    industrySkills: ['graphic_design'],
    description: 'Design user interfaces and user experiences',
    averageSalary: '₹4-9 LPA',
    growthProspect: 'High'
  },
  {
    id: 'project_manager',
    title: 'Project Manager',
    requiredSkills: [],
    softSkills: ['leadership', 'communication', 'time_management'],
    industrySkills: ['project_management'],
    description: 'Lead and manage project teams and deliverables',
    averageSalary: '₹8-15 LPA',
    growthProspect: 'High'
  },
  {
    id: 'content_creator',
    title: 'Content Creator',
    requiredSkills: [],
    softSkills: ['creativity', 'communication', 'adaptability'],
    industrySkills: ['content_writing', 'digital_marketing'],
    description: 'Create engaging content for digital platforms',
    averageSalary: '₹3-7 LPA',
    growthProspect: 'Medium'
  },
  {
    id: 'backend_developer',
    title: 'Backend Developer',
    requiredSkills: ['python', 'nodejs', 'sql', 'mongodb'],
    softSkills: ['problem_solving', 'critical_thinking'],
    industrySkills: [],
    description: 'Build server-side applications and APIs',
    averageSalary: '₹6-14 LPA',
    growthProspect: 'Very High'
  }
];

//  HELPER FUNCTIONS

// tries to find a matching skill from the  list based on what the user typed
const findSkillLocally = (userInput) => {
  const allSkills = [
    ...skillsData.technical,
    ...skillsData.soft,
    ...skillsData.industry
  ];
  
  const cleanInput = userInput.toLowerCase().trim();
  if (!cleanInput) return null;

  return allSkills.find(skill => 
    skill.aliases.some(alias => cleanInput.includes(alias.toLowerCase()))
  );
};

// takes the user's comma-separated skills and matches them to our database
export const processSkillsLocally = (rawSkills) => {
  if (!rawSkills || typeof rawSkills !== 'string') return [];

  const skillList = rawSkills.split(',').map(s => s.trim());
  const matchedSkills = [];

  skillList.forEach(userSkill => {
    const foundSkill = findSkillLocally(userSkill);
    if (foundSkill) {
      const category = Object.keys(skillsData).find(cat => skillsData[cat].some(s => s.id === foundSkill.id));
      matchedSkills.push({
        ...foundSkill,
        category: category || 'unknown',
        originalInput: userSkill,
      });
    }
  });

  // make sure we only have unique skills in the final list
  const uniqueSkills = Array.from(new Map(matchedSkills.map(skill => [skill.id, skill])).values());
  return uniqueSkills;
};

// finds the most relevant careers based on the user's skills
export const getRelevantCareers = (userSkillIds) => {
  if (!userSkillIds || userSkillIds.length === 0) return [];

  return careersData
    .map(career => {
      const allRequiredSkills = [
        ...career.requiredSkills,
        ...career.softSkills,
        ...career.industrySkills
      ];
      
      const matchCount = userSkillIds.filter(skillId => allRequiredSkills.includes(skillId)).length;
      
      return { ...career, matchCount };
    })
    .filter(career => career.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 10); // only return the top 10 matches
};

