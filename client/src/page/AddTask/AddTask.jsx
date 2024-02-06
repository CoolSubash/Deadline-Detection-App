import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import "./AddTask.css";
import { useAuth } from '../../assets/contextApi/contextlogin';
import { useNavigate } from 'react-router';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('medium');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const { isAuthenticated } = useAuth();
  const navigate=useNavigate()
  const handleSubmit = async () => {
    if (!isAuthenticated) {
      // Handle case where user is not authenticated
      console.log('User is not authenticated. Redirect to login or show a message.');
      return;
    }

    // Get user ID from localStorage
    const userId = localStorage.getItem('userId');

    // Prepare task data
    const taskData = {
      taskName,
      priority,
      deadline,
      description,
      userId,
    };

    try {
      // Send task data to the backend API
      const response = await axios.post('http://localhost:3000/api/v1/tasks', taskData);

      if (response.status === 201) {
       alert('Task added successfully:', response.data);
       navigate("/")
        // Handle success (redirect, show a message, etc.)
      } else {
        console.error('Failed to add task. Status:', response.status);
        // Handle failure
      }
    } catch (error) {
      console.error('Error adding task:', error);
      // Handle error
    }
  };

  return (
    <>
      <Navbar />
      <div className="add-task-container">
        <h2>Add Task</h2>
        <form>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />

          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button type="button" onClick={handleSubmit}>Add Task</button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
