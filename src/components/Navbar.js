import React, { Component } from "react"
import rightArrow from "../images/arrowRight.svg"
import { Link } from "react-scroll"

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>stefco</h1>
        <ul className="topNav">
          <Link
            className="navLink underline"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
          <Link
            className="navLink underline"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
           Service
          </Link>
          <Link
            className="navLink underline"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="navLink underline"
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Blog
          </Link>
          <Link
            className="navLink underline"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
          
          <li>Service</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button>
          <img src={rightArrow} alt="right arrow" />
          Start A Project
        </button>
      </div>
    )
  }
}
