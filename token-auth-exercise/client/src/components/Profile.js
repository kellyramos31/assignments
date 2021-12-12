// import TodoList from './TodoList.js'
// import TodoComp from './TodoComp.js'

import React, { useContext } from "react";
import TodoForm from "./TodoForm.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {

  const { user: {username}, addTodo } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <TodoForm 
        addTodo={addTodo}
      />
      <h3>Your Todos</h3>
    </div>
  )
}