import React, { Component } from "react"
import dots from "./../images/svg/10dots.svg"

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactBorder">
          <section className="topContact">
            <p className="title">
              We're here to help
              <br />
              manifest your ideas.
            </p>
            <article>
              <a className="titleLink" href="#">
                Start a Project
              </a>
            </article>
          </section>
        </div>
        <section className="bottomContact">
          <section className="notSocialLinks">
            <img id="dots" src={dots} alt="dots" />
            <div>
              <article className="contactColumn">
                <h5>San Diego</h5>
                <p className="contactDescriptions">
                  777 Road, Suite A<br />
                  San Diego, California
                </p>
              </article>
              <article className="contactColumn">
                <h5>Barcelona</h5>
                <p className="contactDescriptions">
                  777 Carrer, Suite B<br />
                  Barcelona, Spain
                </p>
              </article>
            </div>
            <div>
              <article className="contactColumn">
                <h5>StefDigi</h5>
                <p className="contactDescriptions">
                  Showcasing our approach to meaningful experiences
                </p>
              </article>
              <article className="contactColumn">
                <a href="https://www.stefanhranek.com">stefdigi.com</a>
              </article>
            </div>
            <div>
              <article className="contactColumn">
                <h5>Email Us</h5>
                <a href="mailto:hranekstefan@gmail.com">stefco@gmail.com</a>
              </article>
              <article className="contactColumn">
                <p className="emailMessage">
                  Have questions?
                  <br />
                  Send us a message!
                </p>
              </article>
            </div>
          </section>
          <div className="socialLinks">
            <a href="#">Dribbble</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </section>
      </div>
    )
  }
}
