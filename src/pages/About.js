import React, { Component } from "react"
import aboutImage2 from "../images/svg/aboutImage2.svg"
import rightArrow from "../images/svg/arrowRight.svg"
import aboutDrawing from "../images/aboutDrawing.png"

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <section className="imageContainer">
          <div className="homeImage">
            <img
              className="abstractDrawing"
              src={aboutImage2}
              alt="abstract drawing"
            />
            <img
              className="circleDrawing"
              src={aboutDrawing}
              alt="abstract drawing"
            />
          </div>
        </section>
        <section className="aboutTextSection">
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
