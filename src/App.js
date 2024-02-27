
import { useState, useEffect } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Navbar from './components/navbar/navbar';

function App() {

  const time = useTime();
  
  return (
    
    <div className="App" >
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
      </Routes>

    </div>
  );

}

function useTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(id);
    
  }, []);

  return time;
}

function StateExample(){
  const [count, setCount] = useState("test");

  return(
    <div>
      <button onClick={ () => { setCount(count + "a") } } >
        Click Me
      </button>

      <input type='text'  value={count} ></input>

      <input></input>

    </div>
  );
}

function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

export default App;
