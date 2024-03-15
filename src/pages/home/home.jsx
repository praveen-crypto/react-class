import { useState } from "react";
import PreviousState from "../../components/PreviousState";

import UseContextExample from "../../components/UseContextExample";
import Form from "../../components/Forms/Form";
import DataTable from "../../components/API/datatable";

function Home() {

    const [name, setName] = useState("Admin");
    
    return (
        <>
            {/* <PreviousState name1={name}  />

            <UseContextExample /> */}

            {/* <Form /> */}

            <DataTable></DataTable>
        </>
    )
}

export default Home;
