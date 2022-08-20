import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <input
          type="text"
          placeholder="Search Contacts"
          className="input searchbar"
        />

        <button className="button">
          <Link className="links" to="/add">
            Add New Contact
          </Link>
        </button>
      </div>
    </>
  );
}
