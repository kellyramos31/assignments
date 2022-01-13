import React from 'react'
import Issue from './Issue.js'

export default function TodoList(props){

  const {issues} = props

  return (
    <div className="issue-list">
      {issues.map(issue => <Issue{...issue} key={issue._id}/>)}

    </div>
  )
}