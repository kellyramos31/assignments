import React, {useState, useContext} from "react"
import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"


export default function PublicIssueText(props){

const {
      upVote,
      downVote   
     } = useContext(IssueCommentContext)

const { addComment } = props

const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

function toggleViewComments(){
    setToggleIsViewingComments(prev => !prev)
  }

function toggleToComment(){
    setToggleIsCommenting(prev => !prev)
  }

return (
    <div className="all-issues-container" id={props._id}>
        <div className="all-issues">
            <h1 className="issue-title">Issue: {props.title}</h1>
            <h3 className="issue-description">Description: {props.description}</h3>
            <h3 className="total-votes">Votes: {props.voteCount}</h3>
            <button className="up-vote-btn" onClick={() => upVote(props._id)}>Upvote</button>
            <button className="down-vote-btn" onClick={()=>downVote(props._id)}>Downvote</button>

          { !toggleIsViewingComments ?
                <button className="see-comments-btn" onClick={toggleViewComments}>View All Comments</button>
          :
          <div>
                <button onClick={toggleViewComments}>Hide Comments</button>    
                <h3 className="public-comments">Comments on this Issue:{props._comments.map(comment=>(<li><span className="user-name-span">{comment._user.username}</span>{" "}{comment.commentText}</li>))}</h3>
          </div>
        }

        { !toggleIsCommenting ?
              <div>
              <button className="leave-comment-btn" onClick={toggleToComment}>Leave a Comment</button>
              </div>
              :
              <div id={props._id}>
                  <CommentForm
                    _issue={props._id}
                    addComment={addComment}
                    toggleToComment={toggleToComment}
                  />
              <button className="leave-comment-btn" onClick={toggleToComment}>Cancel</button>
              </div>
          }
    </div>
    </div>
)
}