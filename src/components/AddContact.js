import React from 'react'

export default function AddContacts(props){
    return (
      <form>
        <input type="text" name="name" placeholder="Name" />

        <input type="number" name="name" placeholder="Phone Number" />

        <input type="email" name="name" placeholder="Email Address" />

        <button>SUBMIT</button>
      </form>
    );
}