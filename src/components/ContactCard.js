import React, { useContext } from "react";
import { Context } from "../API/Context";
import { Link } from "react-router-dom";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/trash.png";

export default function ContactCard(props) {
  const { deleteContact } = useContext(Context);
  const { id, name, email } = props.contact;

  return (
    <div className="contactCardContainer">
      <div className="contactDetails">
        <Link className="link" to="/contact-info" state={props.contact}>
          <p className="contactName">{name}</p>
          <p className="contactEmail">{email}</p>
        </Link>
      </div>

      <div className="editIcon">
        <Link to="/edit" state={props.contact}>
          <img src={editIcon} alt="edit contacts" />
        </Link>
      </div>

      <div onClick={() => deleteContact(id)} className="deleteIcon">
        <img src={deleteIcon} alt="delete contacts" />
      </div>
    </div>
  );
}
