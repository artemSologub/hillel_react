import './App.css';

import AnimalList from './components/AnimalList';
import { animals } from './mock/mockData';

function App() {
  return (
    <>
      <AnimalList list={animals} />
    </>
  );
}

export default App;
