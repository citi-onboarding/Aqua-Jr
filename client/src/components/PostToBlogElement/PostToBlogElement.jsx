import React from 'react';
import './PostToBlogElement.css';

function Element(props) {
    return(
        <div className="PostToBlogElement">
            <div className="ElementImage">
                <img src={props.image.url} alt="Ilustração do elemento"/>
            </div>
            <div className="category">
                <p>{props.category.toUpperCase()}</p>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Element;
