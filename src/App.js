import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddContacts from './components/AddContact'
import ContactList from './components/ContactList'
import "./App.css"

export default function(){
    return(
        <>
            <Header />
            
            <main>
                <AddContacts />
                <ContactList />
            </main>
            

            <Footer />
        </>
    )
}