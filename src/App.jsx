import './App.css'
import Navbar from './Navbar';
import Pgtitle from './pgTitle';
import GetStartBtn from './GetStartBtn';
import Feature from './Feature';
import Footer from './footer';
import StatsContainer from './StatsContainer';
import ChipTabContainer from './ChipTabContainer';

function App() {
  return (
    <div>
      <Navbar />
      <Pgtitle />
      <GetStartBtn />
      <ChipTabContainer />
      <StatsContainer />
      <Feature  />
      <Footer />
    
    </div>
  );
}

export default App
