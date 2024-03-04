
import { createContext } from "react";

import ComponentA from "./ComponentA";

export const Name = createContext();
export const Age = createContext();

function UseContextExample() {
    return (

        <Name.Provider value={"Admin"} >
            <Age.Provider value={"29"} >
                <ComponentA/>
            </Age.Provider>
        </Name.Provider>
        
    )
}

export default UseContextExample
