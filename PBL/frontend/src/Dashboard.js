import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Choose an action below:</p>
      <ul>
        <li>
          <Link to="/create-poll">Create a Poll</Link>
        </li>
        <li>
          <Link to="/view-polls">View Existing Polls</Link> {/* Example for additional functionality */}
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
