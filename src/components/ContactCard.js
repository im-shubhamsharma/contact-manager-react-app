import React from "react";

export default function ContactCard() {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <i className="fa-solid fa-user"></i>
      </div>

      <div>
        <p>Shubham Sharma</p>
        <p>shubh6396@gmail.com</p>
      </div>

      <div className="editIcon">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>

      <div className="deleteIcon">
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}
