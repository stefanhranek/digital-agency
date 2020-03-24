import React, { Component } from "react"
import rightArrow from "../images/svg/arrowRightBlack.svg"
import projectCardImage from "../images/projectCard.png"

export default class ProjectCard2 extends Component {
  render() {
    return (
      <div className="projectCard p2">
        <section className="projectImageContainer" />
        <section className="left">
          <p className="subtitle">WEB DESIGN</p>
          <h3 className="title">
            Spotcheck provides skaters a map to the best spots
          </h3>
          <p className="description">
            Explore, discover, create, share. Lift up the skateboard community!
          </p>
          <button>
            <img src={rightArrow} alt="right arrow" />
            Visit The Website
          </button>
        </section>
        <section className="right">
          <img src={projectCardImage} alt="app screenshot" />
        </section>
      </div>
    )
  }
}
