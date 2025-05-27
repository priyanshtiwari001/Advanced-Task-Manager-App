
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      addTask(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-2 rounded-l border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 ml-2 text-white rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
