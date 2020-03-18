import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <section className="topServices">
                    <div className="circle"/>
                    <p className="subtitle">SERVICES</p>
                    <h1 className="title">Designed for today<br/>and built for tomorrow</h1>
                </section>
                <section>
                    <article>Brand Identity</article>
                    <article>Product Design</article>
                    <article>UI/UX Design</article>
                    <article>Web Design</article>
                    <article>App Design</article>
                    <article>Development</article>
                </section>
            </div>
        )
    }
}
