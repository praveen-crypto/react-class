import { useState } from "react";
import PreviousState from "../../components/PreviousState";

import UseContextExample from "../../components/UseContextExample";


function Home() {

    const [name, setName] = useState("Admin");

    return (
        <>
            <PreviousState name1={name}  />

            <UseContextExample />
        </>
    )
}

export default Home;
