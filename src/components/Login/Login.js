import React, { useEffect } from "react";
import auth from "../../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="mt-3 text-center">
                <h3>Please Login</h3>
                <button
                    className="btn btn-primary px-4 py-2"
                    onClick={() => signInWithGoogle()}
                >
                    <i className="fa-brands fa-google me-2"></i>
                    Sign in With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
