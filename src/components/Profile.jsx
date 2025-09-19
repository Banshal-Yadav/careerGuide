import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
// added updateDoc and deleteField for the delete functionality
import { doc, getDoc, updateDoc, deleteField } from 'firebase/firestore'; 
import { db } from '../firebase/config';
import './Profile.css';
// added Trash2 icon for the delete button
import { ChevronDown, ChevronUp, Target, TrendingUp, Briefcase, Zap, IndianRupee, User, Edit, FileText, Download, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="card-section"><h5 className="section-title"><Zap size={18} /> Executive Summary</h5><p>{assessment.aiSummary || 'No summary available for this assessment'}</p></div>
          <div className="strengths-growth-grid-profile">
            <div className="card-section">
              <h5 className="section-title"><Target size={18} /> Strengths</h5>
              <ul className="custom-list">{assessment.aiStrengths?.length > 0 ? assessment.aiStrengths.map((strength, i) => <li key={i}>{strength}</li>) : <li>No strengths analysis available</li>}</ul>
            </div>
            <div className="card-section">
              <h5 className="section-title"><TrendingUp size={18} /> Growth Areas</h5>
              <ul className="custom-list">{assessment.aiGrowthAreas?.length > 0 ? assessment.aiGrowthAreas.map((area, i) => <li key={i}>{area}</li>) : <li>No growth area analysis available</li>}</ul>
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
                  : <p>No career recommendations available for this assessment</p>
                }
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

// added handleDelete as a prop
const ResumeCard = ({ resume, handleDelete }) => {
    return (
        <div className="resume-card">
            <div className="resume-card-header">
                <FileText size={40} />
                <div>
                    <h3 className="resume-card-title">{resume.fullName}'s Resume</h3>
                    <p className="resume-card-subtitle">ready to be shared with recruiters</p>
                </div>
            </div>
            <div className="resume-card-body">
                <p className="resume-summary-snippet">"{resume.summary.substring(0, 150)}..."</p>
            </div>
            <div className="resume-card-actions">
                <Link to="/resume-builder" state={{ edit: true }} className="dashboard-btn edit-resume-btn">
                    <Edit size={16}/> Edit Resume
                </Link>
                <Link to="/resume-builder" className="dashboard-btn download-resume-btn">
                    <Download size={16}/> View & Download
                </Link>
                {/* new delete button */}
                <button onClick={handleDelete} className="dashboard-btn delete-resume-btn">
                    <Trash2 size={16}/> Delete
                </button>
            </div>
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
          if (data.assessments && Array.isArray(data.assessments)) {
            data.assessments.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
          }
          setProfileData(data);
        } else {
          setProfileData({ assessments: [] });
        }
        setLoading(false);
      };
      fetchProfile();
    }
  }, [user]);

  // function to handle resume deletion
  const handleDeleteResume = async () => {
    if (!window.confirm("are you sure you want to permanently delete your resume?")) {
        return;
    }

    const profileRef = doc(db, 'profiles', user.uid);
    try {
        // remove the 'resume' field from the document in firestore
        await updateDoc(profileRef, {
            resume: deleteField()
        });
        // update the local state to immediately reflect the change
        setProfileData(prevData => ({ ...prevData, resume: null }));
    } catch (error) {
        console.error("error deleting resume:", error);
        alert("failed to delete resume, please try again");
    }
  };

  if (loading) return <div className="profile-container"><p>loading profile...</p></div>;

  const hasAssessments = profileData && profileData.assessments && profileData.assessments.length > 0;
  const hasResume = profileData && profileData.resume;

  return (
    <div className="profile-container">
      <div className="profile-dashboard">
        <div className="dashboard-header">
          <User size={40} />
          <div>
            <h2 className="dashboard-name">{profileData?.resume?.fullName || user.email}</h2>
            <p className="dashboard-subtitle">welcome to your personal dashboard</p>
          </div>
        </div>
      </div>

      {hasResume ? (
        <ResumeCard resume={profileData.resume} handleDelete={handleDeleteResume} />
      ) : (
        <div className="no-resume-card">
            <h4>Create Your Professional Resume</h4>
            <p>a great resume is the first step towards landing your dream job</p>
            <Link to="/resume-builder" className="dashboard-btn">
                <Edit size={16}/> Create Your Resume
            </Link>
        </div>
      )}

      <h3 className="section-heading">Your Recent Assessments</h3>
      
      {!hasAssessments ? (
        <p>no assessments found, complete one to get started</p>
      ) : (
        <div className="assessments-list">
          {profileData.assessments.slice(0, 3).map((assessment, index) => (
            <AssessmentCard key={assessment.assessmentId || index} assessment={assessment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;