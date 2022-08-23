import React from "react";
import image from "../images/profile.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import phoneIcon from "../images/phone.png"
import emailIcon from "../images/email.png"
import userIcon from "../images/user.png"

export default function ContactDetails(props) {
  const location = useLocation();

  const { name, email, phone } = location.state;

  return (
    <div className="contactDetailsContainer">
      <div className="image-section">
        <img src={image} alt="user image" />
      </div>

      <div className="details-section">
        <div className="details-container">
          <h2>
            <img  src={userIcon} alt="contact name" />
            {name}
          </h2>
          <h2>
            <img
              
              src={emailIcon}
              alt="email address"
            />
            {email}
          </h2>
          <h2>
            <img
              src={phoneIcon}
              alt="email address"
            />
            {phone}
          </h2>
        </div>

        <div className="button-section">
          <Link className="link" to="/">
            {" "}
            <button className="button">Go Back</button>
          </Link>

          <Link className="link" to="/edit" state={location.state}>
            <button className="button">Edit Contact</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
