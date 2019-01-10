import React, { Component } from "react";
import "./MyWork.css";

class MyWork extends Component {
  render() {
    return (
      <div className="body" >
        <h2>MY WORK</h2>
        <main className="mywork_whole">
        <div className="my_work1">
          <img className="my_work_img" alt="austin" src="/images/shipped.png" />
          <h3>Shipped</h3>
          <span className="work_desc">
            Have you ever wanted tv show or movie merch but not known where to
            find it? That’s where shipped! comes in. shipped! utilizes that the
            Etsy and Tastedive APIs to connect loyal fans to the one of a kind
            fan merchendise made by etsy crafters! Shipped! was built using
            jQuery, JavaScript, CSS, HTML, and BootStrap. <br />
            <button>
              <a href="https://brarian.github.io/shippedapp/index.html">Live</a>
            </button>
            <button>
              <a href="https://github.com/brarian/shippedapp">Code</a>
            </button>
          </span>
        </div>

        <div className="my_work2">
          <img className="my_work_img" alt="austin" src="/images/littlemixer.png" />
          <h3>Little Mixer</h3>
          <span>
            Little Mixer is an app which guides users through the process of
            planning and throwing a Dinner or Cocktail Party. Little Mixer’s
            intent is to make entertaining, a process that is seems overwhelming
            achievable. Given a plan anyone can be a great host. <br />
            <br />
            Little Mixer was built with Node, React, Redux, and is styled with
            Foundation. <br />
            <button>
              <a href="https://sleepy-nobel-53296b.netlify.com/">Live</a>
            </button>
            <button>
              <a href="https://github.com/brarian/new-party-app">Code</a>
            </button>
          </span>
        </div>

          <div className="my_work3">
          <span className="work_images">
            <img className="my_work_img" alt="austin" src="/images/homepage.png" />
            <img className="my_work_img" alt="austin" src="/images/sep.png" />
          </span>
          <h3>Currently under construction: K12 Engineering Podcast</h3>
          <span>
            The website for a podcast is for educators, engineers,
            entrepreneurs, and parents out there who want to instill engineering
            thinking into young people.
          </span>
          </div>


          </main>
      </div>
    );
  }
}

export default MyWork;
