import './ChipTabContainer.css';
import Chiptab from './Chiptab';

const ChipTabContainer = () => {
    return (
        <div className='cardtab-container'>
            <h1 className='cardtab-container-title'>From Traditional to Emerging - Discover All Possibilities</h1>
            <Chiptab 
          c1="Machine Learning"
          c2="Java Devloper"
          c3="Researcher" 
          c4="Cloud" 
          c5="Bigdata" 
          c6="Ai Engineer" 
        />
      <Chiptab 
          c1="UX Designer" 
          c2="Creative Director" 
          c3="Brand Strategist" 
          c4="Motion Graphics" 
          c5="Digital Marketing" 
          c6="Content Creator" 
        />
       <Chiptab 
          c1="Product Manager" 
          c2="Business Analyst" 
          c3="Financial Advisor" 
          c4="Operations" 
          c5="Strategy" 
          c6="Team Lead" 
        />
        {/* <Chiptab 
          c1="Data Scientist" 
          c2="Biomedical Engineer" 
          c3="Clinical Research" 
          c4="Healthcare IT" 
          c5="Medical Writer" 
          c6="Health Informatics" 
        /> */}
        </div>
    ); 
}
export default ChipTabContainer;