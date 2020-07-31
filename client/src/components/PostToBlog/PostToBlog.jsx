import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PostToBlog.css';
import Slider from 'react-slick';
import axios from "axios";
import PostToBlogElement from "../PostToBlogElement";




function NextArrow(props) {
    return <div className={ props.className } onClick={ props.onClick } />;
}

function PrevArrow(props) {
    return <div className= { props.className } onClick={ props.onClick } />;
}



function PostToBlog(){
    const [elements, setElements] = useState([]);
    const LoadPostToBlog = async() => {
        const answer = await axios.get('https://aqua-jr.herokuapp.com/api/posttoblog');
        setElements(answer.data);
    };
    
    useEffect(() => {
        LoadPostToBlog();
    },[]);


    let settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 500,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll:1,
        appendDots: dots => (
            <div>
                <PrevArrow 
                className="slick-prev"
                onClick={() => {
                    document.querySelector(".slick-prev.slick-arrow").click();
                }}
                />
                <ul>{ dots }</ul>
                <NextArrow
                className="slick-next"
                onClick={() => {
                    document.querySelector(".slick-next.slick-arrow").click();
                }}
                />
            </div>
        ),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "-80px",
                },
            }
        ],
    };
    return (
        <main className="PostToBlogSlick">
            <div className="PostToBlogCard">
                <Slider {...settings} className="Slider">  
                    {elements.map((PostToBlogCard, index) =>{
                        return(
                                <PostToBlogElement
                                    title = {PostToBlogCard.title}
                                    category = {PostToBlogCard.category}
                                    image = {PostToBlogCard.image}
                                    link = {PostToBlogCard.link}
                                    key = {index}
                                /> 
                        );

                    })}
                </Slider>    
            </div>
        </main>
    );
}

export default PostToBlog;