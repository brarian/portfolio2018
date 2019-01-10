import React, { Component } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <div className="contact_whole">
        <main className="contact_content">
          <div className="contact_main">
            <h3 className="grey_text">
              Currently available for web development opportunities
            </h3>{" "}
            <h4>Brarian Namonywa</h4>
            <h4>brariandev@gmail.com </h4>
            <h4>512 553 8549 </h4>
          </div>
          <div className="sameline">
          <div className="contact_text contact-one">
            <ul>
              <li>
                <a href="mailto:brariannamonywa@gmail.com?subject=Hello">
                  send me an email
                </a>
              </li>
              <li>
                <a href="https://github.com/brarian">github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brarian">linkedin</a>
              </li>
              <li>
                <a href="/Brarian Namonywa Resume.pdf"> resume</a>
              </li>
            </ul>
          </div>
          <div className="contact-two">
            <ul className="contact-icons">
              <li>
                {" "}
                <a href="https://github.com/brarian">
                  <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
                </a>{" "}
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brarian-namonywa-5b3b93b0/">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
                </a>
              </li>
              <li>
                {" "}
                <a href="Brarian Namonywa Resume.pdf">
                  <FontAwesomeIcon icon={faFile} size="3x" color="black" />
                </a>
              </li>
              <li>
                <a href="https://www.brarian.space">
                  <FontAwesomeIcon icon={faLaptop} size="3x" color="black" />
                </a>
              </li>
            </ul>
          </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Contact;
