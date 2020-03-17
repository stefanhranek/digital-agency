import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h1>stefco</h1>
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Work</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <button>Start A Project</button>
            </div>
        )
    }
}
