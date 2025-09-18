// a list of skills, grouped by type.
// we give each skill a unique id, a display name, and some other names people might use
export const skillsData = {
  technical: [
    { id: 'javascript', name: 'JavaScript', aliases: ['js', 'javascript', 'ecmascript', 'node'], category: 'Programming Language' },
    { id: 'python', name: 'Python', aliases: ['python', 'py', 'django', 'flask'], category: 'Programming Language' },
    { id: 'react', name: 'React', aliases: ['react', 'reactjs', 'react.js', 'jsx'], category: 'Library/Framework' },
    { id: 'html', name: 'HTML', aliases: ['html', 'html5', 'markup', 'web'], category: 'Web Foundation' },
    { id: 'css', name: 'CSS', aliases: ['css', 'css3', 'styling', 'sass', 'scss'], category: 'Web Foundation' },
    { id: 'sql', name: 'SQL', aliases: ['sql', 'mysql', 'database', 'postgresql', 'db'], category: 'Database' },
    { id: 'nodejs', name: 'Node.js', aliases: ['node', 'nodejs', 'node.js', 'backend'], category: 'Backend' },
    { id: 'git', name: 'Git', aliases: ['git', 'github', 'version control', 'gitlab'], category: 'Tools' },
    { id: 'java', name: 'Java', aliases: ['java', 'spring', 'jsp'], category: 'Programming Language' },
    { id: 'mongodb', name: 'MongoDB', aliases: ['mongodb', 'mongo', 'nosql'], category: 'Database' },
    { id: 'angular', name: 'Angular', aliases: ['angular', 'angularjs', 'typescript'], category: 'Library/Framework' },
    { id: 'vue', name: 'Vue.js', aliases: ['vue', 'vuejs', 'vue.js'], category: 'Library/Framework' },
    { id: 'php', name: 'PHP', aliases: ['php', 'laravel', 'wordpress'], category: 'Programming Language' },
    { id: 'aws', name: 'AWS', aliases: ['aws', 'amazon web services', 'cloud'], category: 'Cloud' },
    { id: 'docker', name: 'Docker', aliases: ['docker', 'containers', 'kubernetes'], category: 'Tools' }
  ],
  soft: [
    { id: 'communication', name: 'Communication', aliases: ['communication', 'speaking', 'presentation', 'talking', 'public speaking'], category: 'Soft Skill' },
    { id: 'leadership', name: 'Leadership', aliases: ['leadership', 'team lead', 'management', 'leading', 'mentor'], category: 'Soft Skill' },
    { id: 'problem_solving', name: 'Problem Solving', aliases: ['problem solving', 'troubleshooting', 'analytical', 'debugging'], category: 'Soft Skill' },
    { id: 'teamwork', name: 'Teamwork', aliases: ['teamwork', 'collaboration', 'team player', 'cooperative'], category: 'Soft Skill' },
    { id: 'time_management', name: 'Time Management', aliases: ['time management', 'organization', 'planning', 'scheduling'], category: 'Soft Skill' },
    { id: 'creativity', name: 'Creativity', aliases: ['creativity', 'creative thinking', 'innovation', 'artistic'], category: 'Soft Skill' },
    { id: 'adaptability', name: 'Adaptability', aliases: ['adaptability', 'flexible', 'learning', 'quick learner'], category: 'Soft Skill' },
    { id: 'critical_thinking', name: 'Critical Thinking', aliases: ['critical thinking', 'analysis', 'logic', 'reasoning'], category: 'Soft Skill' }
  ],
  industry: [
    { id: 'digital_marketing', name: 'Digital Marketing', aliases: ['marketing', 'digital marketing', 'social media', 'seo', 'advertising'], category: 'Business' },
    { id: 'project_management', name: 'Project Management', aliases: ['project management', 'agile', 'scrum', 'pm', 'kanban'], category: 'Business' },
    { id: 'data_analysis', name: 'Data Analysis', aliases: ['data analysis', 'analytics', 'excel', 'reporting', 'statistics'], category: 'Business' },
    { id: 'graphic_design', name: 'Graphic Design', aliases: ['design', 'graphic design', 'photoshop', 'ui design', 'visual design'], category: 'Creative' },
    { id: 'content_writing', name: 'Content Writing', aliases: ['writing', 'content writing', 'copywriting', 'blogging'], category: 'Creative' },
    { id: 'sales', name: 'Sales', aliases: ['sales', 'selling', 'business development', 'customer relations'], category: 'Business' },
    { id: 'finance', name: 'Finance', aliases: ['finance', 'accounting', 'financial analysis', 'budgeting'], category: 'Business' },
    { id: 'hr', name: 'Human Resources', aliases: ['hr', 'human resources', 'recruitment', 'hiring'], category: 'Business' }
  ]
};

// a list of different career paths and the skills 
export const careersData = [
  {
    id: 'frontend_developer',
    title: 'Frontend Developer',
    description: 'Build user-facing web applications and interfaces.',
    skillRequirements: [
      { skillId: 'javascript', level: 'Intermediate' },
      { skillId: 'react', level: 'Intermediate' },
      { skillId: 'html', level: 'Advanced' },
      { skillId: 'css', level: 'Advanced' },
      { skillId: 'problem_solving', level: 'Advanced' },
      { skillId: 'teamwork', level: 'Intermediate' },
    ],
    relatedCareers: ['full_stack_developer', 'ui_ux_designer'],
    averageSalary: '₹6-12 LPA',
    growthProspect: 'High'
  },
  {
    id: 'full_stack_developer',
    title: 'Full Stack Developer',
    description: 'Work on both the frontend and backend of websites and applications.',
    skillRequirements: [
      { skillId: 'javascript', level: 'Advanced' },
      { skillId: 'nodejs', level: 'Intermediate' },
      { skillId: 'sql', level: 'Intermediate' },
      { skillId: 'html', level: 'Intermediate' },
      { skillId: 'css', level: 'Intermediate' },
      { skillId: 'problem_solving', level: 'Advanced' },
      { skillId: 'communication', level: 'Intermediate' },
    ],
    relatedCareers: ['frontend_developer', 'backend_developer'],
    averageSalary: '₹8-16 LPA',
    growthProspect: 'Very High'
  },
  {
    id: 'digital_marketer',
    title: 'Digital Marketing Specialist',
    description: 'Plan and execute digital marketing campaigns to promote brands.',
    skillRequirements: [
        { skillId: 'digital_marketing', level: 'Advanced' },
        { skillId: 'data_analysis', level: 'Intermediate' },
        { skillId: 'communication', level: 'Advanced' },
        { skillId: 'creativity', level: 'Advanced' },
    ],
    relatedCareers: ['content_creator', 'sales'],
    averageSalary: '₹4-8 LPA',
    growthProspect: 'High'
  },
  {
    id: 'data_analyst',
    title: 'Data Analyst',
    description: 'Analyze data to find useful business insights and trends.',
    skillRequirements: [
        { skillId: 'sql', level: 'Advanced' },
        { skillId: 'python', level: 'Intermediate' },
        { skillId: 'data_analysis', level: 'Advanced' },
        { skillId: 'critical_thinking', level: 'Advanced' },
        { skillId: 'problem_solving', level: 'Intermediate' },
    ],
    relatedCareers: ['project_manager', 'finance'],
    averageSalary: '₹5-10 LPA',
    growthProspect: 'Very High'
  },
  {
    id: 'ui_ux_designer',
    title: 'UI/UX Designer',
    description: 'Design user interfaces and user experiences for digital products.',
    skillRequirements: [
        { skillId: 'graphic_design', level: 'Advanced' },
        { skillId: 'html', level: 'Beginner' },
        { skillId: 'css', level: 'Beginner' },
        { skillId: 'creativity', level: 'Advanced' },
        { skillId: 'communication', level: 'Intermediate' },
        { skillId: 'critical_thinking', level: 'Intermediate' },
    ],
    relatedCareers: ['frontend_developer', 'graphic_design'],
    averageSalary: '₹4-9 LPA',
    growthProspect: 'High'
  },
  {
    id: 'project_manager',
    title: 'Project Manager',
    description: 'Lead and manage project teams to ensure projects are completed on time and within budget.',
    skillRequirements: [
        { skillId: 'project_management', level: 'Advanced' },
        { skillId: 'leadership', level: 'Advanced' },
        { skillId: 'communication', level: 'Advanced' },
        { skillId: 'time_management', level: 'Advanced' },
    ],
    relatedCareers: ['data_analyst', 'hr'],
    averageSalary: '₹8-15 LPA',
    growthProspect: 'High'
  },
  {
    id: 'content_creator',
    title: 'Content Creator',
    description: 'Create engaging content like articles, videos, and social media posts for digital platforms.',
    skillRequirements: [
        { skillId: 'content_writing', level: 'Advanced' },
        { skillId: 'digital_marketing', level: 'Intermediate' },
        { skillId: 'creativity', level: 'Advanced' },
        { skillId: 'communication', level: 'Intermediate' },
    ],
    relatedCareers: ['digital_marketer', 'graphic_design'],
    averageSalary: '₹3-7 LPA',
    growthProspect: 'Medium'
  },
  {
    id: 'backend_developer',
    title: 'Backend Developer',
    description: 'Build and maintain the server-side logic and databases for web applications.',
    skillRequirements: [
        { skillId: 'python', level: 'Intermediate' },
        { skillId: 'nodejs', level: 'Intermediate' },
        { skillId: 'sql', level: 'Advanced' },
        { skillId: 'mongodb', level: 'Intermediate' },
        { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['full_stack_developer', 'aws'],
    averageSalary: '₹6-14 LPA',
    growthProspect: 'Very High'
  }
];

//  helper functions

// this function tries to find a matching skill from our list based on what the user typed
const findSkillLocally = (userInput) => {
  const allSkills = [
    ...skillsData.technical,
    ...skillsData.soft,
    ...skillsData.industry
  ];
  
  const cleanInput = userInput.toLowerCase().trim();
  if (!cleanInput) return null;

  // check if the user's input matches any skill's name or other names (aliases)
  return allSkills.find(skill => 
    skill.aliases.some(alias => cleanInput.includes(alias.toLowerCase()))
  );
};

// this function takes the user's comma-separated skills and matches them to our database
export const processSkillsLocally = (rawSkills) => {
  if (!rawSkills || typeof rawSkills !== 'string') return [];

  const skillList = rawSkills.split(',').map(s => s.trim());
  const matchedSkills = [];

  skillList.forEach(userSkill => {
    const foundSkill = findSkillLocally(userSkill);
    if (foundSkill) {
      matchedSkills.push({
        ...foundSkill,
        originalInput: userSkill,
      });
    }
  });

  // make sure we only have unique skills in the final list
  const uniqueSkills = Array.from(new Map(matchedSkills.map(skill => [skill.id, skill])).values());
  return uniqueSkills;
};

// this function finds the most relevant careers based on the user's skills
export const getRelevantCareers = (userSkillIds) => {
  if (!userSkillIds || userSkillIds.length === 0) return [];

  return careersData
    .map(career => {
      // get all the skills needed for a career
      const allRequiredSkillIds = career.skillRequirements.map(req => req.skillId);
      
      // count how many of the user's skills match the career's required skills
      const matchCount = userSkillIds.filter(skillId => allRequiredSkillIds.includes(skillId)).length;
      
      return { ...career, matchCount };
    })
    .filter(career => career.matchCount > 0) // only keep careers that have at least one match
    .sort((a, b) => b.matchCount - a.matchCount) // sort careers by the best match
    .slice(0, 10); // only return the top 10 matches
};

