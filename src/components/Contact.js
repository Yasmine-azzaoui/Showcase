import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <p className="contact-intro">
        I&apos;d love to connect! Whether you&apos;re interested in collaboration, have a project
        in mind, or just want to say hello &mdash; reach out via any of the channels below.
      </p>

      <ul className="contact-links" role="list">
        <li>
          <a
            href="mailto:yasmineazzaoui2@gmail.com"
            className="contact-link contact-link--email"
            aria-label="Send an email to Yasmine Azzaoui"
          >
            <span role="img" aria-label="Email icon">📧</span>
            <span>yasmineazzaoui2@gmail.com</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/yasmine-azzaoui-8b0a8116b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link--linkedin"
            aria-label="Visit Yasmine Azzaoui's LinkedIn profile"
          >
            <span role="img" aria-label="LinkedIn icon">💼</span>
            <span>LinkedIn Profile</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Yasmine-azzaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link--github"
            aria-label="Visit Yasmine Azzaoui's GitHub profile"
          >
            <span role="img" aria-label="GitHub icon">🐙</span>
            <span>GitHub Profile</span>
          </a>
        </li>
      </ul>

      <p className="contact-placeholder-note" role="note">
      </p>
    </div>
  );
}

export default Contact;
