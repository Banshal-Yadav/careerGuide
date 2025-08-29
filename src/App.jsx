import './App.css'
import Navbar from './Navbar';
import Pgtitle from './pgTitle';
import GetStartBtn from './GetStartBtn';
import Feature from './Feature';
import Chiptab from './Chiptab';
import Footer from './footer';
import StatsContainer from './StatsContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Pgtitle />
      <GetStartBtn />
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
        <Chiptab 
          c1="Data Scientist" 
          c2="Biomedical Engineer" 
          c3="Clinical Research" 
          c4="Healthcare IT" 
          c5="Medical Writer" 
          c6="Health Informatics" 
        />
      <StatsContainer />
      <Feature  />
      <Footer />
    
    </div>
  );
}

export default App
