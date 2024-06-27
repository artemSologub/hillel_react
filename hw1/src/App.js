import './App.css';

import List from './components/List';
import { animals } from './mock/mockData';

function App() {
  return (
    <>
      <List list={animals} />
    </>
  );
}

export default App;
