import { useEffect } from "react"


function UseEffectExample({ value, name }) {

    useEffect(() => {

        document.title = `Updated ${value} times.`;

    }, [value])

    return (
        <div>
            <h3>Name is {name}. Printing from UseEffec Component.</h3>
        </div>
    )
}

export default UseEffectExample

