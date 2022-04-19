import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (loading) {
        return <Loading></Loading>
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

                    <button className='submit-btn'>
                        <p style={{ margin: '0' }}>Sign Up</p>
                    </button>

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