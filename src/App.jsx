import './App.css';
import HomePage from "./components/HomePage";
import regions from './data/regionDetails';
import races from './data/raceDetails';
import npcs from './data/npcDetails.json';
import logic from './data/gameLogic';

function App() {

  return (
    <>
      <HomePage regionDetails={regions} raceDetails={races} npcDetails={npcs} logic={logic}/>
    </>
  )
}

export default App
