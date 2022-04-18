import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className='navbar' collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Link to='/'>
                        <img
                            alt="Go Tour Logo"
                            src="images/logo-1.png"
                            className='nav-logo'
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <Link to='/'>Home</Link>
                            <Link to='/blog'>Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;