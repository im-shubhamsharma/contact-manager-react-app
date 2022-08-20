import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allContacts, setAllContacts] = useState(getDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(allContacts));
  }, [allContacts]);

  function getDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("contact"));
    return data ? data : [];
  }

  function addNewContact(contact) {
    setAllContacts((prevContacts) => [...prevContacts, contact]);
  }

  function deleteContact(id) {
    setAllContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  console.log(allContacts);

  return (
    <Context.Provider value={{ allContacts, addNewContact, deleteContact }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
