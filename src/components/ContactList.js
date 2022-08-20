import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { Context } from "../API/Context";

function ContactList(props) {
  const { allContacts } = useContext(Context);

  const contactElem = allContacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} />
  ));

  return (
      <div>
        <h4 style={{textAlign:"center"}}>
          {contactElem.length < 1
            ? "Please click 'Add new contact' to add your contacts"
            : `You have ${contactElem.length} contacts`}
        </h4>

        <div className="contactListContainer">{contactElem}</div>
      </div>
   
  );
}

export default ContactList;
