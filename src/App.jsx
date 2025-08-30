import './App.css'
import Navbar from './Navbar/Navbar.jsx';
import Pgtitle from './PgTitle/pgTitle.jsx';
import GetStartBtn from './GetStartedBtn/GetStartBtn.jsx';
import Feature from './Card/Feature.jsx';
import Footer from './Footer/footer.jsx';
import StatsContainer from './Stats/StatsContainer.jsx';
import ChipTabContainer from './Chip/ChipTabContainer.jsx';
import SolutionSec from './Solution/SolutionSec.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Pgtitle />
      <GetStartBtn />
      <ChipTabContainer />
      <StatsContainer />
      <SolutionSec />
      <Feature  />
      <Footer />
    
    </div>
  );
}

export default App
