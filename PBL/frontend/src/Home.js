import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import Home-specific CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="home" className="banner">
        <h1>ChoiceMaker Polling System</h1>
        <p>Create polls with ease and let others participate!</p>
        <div className="button-container">
          <button 
            onClick={() => navigate('/create-poll')} 
            className="cta-button"
          >
            Create Poll
          </button>
          <button 
            onClick={() => navigate('/active-polls')} 
            className="cta-button"
          >
            Active Polls
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
