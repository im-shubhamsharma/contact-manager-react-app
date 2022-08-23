import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { Context } from "../API/Context";
import { useHistory } from "react-router-dom";

export default function AddContacts(props) {
  const { addNewContact } = useContext(Context);

  const history = useHistory();

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

    if (contact.name === "" || contact.email === "" || contact.phone === "") {
      alert("All inputs are necessary");
    } else {
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

      history.push("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input"
        value={contact.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="phone"
        placeholder="Phone Number"
        className="input"
        value={contact.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="input"
        value={contact.email}
        onChange={handleChange}
      />

      <button className="button">Add</button>
    </form>
  );
}
