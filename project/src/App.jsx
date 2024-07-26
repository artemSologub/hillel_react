import { Routes, Route } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import OrderNew from './components/OrderNew/OrderNew';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/order/new" element={<OrderNew />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
