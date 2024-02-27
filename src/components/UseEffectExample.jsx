import { useEffect } from "react"


function UseEffectExample({value}) {

    useEffect( () => {

        document.title = `Updated ${value} times.`;

    }, [value] )

    

    return (
        <div>
            
        </div>
    )
}

export default UseEffectExample

