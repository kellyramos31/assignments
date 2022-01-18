import React from 'react'
import IssueText from './IssueText.js'

export default function IssueList(props){

  const {issues} = props

  return (
    <div className="issue-list">
      {issues.map(issue => <IssueText {...issue} key={issue._id}/>)}

    </div>
  )
}