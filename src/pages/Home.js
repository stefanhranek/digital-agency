import React, { Component } from "react"
import IconHome1 from "../components/IconHome1"
import IconHome2 from "../components/IconHome2"
import IconHome3 from "../components/IconHome3"
import homeImage from "../images/homeImage.svg"
import downArrow from "../images/arrowDown.svg"

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <section>
            <p className="subtitle">DIGITAL AGENCY</p>
            <div className="circle" />
            <h1 className="title">
              We Bring
              <br />
              Ideas to Life
            </h1>
            <article className="homeDescriptionButton">
              <p className="descriptionHome">
                We're a team of designers and brand
                strategists who create beautiful websites
              </p>
              <button>
                <img src={ downArrow } alt="arrow" />
                Explore projects
              </button>
            </article>
          </section>
          <section className="imageContainer">
            <div className="homeImageBackground">
              <img className="homeImage" src={homeImage} alt="" />
              <div className="tabContainer">
                <div className="homeImageTab one">
                  <div className="square">
                    <IconHome1 />
                  </div>
                  <article>Research</article>
                </div>
                <div className="homeImageTab two">
                  <div className="square">
                    <IconHome2 />
                  </div>
                  <article>UI Design</article>
                </div>
                <div className="homeImageTab three">
                  <div className="square">
                    <IconHome3 />
                  </div>
                  <article>Analysis</article>
                </div>
              </div>
              <p className="sidewaysText">WE WORK WITH PASSION!</p>
            </div>
          </section>
        </div>
      </>
    )
  }
}
