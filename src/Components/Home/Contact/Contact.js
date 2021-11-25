import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div
        className="container mt-5 "
        style={{ backgroundColor: "rgb(70, 104, 8)" }}
      >
        <div className="text-center w-70 m-auto">
          <h2 className="font text-danger">Contact Me</h2>
          <form>
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
