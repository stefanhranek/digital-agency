import React from "react"
import { Link } from "gatsby"

import "./../styles/App.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Projects from "./Projects"
import Blog from "./Blog"
import Contact from "./Contact"
import Companies from "./../components/Companies"
import Navbar from "./../components/Navbar";
import HamburgerMenu from "./../components/HamburgerMenu";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <HamburgerMenu />
    <Navbar />
    <Home />
    <Companies />
    <About />
    <Services />
    <Projects />
    <Blog />
    <Contact />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
