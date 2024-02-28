import React, {useContext} from 'react';

import ComponentC from './ComponentC';

import { Name, Age } from './UseContextExample';

function ComponentB() {
    const name = useContext(Name);
    const age = useContext(Age);

    return (
        <>
            <p>{name} : {age} ----------------</p>
            <ComponentC />
        </>
    )
}

export default ComponentB;

