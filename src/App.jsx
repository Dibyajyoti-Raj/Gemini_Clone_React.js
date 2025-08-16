import { useState } from 'react'
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
    <MainArea/>
    </>
  );
}

export default App
