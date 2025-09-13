import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import './Assessment.css';

// Local processing and AI service
import { processSkillsLocally, getRelevantCareers } from '../data/skillsDatabase.js';
import { getAiSkillAnalysis } from '../Services/geminiService.js';

// Icons for the new results page
import { CheckCircle2, XCircle, Target, TrendingUp, Lightbulb, Briefcase, BarChartHorizontal } from 'lucide-react';

// --- A new, advanced component to display the results ---
const AnalysisResults = ({ analysis, onRetry }) => {
  if (!analysis) return null;

  return (
    <div className="results-container">
      <div className="results-header">
        <h2 className="success-title">Your Personalized Career Roadmap</h2>
        <p className="results-subtitle">Powered by Gemini 2.5 Flash</p>
      </div>
      
      {/* AI-Generated Summary */}
      <div className="results-card summary-card">
        <h3>Executive Summary</h3>
        <p>{analysis.summary}</p>
      </div>

      {/* Strengths and Growth Areas */}
      <div className="strengths-growth-grid">
        <div className="results-card">
          <h4 className="card-subheader"><Target size={20} className="icon-green" /> Your Strengths</h4>
          <ul>
            {analysis.strengths?.map((strength, i) => <li key={i}>{strength}</li>)}
          </ul>
        </div>
        <div className="results-card">
          <h4 className="card-subheader"><TrendingUp size={20} className="icon-blue" /> Growth Areas</h4>
          <ul>
            {analysis.growthAreas?.map((area, i) => <li key={i}>{area}</li>)}
          </ul>
        </div>
      </div>

      {/* Detailed Career Breakdown */}
      <h3 className="section-title">Top Career Recommendations</h3>
      <div className="careers-breakdown">
        {analysis.careerAnalysis?.map((career) => (
          <div key={career.title} className="results-card career-card-detailed">
            <div className="career-title-header">
              <h4><Briefcase size={22} /> {career.title}</h4>
              <div className="match-score-container">
                <div className="match-score-bar" style={{width: `${career.matchScore}%`}}></div>
                <span>{career.matchScore}% Match</span>
              </div>
            </div>

            <div className="details-section">
              <h5><BarChartHorizontal size={16} /> Job Outlook</h5>
              <p className="job-outlook">{career.jobOutlook}</p>
            </div>

            <div className="pros-cons-grid">
              <div>
                <h5><CheckCircle2 size={16} className="icon-green" /> Pros</h5>
                <ul>{career.pros?.map((pro, i) => <li key={i}>{pro}</li>)}</ul>
              </div>
              <div>
                <h5><XCircle size={16} className="icon-red" /> Cons</h5>
                <ul>{career.cons?.map((con, i) => <li key={i}>{con}</li>)}</ul>
              </div>
            </div>
            
            <div className="details-section">
              <h5><Target size={16} /> Skill Gaps</h5>
              <ul>{career.skillGaps?.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
            </div>
            
            <div className="learning-path">
              <p><Lightbulb size={18} className="icon-yellow" /> <strong>Your Next Step:</strong> {career.suggestedLearningPath}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="retry-btn" onClick={onRetry}>
        Start a New Assessment
      </button>
    </div>
  );
};

const Assessment = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('undergraduate');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState(null);

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
      setError('An unexpected error occurred during the process. Please check your connection and try again.');
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
            placeholder="Separate skills with a comma, e.g., JavaScript, Python"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
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

