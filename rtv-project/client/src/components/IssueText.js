import React from 'react'


export default function IssueText(props){

// const { issue } = props

//  const {getUserIssues, addIssue} = useContext(IssueCommentContext)


return (
    <div className="issue">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>

    <div className="vote-buttons">
        <button className="up-vote">Upvote</button>
        <button className="down-vote">Downvote</button>
      </div>
    </div>
  )
}


