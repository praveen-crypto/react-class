
import './App.css';

//import Button from './components/button/button';
import ConditionalRendering  from './components/conditonal_rendering/PackingList';

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

      {/* Show here */}

      <hr></hr>

      {/* Conditional Rendering */}
      
      <ConditionalRendering data={packingList} />

    </div>

  );
}

export default App;
