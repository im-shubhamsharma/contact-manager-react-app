import React, {useContext} from 'react'
import ContactCard from './ContactCard'
import {Context} from '../API/Context'

function ContactList(props){
   
   const {allContacts} = useContext(Context)

   const contactElem = allContacts.map((contact) => (
     <ContactCard key={contact.id} contact={contact} />
   ));

   return <>{contactElem}</>;
}

export default ContactList