import React, { Component } from "react"
import IconService from "../components/IconService"
import serviceImage from "../images/serviceImage.svg"
import serviceImage2 from "../images/serviceImage2.svg"
import serviceImage3 from "../images/serviceImage3.svg"
import serviceImage4 from "../images/serviceImage4.svg"
import serviceImage5 from "../images/serviceImage5.svg"
import serviceImage6 from "../images/serviceImage6.svg"

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
            <img src={serviceImage} alt="icon" />
            <p>Brand Identity</p>
            <IconService />
          </article>
          <article className="serviceTab">
            <div className="rectangle two" />
            <img src={serviceImage2} alt="icon" />
            <p>Product Design</p>
            <IconService />
          </article>
          <article className="serviceTab">
            <div className="rectangle three" />
            <img src={serviceImage3} alt="icon" />
            <p>UX/UI Design</p>
            <IconService />
          </article>
          <article className="serviceTab">
            <div className="rectangle three" />
            <img src={serviceImage4} alt="icon" />
            <p>Web Design</p>
            <IconService />
          </article>
          <article className="serviceTab">
            <div className="rectangle" />
            <img src={serviceImage5} alt="icon" />
            <p>App Design</p>
            <IconService />
          </article>
          <article className="serviceTab">
            <div className="rectangle two" />
            <img src={serviceImage6} alt="icon" />
            <p>Development</p>
            <IconService />
          </article>
        </section>
      </div>
    )
  }
}
