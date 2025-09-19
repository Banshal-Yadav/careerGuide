import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CtaBanner.css';
import bannerVisual from '../assets/cta-banner-visual.png';

const CtaBanner = () => {
    const navigate = useNavigate();

    return (
        <div className="cta-banner-wrapper">
            <div className="cta-image-column">
                <img src={bannerVisual} alt="Unlock Career Potential Visual" />
            </div>
            <div className="cta-text-column">
                <h2 className="cta-title">Unlock Your Career Potential</h2>
                <p className="cta-subtitle">
                    Leverage AI-driven analytics to find personalized job matches and insights.
                </p>
                <button onClick={() => navigate("/AssessmentPg")} className="cta-button">
                    Analyze My Profile
                </button>
            </div>
        </div>
    );
};

export default CtaBanner;