import React, { useContext } from 'react'
import { IssueCommentContext } from "../context/IssueCommentProvider.js"


export default function IssueText(props){

    const {
        deleteIssue,
        addComment,
        upVote,
        downVote   
    } = useContext(IssueCommentContext)

  

    //add function to toggle Comment Form on & off


return (
    <div className="issue">
      <h1 className="issue-title">Title: {props.title}</h1>
      <h3 className="issue-description">Description: {props.description}</h3>
      <h3 className="comments">Comments:  {props.comments}</h3>
      <h3 className="total-votes">Total Votes: {props.voteCount}</h3>

    <div className="vote-buttons">
       <button className="delete-issue-btn" key={props._id} index={props.index} onClick={() => deleteIssue(props._id)}>Delete Issue</button>
       <button className="up-vote" key={props._id} index={props.index} onClick={() => upVote(props._id)}>Upvote</button>
       <button className="down-vote" onClick={downVote}>Downvote</button>
       <button className="leave-a-comment" onClick={() => addComment(props._id)}>Add a Comment on this Issue</button>
      </div>
    </div>
  )
}


