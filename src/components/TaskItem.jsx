
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Check, Trash2, Edit } from 'lucide-react';

const TaskItem = React.memo(({ task }) => {
  const { deleteTask, toggleComplete, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      editTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

return (
    <div
        className={`flex items-center justify-between p-3 rounded shadow bg-white dark:bg-gray-800 transition duration-300 ${
            task.completed ? 'opacity-60 line-through' : ''
        }`}
    >
        <div className="flex items-center gap-2">
            <button
                onClick={() => toggleComplete(task.id)}
                className="text-green-500 hover:text-green-600"
            >
                <Check />
            </button>
            {isEditing ? (
                <input
                    className="bg-transparent border-b border-gray-300 dark:border-gray-600 outline-none text-sm"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
                    autoFocus
                />
            ) : (
                <span>{task.text}</span>
            )}
            {isEditing && (
                <span className="ml-2 text-xs text-blue-500 font-semibold">(Editing...)</span>
            )}
        </div>
        <div className="flex items-center gap-2">
            <button
                onClick={handleEdit}
                className="text-yellow-500 hover:text-yellow-600"
            >
                <Edit />
            </button>
            <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-600"
            >
                <Trash2 />
            </button>
        </div>
    </div>
);
});

export default TaskItem;
