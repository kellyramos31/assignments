import React from 'react'

export default function IssueText(props){

  const {title, description} = props

  return (
    <div className="todo">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}