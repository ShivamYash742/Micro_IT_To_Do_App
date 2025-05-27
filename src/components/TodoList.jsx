import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, deleteTodo, darkMode }) => {
  return (
    <div className="space-y-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            darkMode={darkMode}
          />
        ))
      ) : (
        <div className={`text-center py-12 rounded-xl ${
          darkMode 
            ? 'bg-gray-800 text-gray-400' 
            : 'bg-white text-gray-500'
        } shadow-md`}>
          <svg
            className={`w-16 h-16 mx-auto mb-4 ${
              darkMode ? 'text-gray-700' : 'text-gray-300'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p className="text-lg font-medium mb-1">No tasks yet</p>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>Add a new task above to get started!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList; 