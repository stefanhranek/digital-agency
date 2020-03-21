import React, { Component } from "react"
import IconHome1 from "../components/IconHome1"
import IconHome2 from "../components/IconHome2"
import IconHome3 from "../components/IconHome3"
import aboutImage2 from "../images/aboutImage2.svg"
import aboutDrawing from "../images/aboutDrawing.png"
import rightArrow from "../images/arrowRight.svg"

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="imageContainer">
          <div className="homeImage">
            <img src={aboutImage2} alt="abstract drawing" />
            <img
              className="circleDrawing"
              src={aboutDrawing}
              alt="abstract drawing"
            />
            {/* <p className="sidewaysText">EXPLORE AND CREATE!</p> */}
          </div>
        </section>
        <section>
          <div className="circle" />
          <p className="subtitle">ABOUT</p>
          <h1 className="title">
            We create brands,
            <br />
            build products, and
            <br />
            provide solutions
          </h1>
          <article className="aboutDescriptionButton">
            <p className="description">
              We're a team of design practitioners at Stefco
              <br />
              who transform organizations through education.
            </p>
            <button>
              <img src={rightArrow} alt="right arrow" />
              Learn About Us
            </button>
          </article>
        </section>
      </div>
    )
  }
}
