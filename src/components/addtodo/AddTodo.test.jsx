import React from 'react';
import { render, screen } from '@testing-library/react';
import AddTodo from './AddTodo';

test('renders learn react link', () => {
  const setTodos = a => { console.log(a); };
  render(<AddTodo setTodos={setTodos} />);
  screen.getByPlaceholderText('Title*');
  screen.getByPlaceholderText('Description');
  screen.getByText('Add');
});
