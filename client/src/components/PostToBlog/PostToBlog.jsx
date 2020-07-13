import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PostToBlog.css';
import Slider from 'react-slick';
import axios from "axios";
import PostToBlogElement from "../PostToBlogElement";

function PostToBlog(){
    const [elements, setElements] = useState([]);
    const LoadPostToBlog = async() => {
        const answer = await axios.get('http://localhost:3001/api/posttoblog');
        setElements(answer.data);
    };
    
    useEffect(() => {
        LoadPostToBlog();
    },[]);


    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll:1,
        appendDots: dots => (
            <div>
                <ul>{ dots }</ul>
            </div>
        )
    };
    return (
        <main className="PostToBlogSlick">
            <div className="PostToBlogCard">
                <Slider {...settings} className="Slider">  
                    {elements.map((PostToBlogCard) =>{
                        return(
                                <PostToBlogElement
                                    title = {PostToBlogCard.title}
                                    category = {PostToBlogCard.category}
                                    image = {PostToBlogCard.image}
                                /> 
                        );

                    })}
                </Slider>    
            </div>
        </main>
    );
}

export default PostToBlog;