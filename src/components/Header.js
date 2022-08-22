import React, {useState} from "react";
import { Link } from "react-router-dom";

function Header() {
  
  const [searchData, serSearchData] = useState("");

  function handleChange(){

  }

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
          onChange={handleChange}
        />
      </nav>
    </div>
  );
}

export default Header;
