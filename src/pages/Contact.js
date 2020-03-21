import React, { Component } from "react"
import dots from "./../images/10dots.svg"

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
              <article>
                <h5>San Diego</h5>
                <p>
                  777 Road, Suite A<br />
                  San Diego, California
                </p>
              </article>
              <article>
                <h5>Barcelona</h5>
                <p>
                  777 Carrer, Suite B<br />
                  Barcelona, Spain
                </p>
              </article>
            </div>
            <div>
              <article>
                <h5>StefDigi</h5>
                <p>
                  A digital experience to
                  <br /><p className="hideP"> </p>
                  showcase our approach
                  <br /><p className="hideP"> </p>
                  to building tech
                </p>
              </article>
              <article>
                <a href="https://www.stefanhranek.com">www.stefco.com</a>
              </article>
            </div>
            <div>
              <article>
                <h5>Email Us</h5>
                <a href="mailto:hranekstefan@gmail.com">
                  stefco@gmail.com
                </a>
              </article>
              <article>
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
