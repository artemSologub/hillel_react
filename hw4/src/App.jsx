import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Users from './pages/Users';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <header>APP</header>
      <Link to="/users">Users</Link>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
