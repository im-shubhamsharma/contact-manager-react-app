import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../API/Context";

function Header() {
  const { searchData, setSearchData, searchContacts } = useContext(Context);

  const navigate = useNavigate();

  const useparams = useParams();
  console.log(useparams);

  function handleChange(event) {
    navigate("/");
    const { value } = event.target;
    setSearchData(value);
    searchContacts();
  }

  return (
    <div className="Header">
      <h2>
        <Link className="link" to="/">
          Contact Manager
        </Link>
      </h2>

      <nav>
        <div className="addButton">
          <Link className="links" to="/add">
            <button style={{width:"100%"}} className="button ">Add New Contact</button>
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search Contacts"
          className="input searchbar"
          value={searchData}
          onChange={handleChange}
        />
      </nav>
    </div>
  );
}

export default Header;
