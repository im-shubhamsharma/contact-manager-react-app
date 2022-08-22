import React, { useState, useEffect } from "react";
import data from "./data";
const Context = React.createContext();

function ContextProvider(props) {
  const [allContacts, setAllContacts] = useState(getData());

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(allContacts));
  }, [allContacts]);

  function getData() {
    const storedData =  JSON.parse(localStorage.getItem("contact"));
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

  function updateContact(updatedContact){
     setAllContacts((prevContacts) =>
       prevContacts.map((contact) =>
         contact.id === updatedContact.id ? updatedContact : contact
       )
     );
  }

  return (
    <Context.Provider
      value={{
        allContacts,
        addNewContact,
        deleteContact,
        updateContact,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
