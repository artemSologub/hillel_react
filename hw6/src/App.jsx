import './App.css'

import useFetch from './hooks/use-fetch';

function App() {
  const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>      
      <div>Hello</div>
    </>
  )
}

export default App
