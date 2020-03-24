import React, { Component } from "react"
import IconService from "../components/lazyloads/IconService"
import serviceImage from "../images/svg/serviceImage.svg"
import serviceImage2 from "../images/svg/serviceImage2.svg"
import serviceImage3 from "../images/svg/serviceImage3.svg"
import serviceImage4 from "../images/svg/serviceImage4.svg"
import serviceImage5 from "../images/svg/serviceImage5.svg"
import serviceImage6 from "../images/svg/serviceImage6.svg"

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <section className="topServices">
          <div className="circle" />
          <p className="subtitle">SERVICES</p>
          <h1 className="title">
            Designed for today
            <br />
            and built for tomorrow
          </h1>
        </section>
        <section className="serviceTabContainer">
          <article className="serviceTab">
            <div className="rectangle" />
            <img src={serviceImage5} alt="icon" />
            <p>Brand Identity</p>
            <section>
              <IconService />
            </section>
          </article>
          <article className="serviceTab">
            <div className="rectangle two" />
            <img src={serviceImage3} alt="icon" />
            <p>Product Design</p>
            <section>
              <IconService />
            </section>
          </article>
          <article className="serviceTab">
            <div className="rectangle three" />
            <img src={serviceImage2} alt="icon" />
            <p>UX/UI Design</p>
            <section>
              <IconService />
            </section>
          </article>
          <article className="serviceTab">
            <div className="rectangle four" />
            <img src={serviceImage4} alt="icon" />
            <p>Web Design</p>
            <section>
              <IconService />
            </section>
          </article>
          <article className="serviceTab">
            <div className="rectangle five" />
            <img src={serviceImage} alt="icon" />
            <p>App Design</p>
            <section>
              <IconService />
            </section>
          </article>
          <article className="serviceTab">
            <div className="rectangle six" />
            <img src={serviceImage6} alt="icon" />
            <p>Development</p>
            <section>
              <IconService />
            </section>
          </article>
        </section>
      </div>
    )
  }
}
