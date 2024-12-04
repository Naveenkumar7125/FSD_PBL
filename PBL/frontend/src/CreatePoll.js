import React, { useState } from 'react';
import axios from 'axios';
import './CreatePoll.css';

function CreatePoll() {
  const [pollTitle, setPollTitle] = useState('');
  const [options, setOptions] = useState(['']);
  const [activationDate, setActivationDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [voteLimit, setVoteLimit] = useState('');

  const addOption = () => {
    setOptions([...options, '']);
  };

  const updateOption = (index, value) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? value : option
    );
    setOptions(updatedOptions);
  };

  const createPoll = async () => {
    // Validation checks
    if (
      pollTitle.trim() === '' ||
      options.some(option => option.trim() === '') ||
      !activationDate ||
      !deadline ||
      !voteLimit
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (new Date(activationDate) >= new Date(deadline)) {
      alert('Activation date must be before the deadline.');
      return;
    }

    if (isNaN(voteLimit) || parseInt(voteLimit) <= 0) {
      alert('Vote limit must be a positive number.');
      return;
    }

    // Prepare data to send
    const pollData = {
      title: pollTitle,
      options,
      activationDate,
      deadline,
      voteLimit: parseInt(voteLimit),
    };

    try {
      // API call to create the poll
      const response = await axios.post('http://localhost:5000/api/polls/create', pollData);
      alert('Poll Created Successfully!');
      console.log('Poll Response:', response.data);

      // Clear form fields after successful creation
      setPollTitle('');
      setOptions(['']);
      setActivationDate('');
      setDeadline('');
      setVoteLimit('');
    } catch (error) {
      console.error('Error creating poll:', error);
      alert('Failed to create poll. Please try again.');
    }
  };

  return (
    <div className="create-poll-container">
      <h2>Create Poll</h2>
      <label>
        Poll Title:
        <input
          type="text"
          value={pollTitle}
          onChange={(e) => setPollTitle(e.target.value)}
          placeholder="Enter poll title"
        />
      </label>
      <label>
        Activation Date/Time:
        <input
          type="datetime-local"
          value={activationDate}
          onChange={(e) => setActivationDate(e.target.value)}
        />
      </label>
      <label>
        Deadline:
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>
      <label>
        Vote Limit:
        <input
          type="number"
          value={voteLimit}
          onChange={(e) => setVoteLimit(e.target.value)}
          placeholder="Enter vote limit"
        />
      </label>
      <h3>Options:</h3>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        </div>
      ))}
      <button onClick={addOption}>Add Option</button>
      <br />
      <button onClick={createPoll}>Create Poll</button>
    </div>
  );
}

export default CreatePoll;
