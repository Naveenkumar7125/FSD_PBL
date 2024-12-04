import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './Register.css'; // Import CSS file for custom styling

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Optional: Handle errors gracefully

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
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
      <div className="register-container">
        <h2 className="register-title">Create a New Account</h2>
        <form id="register-form" className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="register-input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="register-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-button">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <p className="register-login-text">
          Already have an account? <a href="#login" className="login-link">Login here</a>.
        </p>
      </div>
    </section>
  );
}

export default Register;
