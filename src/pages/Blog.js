import React, { Component } from "react";
import homeImage from "../images/homeImage.svg";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <section className="imageContainer">
          <div className="homeImage">
            <img src={homeImage} alt="" />
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
            <button>-></button>
          </article>
        </section>
      </div>
    )
  }
}
