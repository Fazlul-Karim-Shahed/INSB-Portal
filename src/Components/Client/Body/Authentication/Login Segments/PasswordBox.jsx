import React from "react";
import { AiFillEye } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

export default function PasswordBox({ props }) {
  const [showPass, setShowPass] = useState(false);

  const HandleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div>
      <RiLockPasswordLine className="PassIcon" />
      <input
        className="InputBox"
        placeholder="Enter Your Password"
        type={showPass ? "text" : "password"}
        onChange={props.handleChange}
        value={props.values.password} 
        //prob with the value need to fix
        password="Password"
        required
      />
      <span>
        <AiFillEye
          className="eye"
          type="button"
          aria-hidden="true"
          onClick={HandleShowPassword}
        />
      </span>
    </div>
  );
}
