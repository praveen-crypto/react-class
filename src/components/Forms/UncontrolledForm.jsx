import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('A name was submitted: ' + nameInputRef.current.value);
  }
  
  return (
    <form onSubmit={handleSubmit} >
      <h3>Uncontrolled form</h3>
      <label>
        Name:
        <input type="text" ref={nameInputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
  
}

export default UncontrolledForm;
