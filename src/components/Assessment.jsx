import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Assessment.css';

const Assessment = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [education, setEducation] = useState('');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'assessments'), {
        userId: user.uid,
        userEmail: user.email,
        skills: skills,
        interests: interests,
        education: education,
        createdAt: new Date()
      });

      setSaved(true);
      setSkills('');
      setInterests('');
      setEducation('');
    } catch (error) {
      setError('Failed to save assessment. Please try again.');
      console.error('Error saving assessment:', error);
    }

    setLoading(false);
  };

  if (saved) {
    return (
      <div className="assessment-container">
        <h2 className="success-title">✅ Assessment Saved!</h2>
        <button className="retry-btn" onClick={() => setSaved(false)}>
          Take Another Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="assessment-container">
      <h2 className="assessment-title">Skills Assessment</h2>
      
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit} className="assessment-form">
        <div className="form-group">
          <label className="form-label">Your Skills (comma separated):</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., JavaScript, Python, Design"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Your Interests:</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., Web Development, AI, Marketing"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Education Level:</label>
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select Education</option>
            <option value="12th">12th Grade</option>
            <option value="diploma">Diploma</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`submit-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Saving...' : 'Save Assessment'}
        </button>
      </form>
    </div>
  );
};

export default Assessment;