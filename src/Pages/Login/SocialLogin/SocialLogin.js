import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/checkout")
        }
    }, [user]);

    return (
        <div>
            <h5>Or Connect with Social Media</h5>
            <div className="social-icons">
                <button onClick={() => signInWithGoogle()}>
                    <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
                <button>
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                </button>
                <button>
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;