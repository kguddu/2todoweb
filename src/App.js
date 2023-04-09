import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [editingTodo, setEditingTodo] = useState(null);

  const handleEditTodo = todo => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <TodoForm editingTodo={editingTodo} onCancelEdit={handleCancelEdit} />
      <TodoList onEditTodo={handleEditTodo} />
    </div>
  );
}

export default App;
