import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation()

    const form = location.state?.form?.pathname || '/checkout';

    const [
        signInWithEmailAndPassword,
        user,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const resetPassword = async () => {
        const myMail = email;
        if (myMail) {
            await sendPasswordResetEmail(myMail);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    const handleSignIn = event => {
        event.preventDefault()

        if (error) {
            setError("Incorrect Email or Password!!")
        }

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(form, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
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
                        {error}
                    </p>

                    <button onClick={resetPassword} className='forget-password'>Forget Password?</button>

                    <button className='submit-btn'>
                        <p style={{ margin: '0' }}>Sign In</p>
                    </button>

                </Form>
                <div className='social-login'>
                    <p>New to Go Tour? <Link to='/register'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;