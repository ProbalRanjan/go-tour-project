import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { faAt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='container footer-container'>
                <div>
                    <img className='footer-logo' src="images/logo-1.png" alt="" />
                    <p className='footer-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium ab dolorem quisquam, quibusdam harum quo. Cupiditate obcaecati consectetur dolorum!</p>
                    <div className='footer-button'>
                        <button>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </div>
                </div>
                <div className='footer-titles'>
                    <h3>Quick Links</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>

                </div>
                <div className='footer-titles'>
                    <h3>Contact Us</h3>
                    <div className='footer-contact'>
                        <FontAwesomeIcon className='contact-icon' icon={faLocationDot}></FontAwesomeIcon>
                        <p>20 Tour Guide Building, Dhaka, Bangladesh</p>
                    </div>
                    <div className='footer-contact'>
                        <FontAwesomeIcon className='contact-icon' icon={faAt}></FontAwesomeIcon>
                        <p>gotour@email.com</p>
                    </div>
                    <div className='footer-contact'>
                        <FontAwesomeIcon className='contact-icon' icon={faPhone}></FontAwesomeIcon>
                        <p>+88 0112233444</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;