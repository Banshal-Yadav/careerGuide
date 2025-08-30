import './SolutionCard.css';

const SolutionCard = () => {
    return (
        <div className='solution-card-container' >
            <p className='solution-para'> 
                <b>Traditional</b> career counseling <b>fails</b>  because it's
                generic and <b>outdated</b>. Our <b>AI-powered coach</b> analyzes your <b>unique</b> profile, 
                real-time market data, and  emerging opportunities to provide <b>personalized 
                guidance</b> that evolves with <b>YOU</b>.
            </p>

            <p  className='solution-point' >1. Analyze → Complete skills & interest assessment</p>
            <p  className='solution-point' >2. Match → AI finds your ideal career paths from 250+ options</p>
            <p  className='solution-point' >3. Guide → Get personalized roadmap with actionable steps</p>

        </div>
    );
}

export default SolutionCard;