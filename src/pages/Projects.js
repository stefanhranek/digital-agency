import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCard2 from "../components/ProjectCard2";
import rightArrow from "../images/svg/arrowRight.svg";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects" id="work">
        <section className="topProjects">
          <div>
            <div className="circle" />
            <p className="subtitle">PROJECTS</p>
            <h1 className="title">Featured Projects</h1>
          </div>
          <button>
            <img src={rightArrow} alt="right arrow" />
            Explore All Projects
          </button>
        </section>
        <section className="projectCardContainer">
          <ProjectCard />
          <ProjectCard2 />
        </section>
      </div>
    )
  }
}
