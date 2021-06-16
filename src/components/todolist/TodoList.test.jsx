import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders learn react link', () => {
  const { getByText } = render(<TodoList
    todos={[{
      description: 'This is description',
      id: '42bdf00f-11a3-402f-b0ff-7a7057ed5da8',
      status: 'active',
      timestamp: 1623831316686,
      title: 'This is title',
    }]}
    changeStatus={e => console.log(e.target)}
    removeTodo={e => console.log(e.target)} />);

  getByText('This is description');
  getByText('This is title');
});
