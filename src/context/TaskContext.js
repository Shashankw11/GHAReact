import React, { createContext, useState } from 'react';
import taskService from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  const fetchTasks = async () => {
    const response = await taskService.getTasks();
    setTasks(response);
  };

  const fetchTaskDetails = async (id) => {
    const response = await taskService.getTaskById(id);
    setTask(response);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        task,
        fetchTasks,
        fetchTaskDetails,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;