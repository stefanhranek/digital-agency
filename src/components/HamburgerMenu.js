import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "react-scroll"

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",

    zIndex: "88888",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#FDF3E5",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#273555",
    padding: "0.8em",
    margin: 0,
  },
  bmItem: {
    display: "inline-block",
    color: "#273555",
    fontWeight: "bold",
    listStyle: "none",
    zIndex: "99999",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default class HamburgerMenu extends Component {
  // showSettings (event) {
  //   event.preventDefault();
  // }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right styles={styles} className="burger">
        <ul className="bmItemList">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <h1>stefco</h1>
          </Link>
          <Link
            className="bmItem"
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
            className="bmItem"
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
            className="bmItem"
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
            className="bmItem"
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
            className="bmItem"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      </Menu>
    )
  }
}
