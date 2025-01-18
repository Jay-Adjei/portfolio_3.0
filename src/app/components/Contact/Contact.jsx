import React from 'react';
import styles from './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Kontakt</h2>
        <p>Du kannst mich über die folgenden Kanäle erreichen:</p>
        <ul>
          <li>Email: <a href="mailto:deinemail@example.com">deinemail@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/deinprofil">linkedin.com/in/deinprofil</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
