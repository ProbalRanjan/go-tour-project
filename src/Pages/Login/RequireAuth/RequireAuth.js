import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center my-5'>
            <img style={{ width: "200px", marginBottom: "20px" }} src="images/email-verify.png" alt="" />
            <h3 style={{ Color: "#ff7c5b", marginBottom: "20px" }}> Please Verify your email address</h3>
            <button
                style={{
                    border: "none",
                    borderRadius: "10px",
                    bottom: "20px",
                    display: "flex",
                    backgroundColor: "#ff7c5b",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "10px 40px",
                    margin: "auto",
                }}
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify your email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;