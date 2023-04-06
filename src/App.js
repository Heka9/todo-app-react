import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
   const [todos, setTodos] = useState(['one', 'two'])
   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm />
         <TodoList todos={todos} />
      </div>
   )
}

export default App
