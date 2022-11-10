import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function EmailBox({ props }) {
  function EmailValidation() {
    const ValidDomain = "@northsouth.edu";
    const mail = props.values.Email;
    if (mail.split("@")[1] === ValidDomain) {
      console.log("Valid Email!");
    }
  }

  return (
    <div>
      <HiOutlineMail className="EmailIcon" />
      <input
        className="InputBox"
        placeholder="Enter Your Email"
        type="text"
        onChange={props.handleChange}
        value={props.values.name}
        name="Email"
        required
      />
    </div>
  );
}
