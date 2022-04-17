import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/banners/banner-1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Various Adventures</h3>
                        <p>There are various types of adventures will be making with me. This the world largest tourist guide line platforms for making you tour happy and enjoyable.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/banners/banner-2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Complete Guide</h3>
                        <p>Go Tour will provides a complete guide line to explore the place that you want to travel and me and my powerful team will help you in every steps.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/banners/banner-3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Adventurous Trails</h3>
                        <p>If you are a adventures lover than just book my services. I will take you the most attractive place to enjoy your tour. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;