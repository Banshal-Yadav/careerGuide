import './SolutionCard.css';

const SolutionCard = () => {
    return (
        <div className='solution-card-container' >
            <p className='solution-para'> 
                Traditional career counseling fails because it's
                generic and outdated. Our AI-powered coach analyzes your unique profile, 
                real-time market data, and  emerging opportunities to provide personalized 
                guidance that evolves with you.
            </p>

            <p id='p1' className='solution-point' >1. Analyze → Complete skills & interest assessment</p>
            <p id='p2' className='solution-point' >2. Match → AI finds your ideal career paths from 250+ options</p>
            <p id='p3' className='solution-point' >3. Guide → Get personalized roadmap with actionable steps</p>

        </div>
    );
}

export default SolutionCard;