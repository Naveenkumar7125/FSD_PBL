import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import './ActivePolls.css';  // Import ActivePolls-specific CSS

function ActivePolls() {
  const navigate = useNavigate();
  const [activePolls, setActivePolls] = useState([]); // State for polls
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch active polls from the API on component mount
  useEffect(() => {
    const fetchActivePolls = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/polls/active'); // Replace with your API endpoint
        setActivePolls(response.data);
      } catch (err) {
        console.error('Error fetching active polls:', err);
        setError('Failed to fetch active polls. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivePolls();
  }, []);

  return (
    <div>
      <section id="active-polls" className="polls-section">
        <h2>Active Polls</h2>

        {loading ? (
          <p>Loading polls...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : activePolls.length === 0 ? (
          <p>No active polls available right now.</p>
        ) : (
          <div className="poll-list">
            {activePolls.map((poll) => (
              <div key={poll._id} className="poll-card">
                <h3>{poll.title}</h3>
                <p>
                  <strong>Activation Date:</strong>{' '}
                  {new Date(poll.activationDate).toLocaleString()}
                </p>
                <p>
                  <strong>Deadline:</strong>{' '}
                  {new Date(poll.deadline).toLocaleString()}
                </p>
                <p>
                  <strong>Options:</strong>
                </p>
                <ul>
                  {poll.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => navigate('/')} className="cta-button">
          Go Home
        </button>
      </section>
    </div>
  );
}

export default ActivePolls;
