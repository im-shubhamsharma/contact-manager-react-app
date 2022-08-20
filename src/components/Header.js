import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h2>
        <Link className="link" to="/">Contact Manager</Link>
      </h2>

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

export default Header;
