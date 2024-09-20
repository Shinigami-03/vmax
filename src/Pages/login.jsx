import React, { useState } from 'react';
import '../Styles/login.css'; // Ensure this path is correct
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="login-container">
            <h2>Welcome Back</h2>
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
                <div className="form-group remember-forgot">
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label>RememberMe</label>
                    </div>
                    <p className="forgot-password">Forgot Password?</p>
                </div>
                <button type="submit">Login</button>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
