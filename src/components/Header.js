import React, { useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Context } from "../API/Context";

const Header = () => {
  const { searchData, setSearchData, searchContacts } = useContext(Context);


  function handleChange(event) {
    <Redirect to="/" />;

    const { value } = event.target;
    setSearchData(value);
    searchContacts();
  }

  return (
    <div className="header">
      <div className="header-container">
        <h2 className="title">
          <Link className="link" to="/">
            Contact Manager
          </Link>
        </h2>

        <nav>
          <Link className="link addContactsButton" to="/add">
            <button className="button ">Add New Contact</button>
          </Link>

          <input
            type="text"
            placeholder="Search Contacts"
            className="searchBar"
            value={searchData}
            onChange={handleChange}
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;
