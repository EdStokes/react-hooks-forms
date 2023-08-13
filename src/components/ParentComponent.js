import React, {useState} from "react";
import ControledForm from "./ControledForm";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henery");

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        console.log(firstName)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
        console.log(lastName)
    }

    return (
        <ControledForm
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        />
    )
}

export default ParentComponent;