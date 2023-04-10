import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodosActions from './components/TodosActions'
import './App.css'

function App() {
   const [todos, setTodos] = useState([])

   const addTodoHandler = (text) => {
      const newTodo = {
         text,
         isCompleted: false,
         id: uuidv4(),
      }
      setTodos([...todos, newTodo])
   }

   const deleteTodoHandler = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
   }

   const toggleTodoHandler = (id) => {
      setTodos(
         todos.map((todo) => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
         })
      )
   }

   const resetTodosHandler = () => {
      setTodos([])
   }

   const deleteCompletedTodosHandler = () => {
      setTodos(todos.filter((todo) => todo.isCompleted === false))
   }

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHandler} />
         <TodosActions resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler} />
         <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      </div>
   )
}

export default App
