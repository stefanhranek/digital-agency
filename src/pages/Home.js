import React, { Component } from 'react';
import IconHome1 from '../components/IconHome1'
import IconHome2 from '../components/IconHome2'
import IconHome3 from '../components/IconHome3'
import homeImage from '../images/homeImage.svg';

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
                            <img src={homeImage} alt=""/>
                            <div className="tabContainer">
                                <div className="homeImageTab one">
                                    <div className="square">
                                        <IconHome1/>
                                    </div>
                                    <article>Research</article>
                                </div>
                                <div className="homeImageTab two">
                                    <div className="square">
                                        <IconHome2/>
                                    </div>
                                    <article>UI Design</article>
                                </div>
                                <div className="homeImageTab three">
                                    <div className="square">
                                        <IconHome3/>
                                    </div>
                                    <article>Analysis</article>
                                </div>
                            </div>
                            <p className="sidewaysText">WE WORK WITH PASSION!</p>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
