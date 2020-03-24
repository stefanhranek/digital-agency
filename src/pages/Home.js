import React, { Component } from "react"
import homeImage from "../images/svg/homeImage.svg"
import downArrow from "../images/svg/arrowDown.svg"
import Image from "../components/Images"

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
                We're a team of designers and brand strategists who create
                beautiful websites
              </p>
              <button>
                <img src={downArrow} alt="arrow" />
                Explore projects
              </button>
            </article>
          </section>
          <section className="imageContainerHome">
            <div className="homeImageBackground">
              <img className="homeImage" src={homeImage} alt="" />
              <div className="tabContainerHome">
                <div className="homeImageTabHome one">
                  <div className="squareHome">
                    <Image filename="homeIcon1.png" />
                  </div>
                  <article>Research</article>
                </div>
                <div className="homeImageTabHome two">
                  <div className="squareHome">
                    <Image filename="homeIcon2.png" />
                  </div>
                  <article>UI Design</article>
                </div>
                <div className="homeImageTabHome three">
                  <div className="squareHome">
                    <Image filename="homeIcon3.png" />
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
