import { useState, useEffect, useRef } from "react";

import UseEffectExample from "./UseEffectExample";

function PreviousState() {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const btnRef = useRef();
    
    return (
        <>
            <p>Count Value is : <strong>{count}</strong></p>
            
            <div>
                <button onClick={ ()=> { setCount( initialValue ) } } >
                    Reset
                </button>
                
                <button id="increment-button" ref={btnRef} 
                    onClick={ ()=> { console.log("Button Reference", btnRef); 
                                setCount( xyz => xyz + 1 ) } 
                            } >
                    Increment
                </button>

                <button onClick={ ()=> { setCount( prevCount => prevCount - 1 ) } } >
                    Decrement
                </button>
            </div>
            
            <UseEffectExample value={count}  />
        </>
    )

}


export default PreviousState;