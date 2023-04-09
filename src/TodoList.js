import { useContext } from 'react';
import {TodoContext} from './TodoContext';

function TodoList({ onEditTodo }) {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <div className='todo_list'>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <div >
          <button onClick={() => onEditTodo(todo)}className='btn'>Edit</button>
           <button onClick={() => deleteTodo(todo.id)} className='btn delet_btn'>Delete</button>
         </div>
        </li>  
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
