import './App.css'
import Navbar from './Navbar/Navbar.jsx';
import Pgtitle from './PgTitle/pgTitle.jsx';
import GetStartBtn from './GetStartedBtn/GetStartBtn.jsx';
import Feature from './Card/Feature.jsx';
import Footer from './Footer/footer.jsx';
import StatsContainer from './Stats/StatsContainer.jsx';
import ChipTabContainer from './Chip/ChipTabContainer.jsx';
import SolutionSec from './Solution/SolutionSec.jsx';
import Auth from './components/Auth.jsx';
import { useAuth } from './hooks/useAuth.js';
import Assessment from './components/Assessment.jsx'; 

function App() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Welcome to Career Advisor</h1>
          <p>Please sign in to continue</p>
          <Auth />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Pgtitle />
      <GetStartBtn />
      <Assessment />
      <ChipTabContainer />
      <StatsContainer />
      <SolutionSec />
      <Feature  />
      <Footer />
    
    </div>
  );
}

export default App;
