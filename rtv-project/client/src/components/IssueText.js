import React, { useContext } from 'react'
import { IssueCommentContext } from "../context/IssueCommentProvider.js"


export default function IssueText(props){

    const {
        upVote,
        downVote
    } = useContext(IssueCommentContext)




return (
    <div className="issue">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <h3>{props.voteCount}</h3>

    <div className="vote-buttons">
        <button className="up-vote" onClick={upVote}>Upvote</button>
        <button className="down-vote" onClick={downVote}>Downvote</button>
        <button className="leave-a-comment">Add a Comment</button>
      </div>
    </div>
  )
}


