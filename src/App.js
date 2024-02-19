
import './App.css';

import Button from './components/button/button';
import ConditionalRendering from './components/conditonal_rendering/PackingList';

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

  return (

    <div className="App" >

      <h3>
        {
          age > 20 & age < 40 ? "Student" : age > 40 ? "Employee" : "Unknown"
        }
      </h3>
      
      {/* Conditional Rendering */}
      {/* <h3>Conditional Rendering</h3>
      <ConditionalRendering data={packingList} /> */}

      <div onClick={parentOnClick}>
        <h3>Interactivity</h3>
        <Button name="Click Me" onClick={onClick1} />
        
        <Button name="Click Me 2" onClick={onClick2} />
      </div>
      
      <form>

        <button type='submit' onClick={onClick1} >submit</button>
      </form>

    </div>

  );
}

function parentOnClick(e) {
  console.log("Parent Clicked");

  // alert("Button 1 clicked!!");

}

function onClick1(e) {
  
  e.stopPropagation();
  
  e.preventDefault();
  
  console.log("Click Me Button Clicked", e);

  // alert("Button 1 clicked!!");

}

function onClick2() {

  alert("Button 2 clicked!!");

}

export default App;
