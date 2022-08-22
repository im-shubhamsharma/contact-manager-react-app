import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddContacts from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import ContactDetails from "./components/ContactDetails";
import {Routes, Route } from "react-router-dom";
import "./App.css";

export default function () {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<ContactList />} />

          <Route path="/add" element={<AddContacts />} />

          <Route path="/edit" element={<EditContact />} />

          <Route path="/contact-info" element={<ContactDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
