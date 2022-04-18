import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()

    const form = location.state?.form?.pathname || '/checkout';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(form, { replace: true });
    }

    return (
        <div className='container my-5 login-container'>
            <div className='login-img'>
                <img src="images/login/sign-in.png" alt="" />
            </div>
            <div className='login-form'>
                <h3>Sign In</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <p style={{ color: 'red', fontWeight: 600 }}>
                        {error?.message}
                    </p>

                    {
                        loading && <Spinner animation="border" role="status" />
                    }

                    <Button className='d-grid gap-2 col-4 mx-auto' type="submit">
                        Sign In
                    </Button>

                </Form>
                <div className='social-login'>
                    <p>New to Go Tour? <Link to='/register'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;