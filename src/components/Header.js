import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h2>Contact Manager</h2>

      <nav>
        <button className="button">
          <Link className="links" to="/add">
            Add New Contact
          </Link>
        </button>

        <input
          type="text"
          placeholder="Search Contacts"
          className="input searchbar"
        />
      </nav>
    </div>
  );
}
// #6FC3F7
// #1813A2

export default Header;
