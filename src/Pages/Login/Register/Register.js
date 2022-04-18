import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleSignUp = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/checkout')
    }

    return (
        <div className='container my-5 login-container'>
            <div className='login-img'>
                <img src="images/login/sign-up.png" alt="" />
            </div>
            <div className='login-form'>
                <h3>Sign Up</h3>
                <Form onSubmit={handleSignUp}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <p>
                        {
                            error
                        }
                    </p>

                    <Button className='d-grid gap-2 col-4 mx-auto' type="submit">
                        Sign Up
                    </Button>

                </Form>
                <div className='social-login'>
                    <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;