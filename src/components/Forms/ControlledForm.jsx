import React, { useState, useEffect } from 'react';

function ControlledForm() {
    const [name, setName] = useState('');

    useEffect(() => {

        console.log(name);
        
    }, [name]);

    return (
        <form >
            <h3>Controlled Form </h3>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value) } />
            </label>
        </form>
    );
}

export default ControlledForm;
