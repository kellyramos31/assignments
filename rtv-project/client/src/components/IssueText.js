import React, { useContext } from 'react'
import IssueForm from './IssueForm.js'
import { IssueCommentContext } from "../context/IssueCommentProvider.js"

export default function IssueText(props){

  const {title, description} = props

 const {getUserIssues, addIssue} = useContext(IssueCommentContext)


  return (
    <div className="todo">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}