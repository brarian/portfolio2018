import React, { Component } from "react";
import "./MyWork.css";
import shipped from "./shipped.png";
import mixer from "./littlemixer.png";
import kepHome from "./kepHome.png";
import kepShowNotes from "./kepShowNotes.png";

class MyWork extends Component {
  render() {
    return (
      <div className="body">
        <main className="mywork_whole">
          <div className="my_work1">
            <img src={shipped} alt="Shipped Homepage" className="responsive1" />
            <h3>Shipped</h3>
            <span className="work_desc">
              Have you ever wanted tv show or movie merch but not known where to
              find it? That’s where shipped! comes in. shipped! utilizes that
              the Etsy and Tastedive APIs to connect loyal fans to the one of a
              kind fan merchendise made by etsy crafters! Shipped! was built
              using jQuery, JavaScript, CSS, HTML, and BootStrap. <br />
              <button>
                <a href="https://brarian.github.io/shippedapp/index.html" class="diff">
                  Live
                </a>
              </button>
              <button >
                <a href="https://github.com/brarian/shippedapp" class="diff">Code</a>
              </button>
            </span>
          </div>

          <div className="my_work2">
            <img
              src={mixer}
              alt="Little Mixer Homepage"
              className="responsive1"
            />
            <h3>Little Mixer</h3>
            <span>
              Little Mixer is an app which guides users through the process of
              planning and throwing a Dinner or Cocktail Party. Little Mixer’s
              intent is to make entertaining, a process that is seems
              overwhelming achievable. Given a plan anyone can be a great host.{" "}
              <br />
              <br />
              Little Mixer was built with Node, React, Redux, and is styled with
              Foundation. <br />
              <button>
                <a href="https://sleepy-nobel-53296b.netlify.com/" class="diff">Live</a>
              </button>
              <button>
                <a href="https://github.com/brarian/new-party-app" class="diff">Code</a>
              </button>
            </span>
          </div>
        </main>

        <div className="my_work3"> 
          <div className="work_images">
            <img
              src={kepHome}
              alt="Little Mixer Homepage"
              className="responsive2"
            />
            <img
              src={kepShowNotes}
              alt="Little Mixer Homepage"
              className="responsive2"

            />
          </div>

          <div className="my_work3_text">
            <h3>Currently under construction: K12 Engineering Podcast</h3>
            The website for a podcast is for educators, engineers,
            entrepreneurs, and parents out there who want to instill engineering
            thinking into young people.
          </div>
        </div>


      </div>
    );
  }
}

export default MyWork;
