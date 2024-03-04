import React, { useState } from 'react';

function ValidatedForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
      alert('Form submitted');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ width: '30$', display: 'flex', flexDirection : 'column' }}>
      <h3>Validation using react</h3>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
      </label>
      
      { nameError && <div style={{color: 'red'}}>{nameError} </div> }

      <button type="submit" style={{width: '10%' }}>Submit</button>
    </form>
  );
}

export default ValidatedForm ;
