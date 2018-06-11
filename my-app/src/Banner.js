import React, { Component } from 'react';
import logo from './images/cfalogo.png';

class Banner extends Component {
    render() {
        return (
            <div>
                <section id="banner">
                    <div class="content">
                        <header>
                            <h1>Resource Hub<br />
                            </h1>
                            <p>UNL COMPUTING FOR ALL</p>
                        </header>
                        <p>This website is a collection of knowledge and resources for everyone the tech community, collected and curated by UNL Computing For All. On the left, check out links for popular categories of resources, and scroll down to find quick, popular resources.</p>
                        <p>UNL Computing for All is a recognized student organization at the University of Nebraska-Lincoln to promote diversity in STEM fields.</p>
                        <p>If you have anything you would like to add to this site, you're in luck! The Computing for All Resource Space is an open source project and anyone can contribute to it.</p>
                        <ul class="actions">
                            <li><a href="https://acm-w.unl.edu/computing-all-acm-w-chapter" class="button big">Learn More</a></li>
                        </ul>
                    </div>
                    <span class="image object">
                        <img src={logo} alt="computing for all logo" />
                    </span>
                </section>
            </div>
        );
    }
}

export default Banner;