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
                        <ResourceCard link="https://www.inhersight.com/" image={inhersight} altText="" 
                        title="InHerSight" description="A website similar to Glassdoor to help women find jobs with fair benefits, compensation, and good culture." 
                        moreInfoLink="https://www.inhersight.com/"/>

                        <ResourceCard link="https://diversity.unl.edu/" image={diversityunl} altText="diversity at UNL" 
                        title="Diversity at UNL" description="Learn more about what the University of Nebraska-Lincoln is doing to promote diversity on campus and find resources and statistics." 
                        moreInfoLink="https://diversity.unl.edu/"/>

                        <ResourceCard link="https://www.amazon.com/dp/B00ISYMUR6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" image={ctpmi} altText="Amazon link to Cracking the PM Interview" 
                        title="Cracking the PM Interview" description="Interested in becoming a Product/Program/Project Manager in your tech career? Check out the PM companion to Cracking the Coding Interview, featuring the best tips and sample questions for PM interviews." 
                        moreInfoLink="https://www.amazon.com/dp/B00ISYMUR6/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1"/>

                        <ResourceCard link="https://www.hackerrank.com/" image={hackerrank} title="HackerRank" description="This is a website to practice your interviewing skills by participating in coding challenges and competitions." 
                        moreInfoLink="https://www.hackerrank.com/"/>

                        <ResourceCard link="https://projecteuler.net/" image={projecteuler} title="Project Euler" description="This is a website to practice your interviewing skills with math problems." 
                        moreInfoLink="https://projecteuler.net/"/>
                        
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePageSection;