import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [allContacts, setAllContacts] = useState(getDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(allContacts));
  }, [allContacts]);

  function getDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("contact"));
    return data === ""
      ? data
      : [
          {
            id: 1,
            name: "Captain America",
            email: "steve@avenger.com",
            phone: "1234567890",
          },
          {
            id: 2,
            name: "Winter Soldier",
            email: "buckybarnes@hydra.com",
            phone: "1234567891",
          },
          {
            id: 3,
            name: "Ironman",
            email: "tony@starkindustries.com",
            phone: "1234567892",
          },
          {
            id: 4,
            name: "Thor",
            email: "thor@asguard.com",
            phone: "1234567893",
          },
          {
            id: 5,
            name: "Hulk",
            email: "brucebanner@avenger.com",
            phone: "1234567894",
          },
          {
            id: 6,
            name: "Black Widow",
            email: "natasha@avenger.com",
            phone: "1234567895",
          },
          {
            id: 7,
            name: "Nick Fury",
            email: "nickoneeye@avenger.com",
            phone: "1234567896",
          },
          {
            id: 8,
            name: "Hawkeye",
            email: "clintbarton@avenger.com",
            phone: "1234567897",
          },
        ];
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
