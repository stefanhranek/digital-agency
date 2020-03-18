import React, { Component } from "react";
import rightArrow from "../images/arrowRight.svg";
import projectCardImage from "../images/projectCard.png"

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="projectCard">
        <section className="left">
          <p className="subtitle">WEB DESIGN</p>
          <h3 className="title">
            Spotcheck gives
            <br />
            skaters a map
            <br /> to the best spots
          </h3>
          <p className="description">
            Explore, discover, create, share.
            <br />
            Lift up the skateboard community!
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
