import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Profile.css';
import { ChevronDown, ChevronUp, Target, TrendingUp, Briefcase, Zap, IndianRupee } from 'lucide-react';

const AssessmentCard = ({ assessment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "Invalid Date";
    const date = new Date(timestamp.seconds * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="assessment-card">
      <div className="assessment-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div><p className="assessment-date">{formatDate(assessment.createdAt)}</p><h4 className="assessment-skills">{assessment.rawSkills}</h4></div>
        <button className="expand-btn">{isExpanded ? <ChevronUp /> : <ChevronDown />}</button>
      </div>
      {isExpanded && (
        <div className="assessment-card-body">
          <div className="card-section"><h5 className="section-title"><Zap size={18} /> Executive Summary</h5><p>{assessment.aiSummary || 'No summary available for this assessment.'}</p></div>
          <div className="strengths-growth-grid-profile">
            <div className="card-section">
              <h5 className="section-title"><Target size={18} /> Strengths</h5>
              <ul className="custom-list">{assessment.aiStrengths?.length > 0 ? assessment.aiStrengths.map((strength, i) => <li key={i}>{strength}</li>) : <li>No strengths analysis available.</li>}</ul>
            </div>
            <div className="card-section">
              <h5 className="section-title"><TrendingUp size={18} /> Growth Areas</h5>
              <ul className="custom-list">{assessment.aiGrowthAreas?.length > 0 ? assessment.aiGrowthAreas.map((area, i) => <li key={i}>{area}</li>) : <li>No growth area analysis available.</li>}</ul>
            </div>
          </div>
          <div className="card-section">
             <h5 className="section-title"><Briefcase size={18} /> Top Career Recommendations</h5>
             <div className="careers-list">
                {assessment.aiCareerAnalysis?.length > 0
                  ? assessment.aiCareerAnalysis.map((career, i) => (
                      <div key={i} className="career-item">
                        <div className="career-item-header"><h6>{career.title}</h6><span className="match-score">{career.matchScore}% Match</span></div>
                        <p className="career-fit salary-info"><IndianRupee size={14} /> {career.salaryRange || 'Not available'}</p>
                      </div>
                    ))
                  : <p>No career recommendations available for this assessment.</p>
                }
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        setLoading(true);
        const profileRef = doc(db, 'profiles', user.uid);
        const docSnap = await getDoc(profileRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.assessments && Array.isArray(data.assessments)) { data.assessments.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); }
          setProfileData(data);
        } else {
          setProfileData({ assessments: [] });
        }
        setLoading(false);
      };
      fetchProfile();
    }
  }, [user]);

  if (loading) return <div className="profile-container"><p>Loading profile...</p></div>;
  if (!profileData || !profileData.assessments || profileData.assessments.length === 0) {
    return (<div className="profile-container"><h2 className="profile-title">Your Profile</h2><p>No assessments found. Complete one to get started!</p></div>);
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">{profileData.userEmail}'s Profile</h2>
      <p className="profile-subtitle">Your Past Assessments</p>
      <div className="assessments-list">{profileData.assessments.map((assessment, index) => (<AssessmentCard key={assessment.assessmentId || index} assessment={assessment} />))}</div>
    </div>
  );
};

export default Profile;