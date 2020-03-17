import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="home">
                    <section>
                        <p className="subtitle">DIGITAL AGENCY</p>
                        <div className="circle"/>
                        <h1 className="title">We Bring<br/>Ideas to Life</h1>
                        <p className="description">We're a team of designers and brand<br/>strategists who create beautiful websites</p>
                        <button>Explore projects</button>
                    </section>
                    <section className="imageContainer">
                        <div className="homeImage">
                            <div className="tabContainer one">
                                <div className="homeImageTab">
                                    <div className="square"></div>
                                    <article>Research</article>
                                </div>
                                <div className="homeImageTab two">
                                    <div className="square"></div>
                                    <article>UI Design</article>
                                </div>
                                <div className="homeImageTab three">
                                    <div className="square"></div>
                                    <article>Analysis</article>
                                </div>
                            </div>
                            <img src="" alt=""/>
                            <p className="sidewaysText">WE WORK WITH PASSION!</p>
                        </div>
                    </section>
                </div>
                <div>
                    <ul>
                        <li>Google</li>
                        <li>Adobe</li>
                        <li>PayPal</li>
                        <li>Artesel</li>
                        <li>Bloom</li>
                    </ul>
                </div>
            </>
        )
    }
}
