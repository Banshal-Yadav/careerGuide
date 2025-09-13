import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Assessment.css';

// local processing and AI service
import { processSkillsLocally, getRelevantCareers, skillsData } from '../data/skillsDatabase';
import { getAiSkillAnalysis } from '../Services/geminiService';

// icons for the new results page
import { CheckCircle2, XCircle, Target, TrendingUp, Lightbulb, Briefcase, BarChartHorizontal, Zap } from 'lucide-react';


//  for radial progress bar
const RadialProgressBar = ({ score }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="radial-progress-bar">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="progress-ring-bg"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring-fg"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="progress-text">{score}%</span>
    </div>
  );
};


// main component to display the results 
const AnalysisResults = ({ analysis, onRetry }) => {
  const [activeCareerTab, setActiveCareerTab] = useState(0);

  if (!analysis || !analysis.careerAnalysis) return null;

  return (
    <div className="results-container">
      <div className="results-header">
        <h2 className="success-title">Your Personalized Career Roadmap</h2>
        <p className="results-subtitle">Powered by Gemini 2.5 Flash</p>
      </div>
      
      <div className="results-card summary-card">
        <h3><Zap size={24} className="icon-yellow" /> Executive Summary</h3>
        <p>{analysis.summary}</p>
      </div>

      <div className="strengths-growth-grid">
        <div className="results-card">
          <h4 className="card-subheader"><Target size={20} className="icon-green" /> Your Strengths</h4>
          <ul>{analysis.strengths?.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div className="results-card">
          <h4 className="card-subheader"><TrendingUp size={20} className="icon-blue" /> Growth Areas</h4>
          <ul>{analysis.growthAreas?.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
      </div>

      <h3 className="section-title">Top Career Recommendations</h3>
      
      {/* interactive tabs */}
      <div className="career-tabs">
        {analysis.careerAnalysis.map((career, index) => (
          <button
            key={index}
            className={`tab-btn ${index === activeCareerTab ? 'active' : ''}`}
            onClick={() => setActiveCareerTab(index)}
          >
            {career.title}
          </button>
        ))}
      </div>
      
      {/* Career Content */}
      <div className="career-content">
        {analysis.careerAnalysis.map((career, index) => {
          if (index !== activeCareerTab) return null;
          return (
            <div key={career.title} className="results-card career-card-detailed active-career">
              <div className="career-title-header">
                 <h4><Briefcase size={28} /> {career.title}</h4>
                 <RadialProgressBar score={career.matchScore} />
              </div>

              <div className="details-section">
                <h5><BarChartHorizontal size={16} /> Job Outlook</h5>
                <p className="job-outlook">{career.jobOutlook}</p>
              </div>

              <div className="pros-cons-grid">
                <div>
                  <h5><CheckCircle2 size={16} className="icon-green" /> Why It's a Great Fit</h5>
                  <ul>{career.pros?.map((p, i) => <li key={i}>{p}</li>)}</ul>
                </div>
                <div>
                  <h5><XCircle size={16} className="icon-red" /> Potential Challenges</h5>
                  <ul>{career.cons?.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </div>
              </div>
              
              <div className="details-section">
                <h5><Target size={16} /> Recommended Skills to Learn</h5>
                <ul className="skill-gaps-list">{career.skillGaps?.map((s, i) => <li key={i}>{s}</li>)}</ul>
              </div>
              
              <div className="learning-path">
                <p><Lightbulb size={80} className="icon-yellow" /> <strong>Your First Step:</strong> {career.suggestedLearningPath}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="retry-btn" onClick={onRetry}>
        Start a New Assessment
      </button>
    </div>
  );
};

// main assessment component 
const Assessment = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('undergraduate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState(null);

  // suggested skills for the chips
  const suggestedSkills = [
    ...skillsData.technical.slice(0, 6),
    ...skillsData.soft.slice(0, 4),
    ...skillsData.industry.slice(0, 4)
  ].map(skill => skill.name);

  // handlers
  const handleSkillChipClick = (skillToAdd) => {
    const currentSkills = skills.split(',').map(s => s.trim()).filter(Boolean);
    if (!currentSkills.includes(skillToAdd)) {
      setSkills(currentSkills.length > 0 ? `${skills}, ${skillToAdd}` : skillToAdd);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skills || !interests || !education) {
      setError("Please fill out all fields before analyzing.");
      return;
    }
    setLoading(true);
    setError('');
    setAiAnalysis(null);

    try {
      const matchedSkills = processSkillsLocally(skills);
      if (matchedSkills.length === 0) {
        setError("Couldn't identify any valid skills. Please check for typos or try different terms.");
        setLoading(false);
        return;
      }
      const relevantCareers = getRelevantCareers(matchedSkills.map(s => s.id));
      const analysisResult = await getAiSkillAnalysis(matchedSkills, relevantCareers, interests, education);
      
      if (analysisResult.error) {
        setError(analysisResult.message || "The AI analysis failed. Please try again.");
        setLoading(false);
        return;
      }
      
      setAiAnalysis(analysisResult);

      await addDoc(collection(db, 'assessments'), {
        userId: user.uid,
        userEmail: user.email,
        rawSkills: skills,
        rawInterests: interests,
        education: education,
        matchedSkills: matchedSkills,
        aiSummary: analysisResult.summary,
        aiStrengths: analysisResult.strengths,
        aiGrowthAreas: analysisResult.growthAreas,
        aiCareerAnalysis: analysisResult.careerAnalysis,
        createdAt: new Date()
      });

    } catch (err) {
      setError('An unexpected error occurred. Please check your connection and try again.');
      console.error('Error during assessment process:', err);
    }

    setLoading(false);
  };

  if (aiAnalysis) {
    return (
      <div className="assessment-container">
        <AnalysisResults 
          analysis={aiAnalysis} 
          onRetry={() => {
            setAiAnalysis(null);
            setSkills('');
            setInterests('');
            setEducation('undergraduate');
            setError('');
          }} 
        />
      </div>
    );
  }

  // RENDER FORM
  return (
    <div className="assessment-container">
      <h2 className="assessment-title">Your Career Assessment</h2>
      <p className="assessment-subtitle">Tell us about yourself to get a personalized AI-powered career roadmap.</p>
      
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit} className="assessment-form">
        <div className="form-group">
          <label className="form-label">Your Skills</label>
          <input
            type="text"
            className="form-input"
            placeholder="Type your skills or select from the options below"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <div className="skill-chips-container">
            {suggestedSkills.map(skill => (
              <button
                type="button"
                key={skill}
                className="skill-chip"
                onClick={() => handleSkillChipClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Your Interests & Hobbies</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., Building web apps, AI, Video Games"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Highest Education Level</label>
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="form-select"
          >
            <option value="12th">12th Grade / High School</option>
            <option value="diploma">Diploma</option>
            <option value="undergraduate">Undergraduate Degree</option>
            <option value="postgraduate">Postgraduate Degree</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`submit-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Analyzing...' : 'Generate My Roadmap'}
        </button>
      </form>
    </div>
  );
};

export default Assessment;

