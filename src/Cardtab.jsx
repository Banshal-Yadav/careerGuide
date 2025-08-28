import Card from './Card.jsx'
import './Cardtab.css'

function Cardtab() {
    return (
        <div className='card_tab'>
            <Card icon="icon1" title="AI-Powered Career Guidance"  info="Get personalized career advice and insights powered by advanced Ai technology."/> 
            <Card icon="icon2" title="Interview preparation"  info="practice with role-specific question and get instant feedback to improve your performance"/> 
            <Card icon="icon3" title="Industry Insight"  info="Stay ahead with real-time industr trends, salary data, and market analysis."/>
            <Card icon="icon4" title="Smart Resume Creation"  info="generate ATS-optimized resumes with AI assistance"/>
            
        </div>
    );
}
export default Cardtab;
