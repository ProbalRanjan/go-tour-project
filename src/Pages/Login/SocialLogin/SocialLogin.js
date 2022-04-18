import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h4>Or Login with</h4>
            <button>
                <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button>
                <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button>
                <FontAwesomeIcon icon={faGithub} />
            </button>
        </div>
    );
};

export default SocialLogin;