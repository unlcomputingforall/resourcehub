import React from 'react';
function ResourceCard(props) {
    return(
        <article>
        <a href={props.link} class="image"><img src={props.image} alt={props.altText}/></a>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul class="actions">
            <li><a href={props.moreInfoLink} class="button">More</a></li>
        </ul>
        </article>
    );
}

export default ResourceCard;