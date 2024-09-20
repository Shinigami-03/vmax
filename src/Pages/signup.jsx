import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Styles/Signup.css'; // Ensure this path is correct
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth
import { auth } from '../firebase'; // Import auth from firebase.js

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed up:', user);
            })
            .catch((error) => {
                setError(error.message);
                console.error('Error signing up:', error);
            });
    };

    return (
        <div className="signup-container">
            <h2>Create Account</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-icon">
                        <i className="fa fa-user"></i>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <i className="fa fa-lock"></i>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icon">
                        <i className="fa fa-lock"></i>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm Password"
                        />
                    </div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    );
};

export default SignUp;