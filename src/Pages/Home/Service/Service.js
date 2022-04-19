import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <p><small>{description.slice(0, 300)}...</small></p>
                <p>Starts from <span className='service-price'>${price}</span></p>
            </div>
            <button onClick={handleCheckout} className='service-btn'>
                <p style={{ margin: '0' }}>Book Now</p>
                <FontAwesomeIcon className='btn-icon' icon={faPlus} />
            </button>

        </div>
    );
};

export default Service;