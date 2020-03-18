import React, { Component } from 'react'
import IconService from '../components/IconService'

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                <section className="topServices">
                    <div className="circle"/>
                    <p className="subtitle">SERVICES</p>
                    <h1 className="title">Designed for today<br/>and built for tomorrow</h1>
                </section>
                <section className="serviceTabContainer">
                    <article className="serviceTab">
                        <img src="" alt=""/>
                        <p>Brand Identity</p>
                        <IconService/>
                    </article>
                    <article className="serviceTab">
                        <p>Product Design</p>
                        <IconService/>
                    </article>
                    <article className="serviceTab">
                        <p>UX/UI Design</p>
                        <IconService/>
                    </article>
                    <article className="serviceTab">
                        <p>Web Design</p>
                        <IconService/>
                    </article>
                    <article className="serviceTab">
                        <p>App Design</p>
                        <IconService/>
                    </article>
                    <article className="serviceTab">
                        <p>Development</p>
                        <IconService/>
                    </article>
                </section>
            </div>
        )
    }
}
