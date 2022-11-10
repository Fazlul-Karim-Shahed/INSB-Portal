import React from "react";
import { Formik } from "formik";

export default function Login() {
  <div>
    <h1>My Form</h1>
    <Formik

      initialValues={{
        name: "",
        password: "",
      }}

      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
            
          />
          <input 
            type="password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.value.password}
            password="password"
          />
          {console.log("name & pass is: ", props.name, props.password)}
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>;
}
