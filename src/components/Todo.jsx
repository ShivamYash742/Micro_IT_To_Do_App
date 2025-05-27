import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo, darkMode }) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 mb-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="relative">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-300 
                     checked:border-emerald-500 checked:bg-emerald-500 transition-all duration-200
                     hover:border-emerald-500"
          />
          <svg
            className="absolute top-0.5 left-0.5 h-4 w-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity duration-200"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span
          className={`text-base transition-all duration-200 ${
            todo.completed 
              ? 'line-through ' + (darkMode ? 'text-gray-500' : 'text-gray-400')
              : darkMode ? 'text-gray-100' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={`p-2 rounded-lg transition-all duration-200 ${
          darkMode 
            ? 'hover:bg-red-500/20 text-red-400 hover:text-red-300' 
            : 'hover:bg-red-50 text-red-500 hover:text-red-600'
        }`}
        aria-label="Delete todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform transition-transform duration-200 hover:rotate-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo; 