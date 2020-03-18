import React, { Component } from "react"
import ProjectCard from "../components/ProjectCard"

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section className="topProjects">
          <div>
            <div className="circle" />
            <p className="subtitle">PROJECTS</p>
            <h1 className="title">Featured Projects</h1>
          </div>
          <button>Explore All Projects</button>
        </section>
        <section className="projectCardContainer">
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    )
  }
}
