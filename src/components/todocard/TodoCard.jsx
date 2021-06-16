import React from 'react';
import { PropTypes } from 'prop-types';

const TodoCard = props => {
  const {
    todo, changeStatus, removeTodo,
  } = props;
  const classStatus = `todocard__${todo.status}`;

  return (
    <div className={classStatus} onClick={e => changeStatus(e)} onKeyPress={e => changeStatus(e)} id={todo.id} role="button" tabIndex={0}>
      <p className="todocard__title">{todo.title}</p>
      <p className="todocard__description">{todo.description}</p>
      {todo.status === 'done'
        && (
        <button
          type="button"
          className="todocard--remove"
          onClick={e => removeTodo(e)}
          id={todo.id}>
          Remove
        </button>
        )}
    </div>
  );
};

export default TodoCard;

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    timestamp: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
