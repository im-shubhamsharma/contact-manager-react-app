import React, { useState, useEffect } from "react";
import data from "./data";
const Context = React.createContext();

function ContextProvider(props) {
  // console.log(data);
  const [allContacts, setAllContacts] = useState(getData());

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(allContacts));
  }, [allContacts]);

  function getData() {
    const storedData = JSON.parse(localStorage.getItem("contact"));
    return storedData.length < 1 ? data : storedData;
  }

  function addNewContact(contact) {
    setAllContacts((prevContacts) => [...prevContacts, contact]);
  }

  function deleteContact(id) {
    setAllContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  // console.log(allContacts);

  return (
    <Context.Provider value={{ allContacts, addNewContact, deleteContact }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
