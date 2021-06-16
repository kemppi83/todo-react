import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = props => {
  const { todos, setTodos } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const pushTodo = () => {
    const copyTodos = [...todos];
    copyTodos.push({
      id: uuidv4(),
      title,
      description,
      timestamp: Date.now(),
      status: 'active',
    });
    setTodos(copyTodos);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="input-form">
      <h3>Register New ToDo</h3>
      <input
        className="input-form__title"
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <input
        className="input-form__description"
        name="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)} />
      <button
        type="button"
        className="input-form--submit"
        onClick={() => pushTodo()}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;

AddTodo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
};
