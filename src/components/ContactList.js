import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { Context } from "../API/Context";

function ContactList(props) {
  const { allContacts, filteredData, searchData } = useContext(Context);

  let data;
  if(searchData.length > 0){
      data = filteredData;
  }else{
      data = allContacts;
  }

  const contactElem = data.map((contact) => (
    <ContactCard key={contact.id} contact={contact} />
  ));


  return (
      <div>
        <h4 style={{textAlign:"center"}}>
          {contactElem.length < 1
            ? (searchData.length > 0 ? "No result found for your search" : "Please click 'Add new contact' to add your contacts")
            : `You have ${contactElem.length} contacts`}
        </h4>

        <div className="contactListContainer">{contactElem}</div>
      </div>
   
  );
}

export default ContactList;
