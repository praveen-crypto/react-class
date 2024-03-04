import React, { useState } from 'react';

function FormSubmit() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the email state to a server, log it, etc.
    console.log('Email submitted:', email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

