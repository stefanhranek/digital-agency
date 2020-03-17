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
                    <section>
                        <div>
                            <article>Research</article>
                            <article>UI Design</article>
                            <article>Analysis</article>
                            <img src="" alt=""/>
                            <p>WE WORK WITH PASSION!</p>
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
