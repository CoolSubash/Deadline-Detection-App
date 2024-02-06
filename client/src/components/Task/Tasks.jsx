import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
import axios from "axios";
import "./task.css";
import { useAuth } from "../../assets/contextApi/contextlogin";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { isAuthenticated, getUserId } = useAuth();
  
  useEffect(() => {
    // Fetch tasks from the backend
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Get the userId from your authentication context

        if (userId) {
          const response = await axios.get(`http://localhost:3000/api/v1/tasks?userId=${userId}`);
          setTasks(response.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated, getUserId]);

  return (
    <div className="tasks">
      <div className="tasks-container-parent">
        {isAuthenticated ? (
          // If authenticated
          <>
            {tasks && tasks.length > 0 ? (
              // If tasks are available, display them
              <>
                <h2>Task List</h2>
                <div className="tasks-container">
                  {tasks.map((task) => (
                    <Task
                      key={task.id}
                      description={task.description}
                      taskName={task.taskName}
                      priority={task.priority}
                      deadline={task.deadline}
                    />
                  ))}
                </div>
              </>
            ) : (
              // If no tasks available, show message to create a task
              <p className="no-task">No tasks available. <Link to="/add-task">Create a task</Link>.</p>
            )}
          </>
        ) : (
          // If not authenticated, show different content
          <div className="welcome-page">
            <p className="welcome-message">Welcome to the Task App!</p>
            <p className="login-message">
              Please <Link to="/login">login</Link> to create a task.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
