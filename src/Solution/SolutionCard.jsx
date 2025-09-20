import './SolutionCard.css';
import { Search, Target, Route } from 'lucide-react';
import React from 'react'; 

// data for the three steps
const solutionSteps = [
    {
        icon: Search,
        title: "Analyze",
        description: "Comprehensive skills assessment eliminates guesswork - discover your strengths beyond the 7 careers most students know."
    },
    {
        icon: Target,
        title: "Match",
        description: "AI reveals high-demand career paths from 250+ options, focusing on roles with strong employment prospects."
    },
    {
        icon: Route,
        title: "Guide",
        description: "Personalized roadmaps provide the 1:1 guidance that 1:15,000 counselor ratios can't deliver."
    }
];

const SolutionCard = () => {
    return (
       <div className='solution-journey-container'>
        {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
                <React.Fragment key={index}>
                    <div className="solution-step-card">
                        <div className="solution-step-icon-wrapper">
                            <Icon size={28} />
                        </div>
                        <div className="solution-step-content">
                            <h3 className="solution-step-title">{index + 1}. {step.title}</h3>
                            <p className="solution-step-description">{step.description}</p>
                        </div>
                    </div>
                    {/* don't add a connector after the last item */}
                    {index < solutionSteps.length - 1 && <div className="solution-step-connector" />}
                </React.Fragment>
            );
        })}
       </div>
    );
}

export default SolutionCard;