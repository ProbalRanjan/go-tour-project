import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const [error, setError] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/checkout")
        }
    });

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        setError(error?.massage);
        return;
    }

    return (
        <div className='social-media'>
            <p>Or Connect with Social Media</p>
            <div className="social-icons">
                <button onClick={() => signInWithGoogle()}>
                    <FontAwesomeIcon className='me-2' icon={faGoogle} /> Google
                </button>
                <button>
                    <FontAwesomeIcon className='me-2' icon={faFacebookF} /> Facebook
                </button>
                <button>
                    <FontAwesomeIcon className='me-2' icon={faGithub} /> GitHub
                </button>
            </div>
            <p style={{ color: 'red', fontWeight: 600 }}>{error}</p>
        </div>
    );
};

export default SocialLogin;