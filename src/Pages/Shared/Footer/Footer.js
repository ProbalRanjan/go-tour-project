import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <Row>
                    <Col>
                        <img className='footer-logo' src="images/logo-1.png" alt="" />
                        <p className='footer-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium ab dolorem quisquam, quibusdam harum quo. Cupiditate obcaecati consectetur dolorum!</p>
                        <div className='footer-button'>
                            <button>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                        </div>
                    </Col>
                    <Col>
                        <h3>Services</h3>
                        <p>Link-1</p>
                        <p>Link-1</p>
                        <p>Link-1</p>
                        <p>Link-1</p>
                    </Col>
                    <Col>
                        <h3>Contact Us</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;