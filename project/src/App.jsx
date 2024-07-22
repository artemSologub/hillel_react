import './App.css'
import Header from './components/header/Header';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';

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
  )
}

export default App
