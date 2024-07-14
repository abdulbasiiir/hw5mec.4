import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName, deleteName, selectNames } from '../features/namesSlice'; // Импортируем deleteName

const AddNameForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const names = useSelector(selectNames);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addName(name));
      setName('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteName(index)); // Используем deleteName из Redux
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddNameForm;
