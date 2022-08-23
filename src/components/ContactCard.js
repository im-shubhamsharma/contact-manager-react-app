import React, { useContext } from "react";
import { Context } from "../API/Context";
import { Link } from "react-router-dom";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";

export default function ContactCard(props) {
  const { selectContact, deleteContact } = useContext(Context);
  const { id, name, email } = props.contact;

  return (
    <div className="contactCardContainer">
      <div onClick={() => selectContact(id)} className="contactDetails">
        <Link className="link" to="/contact-info">
          <p className="contactName">{name}</p>
          <p className="contactEmail">{email}</p>
        </Link>
      </div>

      <div onClick={() => selectContact(id)} className="editIcon">
        <Link to="/edit">
          <img src={editIcon} alt="edit contacts" />
        </Link>
      </div>

      <div onClick={() => deleteContact(id)} className="deleteIcon">
        <img src={deleteIcon} alt="delete contacts" />
      </div>
    </div>
  );
}
