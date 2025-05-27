
import React, { useContext, useEffect } from 'react';
import { TaskProvider, TaskContext } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

const AppContent = () => {
  const { theme } = useContext(TaskContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">🗓️ Advanced Task Manager 🗓️</h1>
          <ThemeToggle />
        </div>
        <TaskInput />
        <TaskFilter />
        <TaskList />
      </div>
    </div>
  );
};

const App = () => (
  <TaskProvider>
    <AppContent />
  </TaskProvider>
);

export default App;
