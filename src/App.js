import './App.css';
import BottomNavMobile from './components/BottomNavMobile';
import Explore from './components/Explore';
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <BottomNavMobile/>
      <Header/>
      <Hero/>
      <Explore/>
    </div>
  );
}

export default App;
