import { useState, useEffect } from 'react';
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../services/todoService';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    getTodos();
  }, []);

  const addNewTodo = async (title) => {
    const newTodo = { title, completed: false };
    const addedTodo = await addTodo(newTodo);
    setTodos([...todos, addedTodo]);
  };

  const updateExistingTodo = async (id, updatedTodo) => {
    const updated = await updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? updated : todo)));
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return {
    todos: sortedTodos,
    addNewTodo,
    updateExistingTodo,
    removeTodo,
    setFilter,
    setSortOrder,
  };
};

export default useTodos;
