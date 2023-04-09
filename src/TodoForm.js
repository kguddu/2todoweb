import { useContext, useState, useEffect } from 'react';
import {TodoContext} from './TodoContext';

function TodoForm({ editingTodo, onCancelEdit }) {
  const { addTodo, updateTodo } = useContext(TodoContext);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
    } else {
      setTitle('');
    }
  }, [editingTodo]);

  const handleSubmit = event => {
    event.preventDefault();
    if (editingTodo) {
      updateTodo({
        ...editingTodo,
        title
      });
      onCancelEdit();
    } else {
      addTodo({
        id: Date.now(),
        title
      });
      setTitle('');
    }
  };

  const handleCancel = event => {
    event.preventDefault();
    onCancelEdit();
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      {editingTodo ? (
        <div className='btn_div'>
          <button type="submit">Save Changes</button>
          <button onClick={handleCancel} className='cancel_btn'>Cancel</button>
        </div>
      ) : (
        <button type="submit" className='add-btn'>Add Todo</button>
      )}
    </form>
    
  );
}

export default TodoForm;
