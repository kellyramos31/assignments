import React from 'react'
import TodoComp from './TodoComp.js'

export default function TodoList(props){

  const {todos} = props

  return (
    <div className="todo-list">
      {todos.map(todo => <TodoComp {...todo} key={todo._id}/>)}

    </div>
  )
}
