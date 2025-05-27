// components/TaskFilter.jsx
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext);

  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center mb-4 space-x-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded ${
            filter === f
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
