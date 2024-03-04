import { useState } from "react";
import PreviousState from "../../components/PreviousState";

import UseContextExample from "../../components/UseContextExample";
import Form from "../../components/Forms/Form";

function Home() {

    const [name, setName] = useState("Admin");

    return (
        <>
            {/* <PreviousState name1={name}  />

            <UseContextExample /> */}

            <Form />
        </>
    )
}

export default Home;
