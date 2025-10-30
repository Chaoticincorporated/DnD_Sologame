import './App.css';
import RegionAppPage from './components/RegionAppPage';
import regions from './data/gameDetails';

function App() {

  return (
    <>
      <RegionAppPage regionDetails={regions}/>
    </>
  )
}

export default App
