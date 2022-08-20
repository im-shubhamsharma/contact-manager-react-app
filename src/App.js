import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddContacts from './components/AddContact'
import ContactCard from './components/ContactCard'
import "./App.css"

export default function(){
    return(
        <>
            <Header />
            
            <main>
                <AddContacts />
                <ContactCard />
            </main>
            

            <Footer />
        </>
    )
}