import React, { Component } from "react"
import blogImage2 from "../images/svg/blogImage2.svg";
import blogCircle from "../images/svg/blogCircle.svg";
import rightArrow from "../images/svg/arrowRight.svg";
import blogInnerCircle from "../images/blogInnerCircle.png";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog" id="blog">
        <section className="imageContainer">
          <div className="homeImage">
            <img className="abstractDrawing" src={blogImage2} alt="abstract drawing" />
            <img className="circleDrawing" src={blogCircle} alt="circle drawing" />
            <img className="circleDrawing inner" src={blogInnerCircle} alt="inner circle drawing" />
            {/* <p className="sidewaysText">EXPLORE AND CREATE!</p> */}
          </div>
        </section>
        <section>
          <p className="title">
            "It was an amazing experience 
            <br /><p className="hideP"> </p>
            sharing and learning alongside 
            <br /><p className="hideP"> </p>
            wonderful people from our 
            <br /><p className="hideP"> </p>
            industry. The great exchange, 
            <br /><p className="hideP"> </p>
            energy, and valuable lessons 
            <br /><p className="hideP"> </p>
            will absolutely be extended to 
            <br /><p className="hideP"> </p>
            my entire team at Apple."
          </p>
          <article>
            <div className="nameContainer">
              <h3 className="name">Spike Speigel</h3>
              <h4>LEAD UX DESIGNER, APPLE</h4>
            </div>
            <button className="hvr-bob">
              <img src={rightArrow} alt="right arrow" />
            </button>
          </article>
        </section>
      </div>
    )
  }
}
