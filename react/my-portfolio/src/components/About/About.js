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
          <h3 className="intro">I'm Brarian, a full stack web developer.</h3>
            I'm an experienced Operations Analyst with a demonstrated history of
            working in the information technology and services industry. My
            experience includes SQL and NoSQL Databases, U.S. Health Insurance,
            Management, JavaScript, NodeJS, React and Redux. My passion is
            helping others and solving problems. I aspire to use technology to
            innovate products and services that positively impact people and
            bring them joy.
            <h3 className="intro1">What I Do</h3>
            <ul className="skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>React</li>
              <li>Redux</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>REST APIs</li>
              <li>AJAX</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Jest</li>
              <li>TDD</li>
              <li>Git</li>

            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
