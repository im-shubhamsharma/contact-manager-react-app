import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddContacts from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import ContactDetails from "./components/ContactDetails";
import { Switch, Route } from "react-router-dom";
import "./styles/css/style.css";

export default function () {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/">
            <ContactList />
          </Route>

          <Route path="/add">
            <AddContacts />
          </Route>

          <Route path="/edit">
            <EditContact />
          </Route>

          <Route path="/contact-info">
            <ContactDetails />
          </Route>
        </Switch>
      </main>

      <Footer />
    </>
  );
}
