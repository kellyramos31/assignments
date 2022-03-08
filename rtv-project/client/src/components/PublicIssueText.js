import React, {useState, useContext} from "react"
import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"
import { BsArrowUpCircleFill} from 'react-icons/bs'
import { BsArrowDownCircleFill} from 'react-icons/bs'
import { FaEye} from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { BiHide } from 'react-icons/bi'




export default function PublicIssueText(props){

const {
      voterUpVote,
      voterDownVote,
      // removeVote,
      totalComments
      // addComment,
      // handleSubmitComment   
     } = useContext(IssueCommentContext)



const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

function toggleViewComments(){
    setToggleIsViewingComments(prev => !prev)
  }

function toggleToComment(){
   console.log("toggleToComment clicked")
    setToggleIsCommenting(prev => !prev)
  }

return (
    <div className="all-issues-container" key={props._id}>
        <div className="all-issues" key={props._id}>
            <h1 className="issue-title">Issue: {props.title}</h1>
            <h3 className="issue-description">Description: {props.description}</h3>
            <h3 className="total-votes">Votes: {props.voteCount}</h3>
            <h4 className="number-comments"># Comments: {totalComments} </h4>
               <div className="comment-related-btns">
            <button className="up-vote-btn" onClick={() =>voterUpVote(props._id)}> <BsArrowUpCircleFill size={25} style={{ fill: "royalblue"}}/> Upvote </button>
            <button className="down-vote-btn" onClick={()=>voterDownVote(props._id)}> <BsArrowDownCircleFill size={25} style={{ fill: "royalblue"}}/>Downvote</button>
            {/* <button className="cancel-vote-btn" onClick={()=>removeVote(props._id)}>Cancel Vote</button> */}
      
        { !toggleIsCommenting ?
              <div id={props._id}>
                <button className="leave-comment-btn" onClick={toggleToComment}><FaComments size={25} style={{ fill: "white"}}/> Leave Comment</button>
              </div>
              :
              <div id={props._id}>
                  <CommentForm
                    _issue={props._id}
                    // addComment={addComment}
                    toggleToComment={toggleToComment}
                    // handleSubmitComment={handleSubmitComment}
                  />
              <button className="leave-comment-btn" onClick={toggleToComment}>Cancel</button>
              </div>
          }
           </div>
               { !toggleIsViewingComments ?
                <button className="see-comments-btn" key={props._id} onClick={toggleViewComments}> <div className="eye-btn-pieces"><FaEye size={25} style={{ fill: "royalblue"}}/>View Comments</div></button>
          :
          <div>
                <button  className="hide-comments-btn" onClick={toggleViewComments}><BiHide size={25} style={{ fill: "royalblue"}}/>Hide Comments</button>    
                <h3 className="public-comments">Comments on this Issue:{props._comments.map(comment=>(<li key={comment._id}><span className="user-name-span">{comment._user.username}</span>{" "}{comment.commentText}</li>))}</h3>
          </div>
        }
          
          
    </div>
    </div>
)
}