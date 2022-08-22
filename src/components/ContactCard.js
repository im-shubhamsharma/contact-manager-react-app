import React, { useContext } from "react";
import { Context } from "../API/Context";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { deleteContact } = useContext(Context);
  const { id, name, email, phone } = props.contact;

  return (
    <div className="cardContainer">
      {/* <div className="contactImage">
        <i className="fa-solid fa-user"></i>
      </div> */}

      <div className="contactDetails">
        <p className="contactName">{name}</p>
        <p className="contactEmail">{email}</p>
      </div>

      <div className="editIcon">
        <Link to="/edit" state={props.contact}>
          {" "}
          <i
            className="fa-solid fa-pen-to-square"
          ></i>{" "}
        </Link>
      </div>

      <div onClick={() => deleteContact(id)} className="deleteIcon">
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}
