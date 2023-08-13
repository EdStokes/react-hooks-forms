
import React, {useState} from "react";
import Form from "./Form";
import ParentComponent from "./ParentComponent"

function App() {
    return (
        <>
        <Form />
        <br></br>
        <br></br>
        <h1>Controled Form</h1>
        <ParentComponent />
        </>
    )
}

export default App;