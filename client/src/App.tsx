import { useState } from 'react';
import './App.css'
import Todo from './components/Todo'
import { ITodo } from './type';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  console.log("todos",todos)
   return (
       <>
           <h1>Full Stack Todo</h1>
           <Todo
               setTodos={setTodos}
               todos={todos}
           />
           <TodoList todos={todos} />
       </>
   );
}

export default App
