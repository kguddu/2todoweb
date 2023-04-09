import { createContext,useState } from 'react';


const TodoContext = createContext();


function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);
  
    const addTodo = todo => {
      setTodos([...todos, todo]);
    };
  
    const updateTodo = updatedTodo => {
      setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    };
  
    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <TodoContext.Provider value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo
      }}>
        {children}
      </TodoContext.Provider>
    );
  }
  
  export  {TodoProvider,TodoContext};
  

// export default TodoContext;
