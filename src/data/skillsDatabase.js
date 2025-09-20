// A consolidated list of skills, grouped by type.
export const skillsData = {
  technical: [
    // Programming Languages
    { id: 'javascript', name: 'JavaScript', aliases: ['js', 'javascript', 'ecmascript'], category: 'Programming Language' },
    { id: 'python', name: 'Python', aliases: ['python', 'py', 'django', 'flask'], category: 'Programming Language' },
    { id: 'java', name: 'Java', aliases: ['java', 'spring', 'jsp'], category: 'Programming Language' },
    { id: 'typescript', name: 'TypeScript', aliases: ['typescript', 'ts'], category: 'Programming Language' },
    { id: 'csharp', name: 'C#', aliases: ['c#', 'c-sharp', '.net'], category: 'Programming Language' },
    { id: 'cpp', name: 'C++', aliases: ['c++', 'cpp'], category: 'Programming Language' },
    { id: 'php', name: 'PHP', aliases: ['php', 'laravel', 'wordpress'], category: 'Programming Language' },
    { id: 'r_lang', name: 'R', aliases: ['r', 'r language', 'r programming'], category: 'Programming Language' },
    
    // Web Foundations & Frameworks
    { id: 'html', name: 'HTML', aliases: ['html', 'html5', 'markup'], category: 'Web Foundation' },
    { id: 'css', name: 'CSS', aliases: ['css', 'css3', 'styling', 'sass', 'scss'], category: 'Web Foundation' },
    { id: 'react', name: 'React', aliases: ['react', 'reactjs', 'react.js', 'jsx'], category: 'Library/Framework' },
    { id: 'angular', name: 'Angular', aliases: ['angular', 'angularjs'], category: 'Library/Framework' },
    { id: 'vue', name: 'Vue.js', aliases: ['vue', 'vuejs', 'vue.js'], category: 'Library/Framework' },
    { id: 'nodejs', name: 'Node.js', aliases: ['node', 'nodejs', 'node.js', 'backend'], category: 'Backend' },

    // Databases
    { id: 'sql', name: 'SQL', aliases: ['sql', 'mysql', 'database', 'postgresql', 'db'], category: 'Database' },
    { id: 'mongodb', name: 'MongoDB', aliases: ['mongodb', 'mongo', 'nosql'], category: 'Database' },

    // AI & Machine Learning
    { id: 'machine_learning', name: 'Machine Learning', aliases: ['machine learning', 'ml'], category: 'AI & Machine Learning' },
    { id: 'deep_learning', name: 'Deep Learning', aliases: ['deep learning', 'neural networks'], category: 'AI & Machine Learning' },
    { id: 'tensorflow', name: 'TensorFlow', aliases: ['tensorflow', 'tf', 'keras'], category: 'AI & Machine Learning' },
    { id: 'pytorch', name: 'PyTorch', aliases: ['pytorch', 'torch'], category: 'AI & Machine Learning' },
    { id: 'nlp', name: 'Natural Language Processing', aliases: ['nlp', 'natural language processing', 'hugging face', 'spacy'], category: 'AI & Machine Learning' },
    { id: 'computer_vision', name: 'Computer Vision', aliases: ['computer vision', 'cv', 'opencv'], category: 'AI & Machine Learning' },
    { id: 'llm_development', name: 'LLM Development', aliases: ['llm', 'large language model'], category: 'AI & Machine Learning' },
    { id: 'robotics', name: 'Robotics', aliases: ['robotics', 'ros', 'sensor integration'], category: 'AI & Machine Learning' },
    
    // Data & Analytics
    { id: 'data_visualization', name: 'Data Visualization', aliases: ['data visualization', 'tableau', 'power bi'], category: 'Data & Analytics' },
    { id: 'pandas', name: 'Pandas/NumPy', aliases: ['pandas', 'numpy'], category: 'Data & Analytics' },

    // Cloud, DevOps & Tools
    { id: 'git', name: 'Git', aliases: ['git', 'github', 'version control', 'gitlab'], category: 'Tools' },
    { id: 'docker', name: 'Docker', aliases: ['docker', 'containers'], category: 'Tools' },
    { id: 'aws', name: 'AWS', aliases: ['aws', 'amazon web services'], category: 'Cloud' },
    { id: 'gcp', name: 'Google Cloud Platform', aliases: ['gcp', 'google cloud'], category: 'Cloud' },
    { id: 'azure', name: 'Microsoft Azure', aliases: ['azure', 'microsoft azure'], category: 'Cloud' },
    { id: 'kubernetes', name: 'Kubernetes', aliases: ['kubernetes', 'k8s'], category: 'Cloud' },

    // Cybersecurity
    { id: 'network_security', name: 'Network Security', aliases: ['network security', 'firewalls', 'intrusion detection'], category: 'Cybersecurity' },
    { id: 'ethical_hacking', name: 'Ethical Hacking', aliases: ['ethical hacking', 'penetration testing', 'pen testing'], category: 'Cybersecurity' },
    
    // Design
    { id: 'ux_ui_design', name: 'UX/UI Design', aliases: ['ux', 'ui', 'user experience', 'user interface', 'figma', 'adobe xd'], category: 'Creative' },

    // Finance Tech
    { id: 'algorithmic_trading', name: 'Algorithmic Trading', aliases: ['algo trading', 'quantitative trading'], category: 'Finance Tech' },
    { id: 'financial_engineering', name: 'Financial Engineering', aliases: ['quant finance', 'derivatives pricing'], category: 'Finance Tech' },
  ],
  soft: [
    { id: 'communication', name: 'Communication', aliases: ['communication', 'speaking', 'presentation', 'public speaking'], category: 'Soft Skill' },
    { id: 'leadership', name: 'Leadership', aliases: ['leadership', 'team lead', 'management', 'leading', 'mentor'], category: 'Soft Skill' },
    { id: 'problem_solving', name: 'Problem Solving', aliases: ['problem solving', 'troubleshooting', 'analytical', 'debugging'], category: 'Soft Skill' },
    { id: 'teamwork', name: 'Teamwork', aliases: ['teamwork', 'collaboration', 'team player', 'cooperative'], category: 'Soft Skill' },
    { id: 'time_management', name: 'Time Management', aliases: ['time management', 'organization', 'planning', 'scheduling'], category: 'Soft Skill' },
    { id: 'creativity', name: 'Creativity', aliases: ['creativity', 'creative thinking', 'innovation', 'artistic'], category: 'Soft Skill' },
    { id: 'adaptability', name: 'Adaptability', aliases: ['adaptability', 'flexible', 'learning', 'quick learner'], category: 'Soft Skill' },
    { id: 'critical_thinking', name: 'Critical Thinking', aliases: ['critical thinking', 'analysis', 'logic', 'reasoning'], category: 'Soft Skill' },
    { id: 'stakeholder_management', name: 'Stakeholder Management', aliases: ['stakeholder management', 'client communication'], category: 'Soft Skill' },
    { id: 'negotiation', name: 'Negotiation', aliases: ['negotiation', 'persuasion', 'influencing'], category: 'Soft Skill' },
    { id: 'people_management', name: 'People Management', aliases: ['people management', 'team building', 'hr'], category: 'Soft Skill' },
    { id: 'risk_management_soft', name: 'Risk Management', aliases: ['risk management', 'decision making under uncertainty'], category: 'Soft Skill' },
  ],
  industry: [
    // Business & Management
    { id: 'digital_marketing', name: 'Digital Marketing', aliases: ['marketing', 'digital marketing', 'seo', 'sem', 'social media'], category: 'Business' },
    { id: 'project_management', name: 'Project Management', aliases: ['project management', 'agile', 'scrum', 'pm', 'kanban'], category: 'Business' },
    { id: 'product_management', name: 'Product Management', aliases: ['product management', 'product strategy', 'product roadmap'], category: 'Business' },
    { id: 'data_analysis', name: 'Data Analysis', aliases: ['data analysis', 'analytics', 'excel', 'reporting', 'statistics'], category: 'Business' },
    { id: 'sales', name: 'Sales', aliases: ['sales', 'selling', 'business development', 'customer relations'], category: 'Business' },
    { id: 'hr', name: 'Human Resources', aliases: ['hr', 'human resources', 'recruitment', 'hiring'], category: 'Business' },
    { id: 'regulatory_compliance', name: 'Regulatory Compliance', aliases: ['regulatory compliance', 'legal', 'governance'], category: 'Business' },
    { id: 'sustainability_esg', name: 'Sustainability/ESG', aliases: ['sustainability', 'esg', 'environmental social governance'], category: 'Business' },
    { id: 'supply_chain_management', name: 'Supply Chain Management', aliases: ['supply chain', 'logistics', 'procurement'], category: 'Business' },
    
    // Creative
    { id: 'graphic_design', name: 'Graphic Design', aliases: ['design', 'graphic design', 'photoshop', 'visual design'], category: 'Creative' },
    { id: 'content_writing', name: 'Content Writing', aliases: ['writing', 'content writing', 'copywriting', 'blogging'], category: 'Creative' },

    // Finance
    { id: 'finance', name: 'Finance', aliases: ['finance', 'accounting', 'financial analysis', 'budgeting'], category: 'Business' },
    { id: 'financial_modeling', name: 'Financial Modeling', aliases: ['financial modeling', 'excel modeling', 'dcf', 'risk assessment'], category: 'Finance' },
    { id: 'market_analysis', name: 'Market Analysis', aliases: ['market analysis', 'technical analysis', 'fundamental analysis'], category: 'Finance' },
    { id: 'derivatives', name: 'Derivatives', aliases: ['options', 'futures', 'swaps'], category: 'Finance' },

    // Healthcare
    { id: 'healthcare_management', name: 'Healthcare Management', aliases: ['healthcare administration', 'hospital operations', 'healthcare policy'], category: 'Healthcare' },
    { id: 'clinical_knowledge', name: 'Clinical Knowledge', aliases: ['clinical skills', 'patient care', 'medical records'], category: 'Healthcare' },
    
    // Other
    { id: 'ai_literacy', name: 'AI Literacy', aliases: ['ai literacy', 'ai fundamentals', 'artificial intelligence'], category: 'AI & Machine Learning' },
  ]
};

// A consolidated list of different career paths and their required skills.
export const careersData = [
  // --- Technical & AI Careers ---
  {
    id: 'ai_research_scientist', title: 'AI Research Scientist',
    description: 'Conducts research to advance the field of AI, developing new algorithms and models.',
    skillRequirements: [
      { skillId: 'machine_learning', level: 'Advanced' }, { skillId: 'deep_learning', level: 'Advanced' },
      { skillId: 'python', level: 'Advanced' }, { skillId: 'tensorflow', level: 'Intermediate' },
      { skillId: 'critical_thinking', level: 'Advanced' },
    ],
    relatedCareers: ['machine_learning_engineer', 'data_scientist'],
    averageSalary: '₹18-45 LPA', growthProspect: 'Very High'
  },
  {
    id: 'machine_learning_engineer', title: 'Machine Learning Engineer',
    description: 'Designs, builds, and deploys machine learning systems to solve real-world problems.',
    skillRequirements: [
      { skillId: 'machine_learning', level: 'Advanced' }, { skillId: 'python', level: 'Advanced' },
      { skillId: 'sql', level: 'Intermediate' }, { skillId: 'docker', level: 'Intermediate' },
      { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['ai_research_scientist', 'data_scientist'],
    averageSalary: '₹10-25 LPA', growthProspect: 'Very High'
  },
  {
    id: 'data_scientist', title: 'Data Scientist',
    description: 'Uses data to build predictive models and answer complex business questions.',
    skillRequirements: [
      { skillId: 'python', level: 'Advanced' }, { skillId: 'sql', level: 'Advanced' },
      { skillId: 'machine_learning', level: 'Intermediate' }, { skillId: 'data_visualization', level: 'Intermediate' },
      { skillId: 'critical_thinking', level: 'Advanced' },
    ],
    relatedCareers: ['data_analyst', 'machine_learning_engineer'],
    averageSalary: '₹12-30 LPA', growthProspect: 'Very High'
  },
  {
    id: 'data_analyst', title: 'Data Analyst',
    description: 'Analyze data to find useful business insights and trends.',
    skillRequirements: [
        { skillId: 'sql', level: 'Advanced' }, { skillId: 'python', level: 'Intermediate' },
        { skillId: 'data_analysis', level: 'Advanced' }, { skillId: 'critical_thinking', level: 'Advanced' },
        { skillId: 'problem_solving', level: 'Intermediate' },
    ],
    relatedCareers: ['data_scientist', 'business_intelligence_developer'],
    averageSalary: '₹5-10 LPA', growthProspect: 'Very High'
  },
  {
    id: 'full_stack_developer', title: 'Full-Stack Developer',
    description: 'Works on both the front-end and back-end of web applications.',
    skillRequirements: [
      { skillId: 'javascript', level: 'Advanced' }, { skillId: 'nodejs', level: 'Intermediate' },
      { skillId: 'react', level: 'Intermediate' }, { skillId: 'sql', level: 'Intermediate' },
      { skillId: 'html', level: 'Intermediate' }, { skillId: 'css', level: 'Intermediate' },
      { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['frontend_developer', 'backend_developer', 'cloud_computing_engineer'],
    averageSalary: '₹8-20 LPA', growthProspect: 'High'
  },
  {
    id: 'frontend_developer', title: 'Frontend Developer',
    description: 'Build user-facing web applications and interfaces.',
    skillRequirements: [
      { skillId: 'javascript', level: 'Intermediate' }, { skillId: 'react', level: 'Intermediate' },
      { skillId: 'html', level: 'Advanced' }, { skillId: 'css', level: 'Advanced' },
      { skillId: 'problem_solving', level: 'Advanced' }, { skillId: 'teamwork', level: 'Intermediate' },
    ],
    relatedCareers: ['full_stack_developer', 'ui_ux_designer'],
    averageSalary: '₹6-12 LPA', growthProspect: 'High'
  },
  {
    id: 'backend_developer', title: 'Backend Developer',
    description: 'Build and maintain the server-side logic and databases for web applications.',
    skillRequirements: [
        { skillId: 'python', level: 'Intermediate' }, { skillId: 'nodejs', level: 'Intermediate' },
        { skillId: 'sql', level: 'Advanced' }, { skillId: 'mongodb', level: 'Intermediate' },
        { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['full_stack_developer', 'cloud_computing_engineer'],
    averageSalary: '₹6-14 LPA', growthProspect: 'Very High'
  },
  {
    id: 'ai_product_manager', title: 'AI Product Manager',
    description: 'Defines the strategy, roadmap, and features for AI-powered products.',
    skillRequirements: [
      { skillId: 'product_management', level: 'Advanced' }, { skillId: 'ai_literacy', level: 'Advanced' },
      { skillId: 'stakeholder_management', level: 'Advanced' }, { skillId: 'communication', level: 'Advanced' },
    ],
    relatedCareers: ['project_manager_tech', 'business_intelligence_developer'],
    averageSalary: '₹20-50+ LPA', growthProspect: 'Very High'
  },
  {
    id: 'robotics_engineer', title: 'Robotics Engineer',
    description: 'Designs, builds, and tests robots and automated systems for various industries.',
    skillRequirements: [
      { skillId: 'robotics', level: 'Advanced' }, { skillId: 'cpp', level: 'Advanced' },
      { skillId: 'python', level: 'Intermediate' }, { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['machine_learning_engineer'],
    averageSalary: '₹7-18 LPA', growthProspect: 'High'
  },
  {
    id: 'computer_vision_engineer', title: 'Computer Vision Engineer',
    description: 'Develops systems that can interpret and understand information from images and videos.',
    skillRequirements: [
      { skillId: 'computer_vision', level: 'Advanced' }, { skillId: 'deep_learning', level: 'Advanced' },
      { skillId: 'python', level: 'Advanced' }, { skillId: 'cpp', level: 'Intermediate' },
    ],
    relatedCareers: ['machine_learning_engineer', 'ai_research_scientist'],
    averageSalary: '₹9-22 LPA', growthProspect: 'High'
  },
  {
    id: 'nlp_engineer', title: 'NLP Engineer',
    description: 'Builds systems that can understand, interpret, and generate human language.',
    skillRequirements: [
      { skillId: 'nlp', level: 'Advanced' }, { skillId: 'deep_learning', level: 'Advanced' },
      { skillId: 'python', level: 'Advanced' }, { skillId: 'llm_development', level: 'Intermediate' },
    ],
    relatedCareers: ['machine_learning_engineer', 'data_scientist'],
    averageSalary: '₹9-24 LPA', growthProspect: 'High'
  },
  {
    id: 'business_intelligence_developer', title: 'Business Intelligence Developer',
    description: 'Develops dashboards and reports to help businesses analyze data and make decisions.',
    skillRequirements: [
      { skillId: 'sql', level: 'Advanced' }, { skillId: 'data_visualization', level: 'Advanced' },
      { skillId: 'data_analysis', level: 'Intermediate' }, { skillId: 'communication', level: 'Intermediate' },
    ],
    relatedCareers: ['data_analyst', 'data_scientist'],
    averageSalary: '₹6-15 LPA', growthProspect: 'High'
  },
  {
    id: 'cybersecurity_specialist', title: 'Cybersecurity Specialist',
    description: 'Protects computer systems and networks from cyber threats and data breaches.',
    skillRequirements: [
      { skillId: 'network_security', level: 'Advanced' }, { skillId: 'ethical_hacking', level: 'Intermediate' },
      { skillId: 'critical_thinking', level: 'Advanced' }, { skillId: 'problem_solving', level: 'Advanced' },
    ],
    relatedCareers: ['cloud_computing_engineer'],
    averageSalary: '₹6-20 LPA', growthProspect: 'Very High'
  },
  {
    id: 'cloud_computing_engineer', title: 'Cloud Computing Engineer',
    description: 'Manages a company’s cloud-based infrastructure and services.',
    skillRequirements: [
      { skillId: 'aws', level: 'Advanced' }, { skillId: 'azure', level: 'Advanced' },
      { skillId: 'gcp', level: 'Advanced' }, { skillId: 'docker', level: 'Intermediate' },
      { skillId: 'kubernetes', level: 'Intermediate' },
    ],
    relatedCareers: ['cybersecurity_specialist', 'full_stack_developer'],
    averageSalary: '₹8-22 LPA', growthProspect: 'Very High'
  },
  {
    id: 'project_manager_tech', title: 'Project Manager (Tech/AI)',
    description: 'Leads technical projects, ensuring they are completed on time and within budget.',
    skillRequirements: [
      { skillId: 'project_management', level: 'Advanced' }, { skillId: 'stakeholder_management', level: 'Advanced' },
      { skillId: 'ai_literacy', level: 'Intermediate' }, { skillId: 'leadership', level: 'Advanced' },
    ],
    relatedCareers: ['ai_product_manager', 'management_consultant'],
    averageSalary: '₹15-40 LPA', growthProspect: 'High'
  },
  {
    id: 'ui_ux_designer', title: 'UI/UX Designer',
    description: 'Designs user interfaces and user experiences for digital products.',
    skillRequirements: [
        { skillId: 'ux_ui_design', level: 'Advanced' }, { skillId: 'graphic_design', level: 'Intermediate' },
        { skillId: 'creativity', level: 'Advanced' }, { skillId: 'communication', level: 'Intermediate' },
        { skillId: 'critical_thinking', level: 'Intermediate' },
    ],
    relatedCareers: ['frontend_developer', 'graphic_design'],
    averageSalary: '₹4-9 LPA', growthProspect: 'High'
  },

  // --- Finance & Trading Careers ---
  {
    id: 'quantitative_trader', title: 'Quantitative Trader',
    description: 'Develops and executes automated trading strategies using mathematical models and programming.',
    skillRequirements: [
      { skillId: 'algorithmic_trading', level: 'Advanced' }, { skillId: 'python', level: 'Advanced' },
      { skillId: 'financial_engineering', level: 'Advanced' }, { skillId: 'market_analysis', level: 'Advanced' },
      { skillId: 'critical_thinking', level: 'Advanced' }, { skillId: 'risk_management_soft', level: 'Advanced' },
    ],
    relatedCareers: ['investment_banker', 'ai_research_scientist'],
    averageSalary: '₹20-80+ LPA', growthProspect: 'Very High'
  },
  {
    id: 'investment_banker', title: 'Investment Banker',
    description: 'Provides financial advice to corporations on mergers, acquisitions, and raising capital.',
    skillRequirements: [
      { skillId: 'financial_modeling', level: 'Advanced' }, { skillId: 'finance', level: 'Advanced' },
      { skillId: 'negotiation', level: 'Advanced' }, { skillId: 'critical_thinking', level: 'Advanced' },
    ],
    relatedCareers: ['management_consultant', 'quantitative_trader'],
    averageSalary: '₹15-50+ LPA', growthProspect: 'High'
  },

  // --- Business & Management Careers ---
  {
    id: 'management_consultant', title: 'Management Consultant',
    description: 'Helps organizations improve their performance by solving problems and finding new opportunities.',
    skillRequirements: [
      { skillId: 'problem_solving', level: 'Advanced' }, { skillId: 'data_analysis', level: 'Advanced' },
      { skillId: 'communication', level: 'Advanced' }, { skillId: 'stakeholder_management', level: 'Advanced' },
    ],
    relatedCareers: ['investment_banker', 'project_manager_tech'],
    averageSalary: '₹12-35 LPA', growthProspect: 'High'
  },
  {
    id: 'project_manager', title: 'Project Manager',
    description: 'Lead and manage project teams to ensure projects are completed on time and within budget.',
    skillRequirements: [
        { skillId: 'project_management', level: 'Advanced' }, { skillId: 'leadership', level: 'Advanced' },
        { skillId: 'communication', level: 'Advanced' }, { skillId: 'time_management', level: 'Advanced' },
    ],
    relatedCareers: ['data_analyst', 'hr_specialist'],
    averageSalary: '₹8-15 LPA', growthProspect: 'High'
  },
  {
    id: 'marketing_manager', title: 'Marketing Manager',
    description: 'Oversees marketing campaigns and strategies to promote a company’s products or services.',
    skillRequirements: [
      { skillId: 'digital_marketing', level: 'Advanced' }, { skillId: 'leadership', level: 'Advanced' },
      { skillId: 'data_analysis', level: 'Intermediate' }, { skillId: 'creativity', level: 'Advanced' },
    ],
    relatedCareers: ['digital_marketer', 'sales'],
    averageSalary: '₹10-25 LPA', growthProspect: 'High'
  },
  {
    id: 'digital_marketer', title: 'Digital Marketing Specialist',
    description: 'Plan and execute digital marketing campaigns to promote brands.',
    skillRequirements: [
        { skillId: 'digital_marketing', level: 'Advanced' }, { skillId: 'data_analysis', level: 'Intermediate' },
        { skillId: 'communication', level: 'Advanced' }, { skillId: 'creativity', level: 'Advanced' },
    ],
    relatedCareers: ['content_creator', 'sales'],
    averageSalary: '₹4-8 LPA', growthProspect: 'High'
  },
  {
    id: 'content_creator', title: 'Content Creator',
    description: 'Create engaging content like articles, videos, and social media posts for digital platforms.',
    skillRequirements: [
        { skillId: 'content_writing', level: 'Advanced' }, { skillId: 'digital_marketing', level: 'Intermediate' },
        { skillId: 'creativity', level: 'Advanced' }, { skillId: 'communication', level: 'Intermediate' },
    ],
    relatedCareers: ['digital_marketer', 'graphic_design'],
    averageSalary: '₹3-7 LPA', growthProspect: 'Medium'
  },
  {
    id: 'hr_specialist', title: 'Human Resources Specialist',
    description: 'Manages recruitment, employee relations, and administrative functions within an organization.',
    skillRequirements: [
      { skillId: 'hr', level: 'Advanced' }, { skillId: 'communication', level: 'Advanced' },
      { skillId: 'people_management', level: 'Advanced' }, { skillId: 'negotiation', level: 'Intermediate' },
    ],
    relatedCareers: ['regulatory_compliance_specialist'],
    averageSalary: '₹6-15 LPA', growthProspect: 'High'
  },
  {
    id: 'sustainability_consultant', title: 'Sustainability Consultant',
    description: 'Advises companies on how to become more socially and environmentally responsible.',
    skillRequirements: [
      { skillId: 'sustainability_esg', level: 'Advanced' }, { skillId: 'data_analysis', level: 'Intermediate' },
      { skillId: 'project_management', level: 'Intermediate' }, { skillId: 'communication', level: 'Advanced' },
    ],
    relatedCareers: ['management_consultant', 'regulatory_compliance_specialist'],
    averageSalary: '₹8-20 LPA', growthProspect: 'Very High'
  },
  {
    id: 'regulatory_compliance_specialist', title: 'Regulatory Compliance Specialist',
    description: 'Ensures a company follows all external laws and internal policies.',
    skillRequirements: [
      { skillId: 'regulatory_compliance', level: 'Advanced' }, { skillId: 'critical_thinking', level: 'Advanced' },
      { skillId: 'communication', level: 'Advanced' }, { skillId: 'hr', level: 'Intermediate' },
    ],
    relatedCareers: ['sustainability_consultant', 'hr_specialist'],
    averageSalary: '₹7-18 LPA', growthProspect: 'High'
  },

  // --- Healthcare Careers ---
  {
    id: 'health_services_manager', title: 'Health Services Manager',
    description: 'Plans, directs, and coordinates medical and health services in various healthcare settings.',
    skillRequirements: [
      { skillId: 'healthcare_management', level: 'Advanced' }, { skillId: 'leadership', level: 'Advanced' },
      { skillId: 'finance', level: 'Intermediate' }, { skillId: 'regulatory_compliance', level: 'Intermediate' },
    ],
    relatedCareers: ['clinical_project_manager'],
    averageSalary: '₹8-25 LPA', growthProspect: 'High'
  },
  {
    id: 'clinical_project_manager', title: 'Clinical Project Manager',
    description: 'Manages clinical trials for new drugs and medical devices.',
    skillRequirements: [
      { skillId: 'project_management', level: 'Advanced' }, { skillId: 'clinical_knowledge', level: 'Advanced' },
      { skillId: 'regulatory_compliance', level: 'Intermediate' }, { skillId: 'leadership', level: 'Advanced' },
    ],
    relatedCareers: ['health_services_manager', 'project_manager_tech'],
    averageSalary: '₹12-30 LPA', growthProspect: 'High'
  },
  {
    id: 'genetic_counselor', title: 'Genetic Counselor',
    description: 'Advises individuals and families affected by or at risk of genetic disorders.',
    skillRequirements: [
      { skillId: 'clinical_knowledge', level: 'Advanced' }, { skillId: 'communication', level: 'Advanced' },
      { skillId: 'problem_solving', level: 'Advanced' }, { skillId: 'adaptability', level: 'Advanced' },
    ],
    relatedCareers: ['medical_social_worker'],
    averageSalary: '₹7-18 LPA', growthProspect: 'High'
  },
  {
    id: 'medical_social_worker', title: 'Medical Social Worker',
    description: 'Provides support and resources to patients and families coping with illness.',
    skillRequirements: [
      { skillId: 'communication', level: 'Advanced' }, { skillId: 'people_management', level: 'Advanced' },
      { skillId: 'problem_solving', level: 'Advanced' }, { skillId: 'regulatory_compliance', level: 'Intermediate' },
    ],
    relatedCareers: ['genetic_counselor', 'hr_specialist'],
    averageSalary: '₹4-10 LPA', growthProspect: 'High'
  },
];

/**
 * Tries to find a matching skill from the database based on user input.
 * @param {string} userInput - The skill name entered by the user.
 * @returns {object | null} The matched skill object or null if not found.
 */
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

/**
 * Processes a comma-separated string of user skills and matches them to the database.
 * @param {string} rawSkills - A comma-separated string of skills.
 * @returns {Array<object>} An array of unique matched skill objects.
 */
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

  const uniqueSkills = Array.from(new Map(matchedSkills.map(skill => [skill.id, skill])).values());
  return uniqueSkills;
};

/**
 * Finds the most relevant careers based on a list of user skills.
 * @param {Array<string>} userSkillIds - An array of skill IDs the user possesses.
 * @returns {Array<object>} A sorted array of the top 10 most relevant career paths.
 */
export const getRelevantCareers = (userSkillIds) => {
  if (!userSkillIds || userSkillIds.length === 0) return [];

  return careersData
    .map(career => {
      const allRequiredSkillIds = career.skillRequirements.map(req => req.skillId);
      const matchCount = userSkillIds.filter(skillId => allRequiredSkillIds.includes(skillId)).length;
      return { ...career, matchCount };
    })
    .filter(career => career.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 10);
};