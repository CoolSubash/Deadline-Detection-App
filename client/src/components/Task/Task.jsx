import React from "react";
import "./task.css"
const Task = ({ taskName, priority, deadline,description }) => {
  return (
    <div className="task-card">
      <h3>{taskName}</h3>
      <p>{description}</p>
      <p>Priority: {priority}</p>
      <p>Deadline: {deadline}</p>
    </div>
  );
};

export default Task;
