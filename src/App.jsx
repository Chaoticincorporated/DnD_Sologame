import './App.css';
import ProvinceContainer from './components/ProvinceContainer';
import regions from './data/gameDetails';

function App() {

  return (
    <>
      <ProvinceContainer gameDetails={regions}
      />
    </>
  )
}

export default App
