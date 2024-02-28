import { useState, useEffect, useRef } from "react";

import UseEffectExample from "./UseEffectExample";


function PreviousState({name1}) {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
    const [name, setName] = useState("");

    const btnRef = useRef();

    return (
        <>
            <p>Count Value is : <strong>{count}</strong></p>
            
            <input type="text" value={name}  onChange={e => setName(e.target.value) } />
            
            <div>
                <button onClick={ ()=> { setCount( initialValue ) } } >
                    Reset
                </button>
                
                <button id="increment-button" ref={btnRef} onClick={ ()=> {  setCount( xyz => xyz + 1 ) } } >
                    Increment
                </button>
                
                <button onClick={ ()=> { setCount( prevCount => prevCount - 1 ) } } >
                    Decrement
                </button>
            </div>
            
            <UseEffectExample value={count} name={name1} />
        </>
    )

}


export default PreviousState;