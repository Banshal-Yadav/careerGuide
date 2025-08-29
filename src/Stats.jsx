import './Stats.css00';

const Stats = () => {
    return (
        <div className='stats-container'>
            <Card icon={Brain } title="AI-Powered Career Guidance"  info="Get personalized career advice and insights powered by advanced Ai technology."/> 
            <Card icon={MessageSquare} title="Interview preparation"  info="practice with role-specific question and get instant feedback to improve your performance"/> 
            <Card icon={BarChart3} title="Industry Insight"  info="Stay ahead with real-time industr trends, salary data, and market analysis."/>
            <Card icon={FileText} title="Smart Resume Creation"  info="generate ATS-optimized resumes with AI assistance"/>
            
        </div>
    );
}
export default Stats;