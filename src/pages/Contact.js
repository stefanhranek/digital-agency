import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section>
                    <p className="title">We're here to help<br/>manifest your ideas.</p>
                    <a className="title" href="#">Start a Project</a>
                </section>
                <section>
                    <div>
                        <article>
                            <h5>San Diego</h5>
                            <p>777 Road, Suite A<br/>San Diego, California</p>
                        </article>
                        <article>
                            <h5>Barcelona</h5>
                            <p>777 Carrer, Suite B<br/>Barcelona, Spain</p>
                        </article>
                    </div>
                    <div>
                        <article>
                            <h5>StefDigi</h5>
                            <p>A digital experience to showcase our creative approach</p>
                        </article>
                        <article>
                            <a href="https://www.stefanhranek.com"></a>
                        </article>
                    </div>
                    <div>
                        <article>
                            <h5>Start a conversation</h5>
                            <a href="mailto:hranekstefan@gmail.com">hranekstefan@gmail.com</a>
                        </article>
                        <p>Don't be shy,<br/>send us a message!</p>
                    </div>
                    <div>
                        <a href="#">Dribbble</a>
                        <a href="#">Behance</a>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                    </div>
                </section>
            </div>
        )
    }
}
