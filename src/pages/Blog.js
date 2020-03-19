import React, { Component } from "react"
import blogImage2 from "../images/blogImage2.svg";
import rightArrow from "../images/arrowRight.svg";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <section className="imageContainer">
          <div className="homeImage">
            <img src={blogImage2} alt="" />
            <p className="sidewaysText">EXPLORE AND CREATE!</p>
          </div>
        </section>
        <section>
          <p className="title">
            "It was an amazing experience
            <br />
            sharing and learning alongside
            <br />
            wonderful people from our
            <br />
            industry. The great exchange,
            <br />
            energy, and valuable lessons
            <br />
            will absolutely be extended to
            <br />
            my entire team at Apple."
          </p>
          <article>
            <div>
              <h3 className="name">Stefan Hranek</h3>
              <h4>LEAD UX DESIGNER, APPLE</h4>
            </div>
            <button className="hvr-bob">
              <img src={rightArrow} alt="right arrow" />
            </button>
          </article>
        </section>
      </div>
    )
  }
}
