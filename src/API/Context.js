import React, { useState, useEffect } from "react";
import data from "./data";
const Context = React.createContext();

function ContextProvider(props) {
  const [allContacts, setAllContacts] = useState(getData());

  const [selectedContactData, setSelectedContactData] = useState([]);

  const [searchData, setSearchData] = useState("");

  const [filteredData, setFilteredData] = useState("");

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

  function selectContact(id) {
    setSelectedContactData(allContacts.filter((contact) => contact.id === id));
  }

  function updateContact(updatedContact) {
    setAllContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  }

  function searchContacts() {
    const filteredData = allContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchData.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchData.toLowerCase())
    );

    setFilteredData(filteredData);
  }

  return (
    <Context.Provider
      value={{
        allContacts,
        addNewContact,
        deleteContact,
        updateContact,
        searchData,
        setSearchData,
        searchContacts,
        filteredData,
        selectedContactData,
        selectContact,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
