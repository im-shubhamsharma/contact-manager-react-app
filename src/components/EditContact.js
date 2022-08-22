import React, { useState, useContext } from "react";
import { Context } from "../API/Context";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditContact(props) {
  const { updateContact } = useContext(Context);

  const navigate = useNavigate();

  const location = useLocation();
  const { id, name, email, phone } = location.state;

  const [contact, setContact] = useState({
    id: id,
    name: name,
    email: email,
    phone: phone,
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
      updateContact(contact);

      setContact({
        id: "",
        name: "",
        email: "",
        phone: "",
      });

      navigate("/");
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

      <button className="button">UPDATE</button>
    </form>
  );
}
