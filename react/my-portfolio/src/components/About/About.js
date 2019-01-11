import React, { Component } from "react";
import austin from "./austin1.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className={About.js} >
        <section className="about_me">
        <div>
        <img src={austin} alt="welcome to austin mural" className="responsive"/> 
        </div>
        <div className="description">
          <h3>I'm Brarian, a full stack web developer.</h3>
            I'm an experienced Operations Analyst with a demonstrated history of
            working in the information technology and services industry. My
            experience includes SQL and NoSQL Databases, U.S. Health Insurance,
            Management, JavaScript, NodeJS, React and Redux. My passion is
            helping others and solving problems. I aspire to use technology to
            innovate products and services that positively impact people and
            bring them joy.
          </div>
        </section>
      </div>
    );
  }
}

export default About;
