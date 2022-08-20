import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import { Context } from "../API/Context";

export default function AddContacts(props) {
  const { addNewContact } = useContext(Context);

  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newContactObj = {
      ...contact,
      id: nanoid(),
    };

    addNewContact(newContactObj);

    setContact({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="phone"
        placeholder="Phone Number"
        value={contact.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={contact.email}
        onChange={handleChange}
      />

      <button>SUBMIT</button>
    </form>
  );
}
