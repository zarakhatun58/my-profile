import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="text-center w-70 m-auto">
          <h2 className="font" style={{ color: " rgb(70, 104, 8)" }}>
            Contact Me
          </h2>
          <form
            style={{ backgroundColor: "pink" }}
            action="https://form.jotform.com/213330570532445"
          >
            <input
              className="w-75 input"
              type="text"
              placeholder="Your Name"
              required
            />
            <br />
            <input
              type="email"
              className="w-75 input"
              placeholder="Your Email"
              required
            />
            <br />
            <input
              className="w-75 input-message"
              type="text"
              placeholder="Type your message"
              required
            />
            <br />
            <button type="submit" className="btn submit-btn input">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
