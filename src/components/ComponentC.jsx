import React, { useContext } from 'react'
import { Name, Age } from './UseContextExample';

function ComponentC() {
    const name = useContext(Name);
    const age = useContext(Age);

    return (
        <>
            <Name.Consumer>
                {
                    name => {
                        return (
                            <Age.Consumer>
                                {
                                    age => {
                                        return (

                                            <h3>Name is {name}. Age is {age} 
                                                Rendered from Component C</h3>
                                        )
                                    }
                                }
                            </Age.Consumer>
                        )
                    }
                }
            </Name.Consumer>
            
            <h3> Name is {name}. Age is {age} Rendered from Component C By Using UseContext.</h3>
        </>
    )
}

export default ComponentC

