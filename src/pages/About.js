import React, { Component } from "react"
import IconHome1 from "../components/IconHome1"
import IconHome2 from "../components/IconHome2"
import IconHome3 from "../components/IconHome3"
import homeImage from "../images/homeImage.svg"

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="imageContainer">
          <div className="homeImage">
            <img src={homeImage} alt="" />
            <p className="sidewaysText">EXPLORE AND CREATE!</p>
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
          <p className="description">
            We're a team of design practitioners at Stefco
            <br />
            who transform organizations through education.
          </p>
          <button>Learn About Us</button>
        </section>
      </div>
    )
  }
}
