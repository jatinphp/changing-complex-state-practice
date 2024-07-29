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
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          onChange={contactChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={contactChange}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={contact.email}
          onChange={contactChange}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
