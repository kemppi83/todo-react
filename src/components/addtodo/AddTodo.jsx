import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = props => {
  const { setTodos } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const pushTodo = () => {
    if (!title) {
      return setError(true);
    }
    setError(false);
    setTodos(old => ([...old, {
      id: uuidv4(),
      title,
      description,
      timestamp: Date.now(),
      status: 'active',
    }]));
    setTitle('');
    return setDescription('');
  };

  return (
    <div className="input-form">
      <h3>Register New ToDo</h3>
      {error
      && <p className="input-form__error">Please provide a task title</p>}
      <input
        className="input-form__title"
        name="title"
        type="text"
        placeholder="Title*"
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
        onClick={pushTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;

AddTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
