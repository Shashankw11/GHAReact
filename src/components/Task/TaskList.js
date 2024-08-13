import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import './taskList.css';

const TaskList = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="task-list-container">
      <div className="task-list-content">
        <h1>Task List</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
