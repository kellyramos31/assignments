import React from 'react'


export default function IssueText(props){

// const { issue } = props

//  const {getUserIssues, addIssue} = useContext(IssueCommentContext)


return (
    <div className="issue">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>

      {/* <h1>{props.issue.title}</h1>
      <h3>{props.issue.description}</h3> */}
    </div>
  )
}


