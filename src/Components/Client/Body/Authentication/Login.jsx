import React from "react";
import { Formik } from "formik";
import "./AuthenticationStyles/auth.css";
import EmailBox from "./Login Segments/EmailBox";
import PasswordBox from "./Login Segments/PasswordBox";
import LoginButton from "./Login Segments/LoginButton";

export default function Login() {
  return (
    <div className="loginForm">
      <h1 className="loginText">Welcome</h1>
      <Formik
        initialValues={{
          Email: "",
          ValidMail: "",
          Password: "",
        }}
        onSubmit={(values, actions) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   actions.setSubmitting(false);
          // }, 1000);

          const ValidDomain = "@northsouth.edu";
          const mail = values.Email;
          if (mail.split("@")[1] === ValidDomain) {
            console.log("Valid Email!");
            values.ValidMail = true;
          } else {
            console.log("Invalid Email!");
            values.ValidMail = false;
          }

          {
            console.log("Email & pass is: ", values.Email, values.Password);
          }
        }}
      >
        {(props) => (
          <div className="FormPart">
            <form onSubmit={props.handleSubmit}>
              <EmailBox props={props} />
              {props.values.ValidMail && <p>The Email You Entered is Invalid</p>}

              <PasswordBox props={props} />

              {props.errors.Email && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <LoginButton props={props} />
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
