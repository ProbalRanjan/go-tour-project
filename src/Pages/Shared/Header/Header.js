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
                        <Nav className="ms-auto nav-links">
                            <Link to='/'>Home</Link>
                            <Link to='/checkout'>Checkout</Link>
                            <Link to='/about'>About Me</Link>
                            <Link to='/blog'>Blog</Link>
                            {
                                user ?
                                    <button onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Link to='/login'>Sign In</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;