import React from 'react';

function About() {
  return (
    <section id="about" className="info-section">
      <header>
        <h1>About Our Polling System</h1>
      </header>
      <div id="aboutContent">
        <h2>How Our System Works</h2>
        {/* Add descriptions here */}
        <h3>1. User Registration and Login</h3>
        <p>Users can register and log in to access the polling features.</p>
        <h3>2. Creating Polls</h3>
        <p>Admins can create polls and set a voting limit.</p>
        <h3>3. Voting Process</h3>
        <p>Users can vote on active polls, each having a limit on votes.</p>
        <h3>4. Real-Time Updates</h3>
        <p>Poll results update in real-time as votes are cast.</p>
        <h3>5. Results and Analysis</h3>
        <p>Detailed results are available after the voting period ends.</p>
      </div>
    </section>
  );
}

export default About;