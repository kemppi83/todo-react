import React from 'react';
import { render } from '@testing-library/react';
import AddTodo from './AddTodo';

test('renders learn react link', () => {
  const setTodos = a => { console.log(a); };
  const { getByPlaceholderText, getByText } = render(<AddTodo setTodos={setTodos} />);
  getByPlaceholderText('Title*');
  getByPlaceholderText('Description');
  getByText('Add');
});
