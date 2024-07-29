import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function contactChange(event) {
    const { value, name } = event.target;
    setContact((preValue) => {
      switch (name) {
        case "fName":
          return {
            fName: value,
            lName: preValue.lName,
            email: preValue.email,
          };
          break;
        case "lName":
          return {
            fName: preValue.fName,
            lName: value,
            email: preValue.email,
          };
          break;
        case "email":
          return {
            fName: preValue.fName,
            lName: preValue.lName,
            email: value,
          };
          break;
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={contactChange} placeholder="First Name" />
        <input name="lName" onChange={contactChange} placeholder="Last Name" />
        <input name="email" onChange={contactChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
