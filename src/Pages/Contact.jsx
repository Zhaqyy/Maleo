/* eslint-disable no-unused-vars */
import React from "react";
import Map from "../Components/Map";
import "../Style/contact.css";

export default function Contact() {
  return (
    <section className="contact-main">

      <div className="cont-map">
        <Map />
      </div>

      <div className="cont-form">
        <h1 className="hollow">Contactez -nous</h1>
        <div id="contact-form">
          <div className="inp-field">
            <input
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Your Name"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
            <span></span>
          </div>
          <div className="inp-field">
            <input
              name="email"
              autoComplete="email"
              type="email"
              placeholder="Your email address"
              //   value={email}
              required
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
          </div>

          <textarea
            placeholder="Your message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* <button onClick={submit}>
            Send Message
          </button> */}
          {/* <SpotBtn
            text={"Send Message"}
            // submit={submit}
          /> */}

          {/* <span className={emailSent ? "visible" : "not-visible"}>
            <p>Thank you for your message, we will be in touch in no time!</p>
          </span>
          <span className={emailSent ? "not-visible" : "visible"}>
            <p>Please Fill in all Fields</p>
          </span> */}
        </div>
      </div>
    </section>
  );
}
