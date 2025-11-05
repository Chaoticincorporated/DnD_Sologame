import './App.css';
import HomePage from "./components/HomePage";
import regions from './data/regionDetails';

function App() {

  return (
    <>
      <HomePage regionDetails={regions}/>
    </>
  )
}

export default App
