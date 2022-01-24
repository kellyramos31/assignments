import React from 'react'


export default function IssueText(props){

  const {title, description} = props

//  const {getUserIssues, addIssue} = useContext(IssueCommentContext)


return (
    <div className="issue">
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}