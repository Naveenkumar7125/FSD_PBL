import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import CreatePoll from './CreatePoll'; // New Import
import Login from './Login';
import Register from './Register';
import './App.css';
import ActivePolls from './ActivePolls';

function App() {
  return (
    <Router>
      {/* Header visible on all pages */}
      <Header />
      <Routes>
        Define all application routes
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-poll" element={<CreatePoll />} /> {/* Route to create a poll */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/active-polls" element={<ActivePolls />} />
      </Routes>
      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}


export default App;
