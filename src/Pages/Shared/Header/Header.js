import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                        <Nav className="ms-auto nav">
                            <div className='nav-links'>
                                <Nav.Link>
                                    <Link to='/'>Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/checkout'>Checkout</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/about'>About Me</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to='/blog'>Blog</Link>
                                </Nav.Link>
                            </div>
                            {
                                user ?
                                    <button className='signing-btn' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Link className='signing-btn' to='/login'>Sign In</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;