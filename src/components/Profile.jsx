import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Profile.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

// a smaller component to display a single assessment
const AssessmentCard = ({ assessment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="assessment-card">
      <div className="assessment-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <p className="assessment-date">
            {new Date(assessment.createdAt.seconds * 1000).toLocaleDateString()}
          </p>
          <h4 className="assessment-skills">
            {assessment.rawSkills}
          </h4>
        </div>
        <button className="expand-btn">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="assessment-card-body">
          <p><strong>summary:</strong> {assessment.summary}</p>
          <h5>top career match:</h5>
          <p>{assessment.careerAnalysis[0].title} ({assessment.careerAnalysis[0].matchScore}%)</p>
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
          // sort assessments with the newest one first
          const data = docSnap.data();
          data.assessments.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
          setProfileData(data);
        } else {
          console.log("no such document!");
        }
        setLoading(false);
      };
      fetchProfile();
    }
  }, [user]);

  if (loading) return <div className="profile-container"><p>loading profile...</p></div>;

  if (!profileData || profileData.assessments.length === 0) {
    return (
      <div className="profile-container">
        <h2 className="profile-title">your profile</h2>
        <p>no profile data found. complete an assessment to get started!</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">{profileData.userEmail}'s profile</h2>
      <p className="profile-subtitle">your past assessments</p>
      <div className="assessments-list">
        {profileData.assessments.map(assessment => (
          <AssessmentCard key={assessment.assessmentId} assessment={assessment} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
