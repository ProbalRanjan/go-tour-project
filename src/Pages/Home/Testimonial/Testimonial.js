import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {

    const { name, title, img, review } = testimonial;

    return (
        <div className='testimonial'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p style={{ color: "#061a3a" }}>{title}</p>
            <FontAwesomeIcon className='testimonial-icon' icon={faQuoteRight} />
            <p><small>{review}</small></p>
        </div>
    );
};

export default Testimonial;