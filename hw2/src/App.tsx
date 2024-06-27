import React, { useState, useEffect } from 'react';
import { tasks } from './mock/tasks';
import { LIST_COLUMNS } from './constants/app-constants';
import List from './components/List';

function App() {
  const [tasksList, setTasksList] = useState(tasks);
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    setTodoTasks(tasksList.filter((task) => task.status === 0));
    setInProgressTasks(tasksList.filter((task) => task.status === 1));
    setDoneTasks(tasksList.filter((task) => task.status === 2));
  }, [tasksList]);

  const updateTaskStatus = (id, newStatus) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const archiveTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <List
        title={LIST_COLUMNS.TODO}
        list={todoTasks}
        updateTaskStatus={updateTaskStatus}
        archiveTask={archiveTask}
      />
      <List
        title={LIST_COLUMNS.IN_PROGRESS}
        list={inProgressTasks}
        updateTaskStatus={updateTaskStatus}
        archiveTask={archiveTask}
      />
      <List
        title={LIST_COLUMNS.DONE}
        list={doneTasks}
        updateTaskStatus={updateTaskStatus}
        archiveTask={archiveTask}
      />
    </div>
  );
}

export default App;
