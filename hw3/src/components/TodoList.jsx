import React, { useState } from 'react';
import useTodos from '../hooks/useTodos';
import { TODO_COLORS } from '../constants';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import Checkbox from './Checkbox';

const TodoList = () => {
  const {
    todos,
    addNewTodo,
    updateExistingTodo,
    removeTodo,
    setFilter,
    setSortOrder,
  } = useTodos();
  const [newTodo, setNewTodo] = useState('');
  const [color, setColor] = useState(TODO_COLORS[0]);
  const [sortOrder, setSortOrderState] = useState('asc');

  const handleAddTodo = () => {
    addNewTodo(newTodo);
    setNewTodo('');
  };

  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    setSortOrderState(newSortOrder);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <Button onClick={handleAddTodo}>Add</Button>
      <div>
        <Input
          type="text"
          placeholder="Filter todos"
          onChange={(e) => setFilter(e.target.value)}
        />
        <Select
          options={['asc', 'desc']}
          onChange={handleSortOrderChange}
          value={sortOrder}
        />
        <Select
          options={TODO_COLORS}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>
      <ul style={{ color }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() =>
                updateExistingTodo(todo.id, {
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            {todo.title}
            <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
