import React, { useState } from 'react';

const TodoForm = ({ addTodo, darkMode }) => {
  const [value, setValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className={`flex gap-3 p-2 rounded-xl transition-shadow duration-200 ${
        isInputFocused ? 'shadow-lg' : 'shadow-md'
      } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <input
          type="text"
          className={`flex-grow px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none ${
            darkMode 
              ? 'bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600' 
              : 'bg-gray-50 text-gray-800 placeholder-gray-400 focus:bg-gray-100'
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="✨ Add a new task..."
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform
            ${value.trim() 
              ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95' 
              : 'bg-gray-300 cursor-not-allowed'
            } text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
            ${darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'}`}
          disabled={!value.trim()}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm; 