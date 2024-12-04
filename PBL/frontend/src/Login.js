import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for custom styles
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Optional: Handle errors gracefully

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      alert('Registration successful!');
      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };
  return (
    <section className="auth-section">
      <div className="login-container">
        <h2 className="login-title">Login to Your Account</h2>
        <form id="login-form" className="login-form">
          <input type="text" placeholder="Enter your Email" className="login-input" required value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" className="login-input" required value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-register-text">
          Don't have an account? <a href="register" className="register-link">Register here</a>.
        </p>
      </div>
    </section>
  );
}

export default Login;
