import React from "react";
import "./Contact.css";
import MyForm from "./../Contact/MyForm.js";

const Contact = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="text-center w-70 m-auto">
          <h2 className="font" style={{ color: "crimson" }}>
            Contact Me
          </h2>
          <MyForm> </MyForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
