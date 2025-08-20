import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="section-title">
        Contact
      </h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="project" hidden>Which Project</label>
          <input
            type="text"
            name="project"
            placeholder="Which Project"
            id="project"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="interest" hidden>Your Interest</label>
          <input
            type="text"
            name="interest"
            placeholder="Your Interest"
            id="interest"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>
        <input type="submit" className="btn hover" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
