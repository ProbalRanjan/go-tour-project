import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p><small>{description}</small></p>
            <p>Starts from <span className='service-price'>${price}</span></p>
            <Link to='/checkout'>Book Now
                <FontAwesomeIcon className='btn-icon' icon={faPlus} />
            </Link>
        </div>
    );
};

export default Service;