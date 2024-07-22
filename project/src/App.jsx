import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <main class="content">
          <Login />
          <Menu />
        </main>
      </div>
    </>
  );
}

export default App;
