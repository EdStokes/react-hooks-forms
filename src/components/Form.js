import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
    console.log(firstName)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
    console.log(lastName)
  }

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked)
    console.log(newsletter)
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
      <label htmlFor="newsletter">Subscribe to our Newslatter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
        />
    </form>


  );
}



export default Form;
