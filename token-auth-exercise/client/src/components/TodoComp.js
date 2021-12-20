import React from 'react'

export default function TodoComp(props){

  const {title, description, imgUrl} = props

  return (
    <div className="todo">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <img src={imgUrl} alt={imgUrl} width="300px"/>
    </div>
  )
}