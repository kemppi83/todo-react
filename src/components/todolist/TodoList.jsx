import React from 'react';
import { PropTypes } from 'prop-types';
import TodoCard from '../todocard/TodoCard';

const TodoList = props => {
  const { todos, changeStatus, removeTodo } = props;
  const todosLocal = [...todos];
  todosLocal.sort((x, y) => x.timestamp - y.timestamp);

  return (
    <div className="todolist">
      {todosLocal.map(todo => {
        if (todo.status === 'active') {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              changeStatus={changeStatus}
              removeTodo={removeTodo} />
          );
        }
        return null;
      })}
      {todosLocal.map(todo => {
        if (todo.status === 'done') {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              changeStatus={changeStatus}
              removeTodo={removeTodo} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
