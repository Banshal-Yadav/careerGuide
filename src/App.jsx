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
import { Routes, Route } from "react-router-dom";
import AssessmentPg from './components/AssessmentPg.jsx';
import Faq from "./Card/Faq.jsx";
import Profile from './components/Profile.jsx';
import ResumeBuilder from './components/Resume/ResumeBuilder.jsx';



function App() {
  const { user, loading } = useAuth();

  if (loading) return <div>loading...</div>;

  if (!user) {
    return (
      <div className="grid-background">
        <Navbar />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>welcome to career advisor</h1>
          <p>please sign in to continue</p>
          <Auth />
        </div>
      </div>
    );
  }
  return (
    <div className="grid-background">
      <Routes>
      <Route
      path="/"
      element={
      <>
        <Navbar />
        <Pgtitle />
        <GetStartBtn />
        <ChipTabContainer />
        <StatsContainer />
        <SolutionSec />
        <Feature  />
         
        <Faq/>
        <Footer />
      </>
      }
      />
      <Route path="/resume-builder" element={
        <>
          <Navbar />
          <ResumeBuilder />
          <Footer />
        </>
      } />
      

      <Route path="/AssessmentPg" element={
        <>
        <Navbar />
        <AssessmentPg/>
        <Footer />
        </>
      } />
      <Route path="/profile" element={
        <>
        <Navbar />
        <Profile />
        <Footer />
        </>
      } />
    </Routes>
    </div>
  );
}

export default App;
