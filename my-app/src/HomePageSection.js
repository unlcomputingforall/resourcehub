import React, { Component } from 'react';
import ctci from './images/ctci.jpg';
import inhersight from './images/inhersight.jpg';
import diversityunl from './images/diversity-unl.PNG';
import ctpmi from './images/ctpmi.png';
import hackerrank from './images/hackerrank.png';
import projecteuler from './images/projecteuler2.png';
import ResourceCard from './ResourceCard.js';


class HomePageSection extends Component {
    render() {
        return (
            <div>
                <section>
                    <header class="major">
                        <h2>Quick Links</h2>
                    </header>
                    <div class="posts">
                        <ResourceCard link="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=asap_bc?ie=UTF8"
                        image={ctci} altText="Cracking the Coding Interview Photo" title="Cracking the Coding Interview" description="The most famous and widely used resource for preparing for programming interviews. Many companies get their interview questions directly from this book!"
                        moreInfoLink="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=asap_bc?ie=UTF8"
                        />
                        <article>
                            <a href="https://www.inhersight.com/" class="image"><img src={inhersight} alt="" /></a>
                            <h3>InHerSight</h3>
                            <p>A website similar to Glassdoor to help women find jobs with fair benefits, compensation, and good culture.</p>
                            <ul class="actions">
                                <li><a href="https://www.inhersight.com/" class="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="https://diversity.unl.edu/" class="image"><img src={diversityunl} alt="diversity at UNL" /></a>
                            <h3>Diversity at UNL</h3>
                            <p>Learn more about what the University of Nebraska-Lincoln is doing to promote diversity on campus and find resources and statistics.</p>
                            <ul class="actions">
                                <li><a href="https://diversity.unl.edu/" class="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="https://www.amazon.com/dp/B00ISYMUR6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" class="image"><img src={ctpmi} alt="Amazon link to Cracking the PM Interview" /></a>
                            <h3>Cracking the PM Interview</h3>
                            <p>Interested in becoming a Product/Program/Project Manager in your tech career? Check out the PM companion to Cracking the Coding Interview, featuring the best tips and sample questions for PM interviews.</p>
                            <ul class="actions">
                                <li><a href="https://www.amazon.com/dp/B00ISYMUR6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" class="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="https://www.hackerrank.com/" class="image"><img src={hackerrank} alt="" /></a>
                            <h3>HackerRank</h3>
                            <p>This is a website to practice your interviewing skills by participating in coding challenges and competitions.</p>
                            <ul class="actions">
                                <li><a href="https://www.hackerrank.com/" class="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="https://projecteuler.net/" class="image"><img src={projecteuler} alt="Project Euler" /></a>
                            <h3>Project Euler</h3>
                            <p>A website to practice solving math problems and logic puzzles using programming.</p>
                            <ul class="actions">
                                <li><a href="https://projecteuler.net/" class="button">More</a></li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePageSection;