
import { useState } from 'react';
import './App.css';

// import Button from './components/button/button';
import ConditionalRendering from './components/conditonal_rendering/PackingList';

import Button from '@mui/material/Button';

function App() {

  let age = 45;

  let packingList = [
    {
      "isPacked": true,
      "name": "Photo of Tam"
    },
    {
      "isPacked": false,
      "name": "Tim Cook"
    },
    {
      "isPacked": false,
      "name": "Helmet with a golden leaf"
    }
  ]

  const [value, setValue] = useState(0);

  function onClick1(e) {
  
    e.stopPropagation();
    
    e.preventDefault();
    
    console.log("Click Me Button Clicked", e);
    
    setValue( value + 10 );
    
  }

  return (

    <div className="App" >

      <div onClick={parentOnClick}>
        <h3>Interactivity</h3>
        
        <Button variant="outlined" onClick={onClick1} >Click Me</Button>
        <Button variant="contained" onClick={onClick2}>Click Me 2</Button>
      </div>

      <p>
        Button Clicked {value} times
      </p>
      
      <div>
        
      </div>

    </div>

  );
}

function parentOnClick(e) {
  console.log("Parent Clicked");

  // alert("Button 1 clicked!!");

}



function onClick2() {

  alert("Button 2 clicked!!");

}

export default App;
