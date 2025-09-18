import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import React, { useState, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Assessment.css';
import { processSkillsLocally, getRelevantCareers, skillsData } from '../data/skillsDatabase';
import { getAiSkillAnalysis } from '../Services/geminiService';
import { CheckCircle2, XCircle, Target, TrendingUp, Lightbulb, Briefcase, BarChartHorizontal, Zap, Clock, IndianRupee, Award, BookOpen, FolderKanban, School, GraduationCap, Search, Info } from 'lucide-react';

// this component shows the results of the analysis
const AnalysisResults = ({ analysis, onRetry }) => {
  const [activeCareerTab, setActiveCareerTab] = useState(0);
  if (!analysis || !analysis.careerAnalysis) return null;

  return (
    <div className="results-container">
      <div className="results-header"><h2 className="success-title">your personalized career roadmap</h2><p className="results-subtitle">guidance generated for you</p></div>
      <div className="results-card summary-card"><h3><Zap size={24} className="icon-yellow" /> executive summary</h3><p>{analysis.summary}</p></div>
      <div className="strengths-growth-grid"><div className="results-card"><h4 className="card-subheader"><Target size={20} className="icon-green" /> your strengths</h4><ul>{analysis.strengths?.map((s, i) => <li key={i}>{s}</li>)}</ul></div><div className="results-card"><h4 className="card-subheader"><TrendingUp size={20} className="icon-blue" /> growth areas</h4><ul>{analysis.growthAreas?.map((g, i) => <li key={i}>{g}</li>)}</ul></div></div>
      <h3 className="section-title">top career recommendations</h3>
      <div className="career-tabs">{analysis.careerAnalysis.map((career, index) => (<button key={index} className={`tab-btn ${index === activeCareerTab ? 'active' : ''}`} onClick={() => setActiveCareerTab(index)}>{career.title}</button>))}</div>
      <div className="career-content">
        {analysis.careerAnalysis.map((career, index) => {
          if (index !== activeCareerTab) return null;
          return (
            <div key={career.title} className="results-card career-card-detailed active-career">
              <div className="career-title-header"><h4><Briefcase size={28} /> {career.title}</h4></div>
              <div className="details-section"><h5><Info size={16} /> why it's a match</h5><p>{career.reasoning}</p></div>
              <div className="details-section"><h5><Clock size={16} /> a day in the life</h5><p>{career.dayInTheLife}</p></div>
              <div className="pros-cons-grid">
                <div><h5><CheckCircle2 size={16} className="icon-green" /> why it's a great fit</h5><ul>{career.pros?.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
                <div><h5><XCircle size={16} className="icon-red" /> potential challenges</h5><ul>{career.cons?.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
              </div>

               {/* new info card grid */}
              <div className="info-card-grid">
                <div className="info-card">
                  <h5 className='info-card-title'><IndianRupee size={16} /> salary (entry-level)</h5>
                  <p className='info-card-content highlight-text big-text'>{career.salaryRange}</p>
                </div>
                 <div className="info-card">
                  <h5 className='info-card-title'><BarChartHorizontal size={16} /> job outlook</h5>
                  <p className='info-card-content'>{career.jobOutlook}</p>
                </div>
                <div className="info-card">
                  <h5 className='info-card-title'><Target size={16} /> skills to learn</h5>
                  <ul className='info-card-list'>{career.skillGaps?.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
                <div className="info-card">
                  <h5 className='info-card-title'><Award size={16} /> key certifications</h5>
                  <ul className='info-card-list'>
                    {career.suggestedCertifications?.map((cert, i) => (
                      // this check makes sure we only show valid data
                      cert && cert.name && (
                        <li key={i}>
                          <span className="cert-name">{cert.name}</span>
                          {cert.issuer && <span className="cert-issuer">by {cert.issuer}</span>}
                        </li>
                      )
                    ))}
                  </ul>
                </div>
                <div className="info-card wide-card">
                  <h5 className='info-card-title'><BookOpen size={16} /> recommended courses</h5>
                   <ul className='info-card-list course-list'>{career.suggestedCourses?.map((course, i) => <li key={i}><span className='highlight-text'>{course.platform}:</span> {course.courseName}</li>)}</ul>
                </div>
                 <div className="info-card wide-card">
                  <h5 className='info-card-title'><FolderKanban size={16} /> portfolio project ideas</h5>
                  <ul className='info-card-list'>{career.suggestedProjects?.map((project, i) => <li key={i}>{project}</li>)}</ul>
                </div>
              </div>

              {/* simple learning path */}
              <div className="learning-path-interactive">
                <h4 className='learning-path-title'><Lightbulb size={22} className="icon-yellow" /> your personalized roadmap</h4>
                <ol className='learning-path-list'>
                  {career.suggestedLearningPath?.map((step, i) => (
                    <li key={i} className='learning-path-step'>{step}</li>
                  ))}
                </ol>
              </div>

            </div>
          );
        })}
      </div>
      <button className="retry-btn" onClick={onRetry}>start a new assessment</button>
    </div>
  );
};


// this is the main assessment component.
const Assessment = () => {
  const { user } = useAuth();
  const [persona, setPersona] = useState(null); // 'highschool', 'college', 'jobseeker'
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [experience, setExperience] = useState('0-1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState(null);

  // show different skill suggestions based on who the user is
  const suggestedSkills = useMemo(() => {
    const allSkills = {
      technical: skillsData.technical.map(s => s.name),
      soft: skillsData.soft.map(s => s.name),
      industry: skillsData.industry.map(s => s.name),
    };

    switch (persona) {
      case 'highSchool':
        return [ ...allSkills.technical.slice(3, 6), 'python', 'javascript', ...allSkills.soft.slice(0, 5), ...allSkills.industry.slice(3, 5) ];
      case 'college':
        return [ 'react', 'node.js', 'git', 'java', 'mongodb', ...allSkills.soft.slice(0, 2), 'problem solving', 'teamwork', ...allSkills.industry.slice(0, 4) ];
      case 'jobSeeker':
        return [ 'aws', 'docker', 'python', 'react', 'sql', 'leadership', 'time management', 'project management', 'data analysis' ];
      default:
        return [];
    }
  }, [persona]);


  // adds a skill to the input field when a user clicks a chip
  const handleSkillChipClick = (skillToAdd) => {
    const currentSkills = skills.split(',').map(s => s.trim()).filter(Boolean);
    if (!currentSkills.includes(skillToAdd)) {
      setSkills(currentSkills.length > 0 ? `${skills}, ${skillToAdd}` : skillToAdd);
    }
  };

  // this function runs when the user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skills || !interests) {
      setError("please fill out all fields before analyzing.");
      return;
    }
    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const matchedSkills = processSkillsLocally(skills);
      if (matchedSkills.length === 0) {
        setError("couldn't identify any valid skills. please check for typos or try different terms.");
        setLoading(false);
        return;
      }
      const relevantCareers = getRelevantCareers(matchedSkills.map(s => s.id));
      if (relevantCareers.length === 0) {
        setError("we couldn't find any relevant career matches for the skills provided. please try adding more skills.");
        setLoading(false);
        return;
      }

      const analysisResult = await getAiSkillAnalysis({
        persona,
        matchedSkills,
        relevantCareers,
        interests,
        experience: persona === 'jobSeeker' ? experience : null,
      });
      
      if (analysisResult.error) {
        setError(analysisResult.message || "the analysis failed. please try again.");
        setLoading(false);
        return;
      }
      
      setAnalysis(analysisResult);

      // save the assessment data to Firebase
      if (user) {
        const profileRef = doc(db, 'profiles', user.uid);
        const newAssessment = {
          assessmentId: new Date().toISOString(), // a unique id for the assessment
          createdAt: new Date(),
          persona,
          rawSkills: skills,
          interests,
          experience: persona === 'jobSeeker' ? experience : null,
          aiSummary: analysisResult.summary,
          aiStrengths: analysisResult.strengths,
          aiGrowthAreas: analysisResult.growthAreas,
          aiCareerAnalysis: analysisResult.careerAnalysis,
        };

        try {
          const docSnap = await getDoc(profileRef);
          if (docSnap.exists()) {
            await updateDoc(profileRef, {
              assessments: arrayUnion(newAssessment)
            });
          } else {
            await setDoc(profileRef, {
              userEmail: user.email,
              assessments: [newAssessment]
            });
          }
        } catch (dbError) {
          console.error("error saving assessment to firebase:", dbError);
        }
      }
    } catch (err) {
      setError('an unexpected error occurred. please check your connection and try again.');
      console.error('error during assessment process:', err);
    }
    setLoading(false);
  };

  // resets the form to its starting state
  const resetAssessment = () => {
    setAnalysis(null);
    setPersona(null);
    setSkills('');
    setInterests('');
    setExperience('0-1');
    setError('');
  };

  // if we have results show them
  if (analysis) {
    return <AnalysisResults analysis={analysis} onRetry={resetAssessment} />;
  }

  // if the user have not chosen a persona, ask them to
  if (!persona) {
    return (
      <div className="assessment-container">
        <h2 className="assessment-title">who are you?</h2>
        <p className="assessment-subtitle">select your current status to get personalized advice.</p>
        <div className="persona-selection">
          <button className="persona-btn" onClick={() => setPersona('highSchool')}><School size={24} /> high school student</button>
          <button className="persona-btn" onClick={() => setPersona('college')}><GraduationCap size={24} /> college student</button>
          <button className="persona-btn" onClick={() => setPersona('jobSeeker')}><Search size={24} /> job seeker / professional</button>
        </div>
      </div>
    );
  }

  // this is the main form
  return (
    <div className="assessment-container">
      <h2 className="assessment-title">your career assessment</h2>
      <p className="assessment-subtitle">tell us about yourself to get a personalized career roadmap.</p>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="assessment-form">
        <div className="form-group"><label className="form-label">your skills</label><input type="text" className="form-input" placeholder="e.g., python, communication, graphic design" value={skills} onChange={(e) => setSkills(e.target.value)} /><div className="skill-chips-container">{suggestedSkills.map(skill => (<button type="button" key={skill} className="skill-chip" onClick={() => handleSkillChipClick(skill)}>{skill}</button>))}</div></div>
        <div className="form-group"><label className="form-label">your interests & hobbies</label><input type="text" className="form-input" placeholder="e.g., building web apps, solving puzzles, creative writing" value={interests} onChange={(e) => setInterests(e.target.value)} /></div>
        
        {persona === 'jobSeeker' && (
          <div className="form-group">
            <label className="form-label">years of professional experience</label>
            <select value={experience} onChange={(e) => setExperience(e.target.value)} className="form-select">
              <option value="0-1 years (beginner)">0 - 1 years (beginner)</option>
              <option value="2-4 years (intermediate)">2 - 4 years (intermediate)</option>
              <option value="5+ years (advanced)">5+ years (advanced)</option>
            </select>
          </div>
        )}

        <div className="form-actions">
          <button type="button" className="back-btn" onClick={() => setPersona(null)}>back</button>
          <button type="submit" disabled={loading} className={`submit-btn ${loading ? 'loading' : ''}`}>{loading ? 'analyzing...' : 'generate my roadmap'}</button>
        </div>
      </form>
    </div>
  );
};

export default Assessment;