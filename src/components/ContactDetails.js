import React from "react";
import image from "../images/profile.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
            <i className="fa-solid fa-user"></i>
            {name}
          </h2>
          <h2>
            <i className="fa-solid fa-envelope"></i>
            {email}
          </h2>
          <h2>
            <i className="fa-solid fa-square-phone"></i>
            {phone}
          </h2>
        </div>

        <div className="button-container">
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
