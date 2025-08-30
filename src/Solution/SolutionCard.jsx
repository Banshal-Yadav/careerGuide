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

           <div className="solution-point">
                <p>1. Analyze → </p>
                <p>Complete skills & interest assessment</p>
            </div> 
           <div className="solution-point">
                <p>2. Match → </p>
                <p>AI finds your ideal career paths from 250+ options</p>
           </div>
            <div className='solution-point'>
                <p>3. Guide → </p>
                <p> Get personalized roadmap with actionable steps</p>
            </div>
            

        </div>
    );
}

export default SolutionCard;