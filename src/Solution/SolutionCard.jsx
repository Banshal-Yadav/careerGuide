import './SolutionCard.css';

const SolutionCard = () => {
    return (
       <div>
        <p className='solution-para'> 
                <b>Traditional</b> career counseling <b>fails</b>  because it's
                generic and <b>outdated</b>. Our <b>AI-powered coach</b> analyzes your <b>unique</b> profile, 
                real-time market data, and  emerging opportunities to provide <b>personalized 
                guidance</b> that evolves with <b>YOU</b>.
            </p>
         <div className='solution-card-container' >
            

           <div className="solution-point">
                <h3>1. Analyze → </h3>
                <p>Comprehensive skills assessment eliminates the guesswork - discover your strengths beyond the 7 careers most students know</p>
            </div> 
           <div className="solution-point">
                <h3>2. Match → </h3>
                <p>AI reveals high-demand career paths from 250+ options, focusing on roles with strong employment prospects</p>
           </div>
            <div className='solution-point'>
                <h3>3. Guide → </h3>
                <p> Personalized roadmaps provide the 1:1 guidance that 1:15,000 counselor ratios can't deliver</p>
            </div>
            

        </div>
       </div>
    );
}

export default SolutionCard;