import React, {useState, useContext} from "react"
import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"
import { UserContext } from "../context/UserProvider.js"
import { BsArrowUpCircleFill} from 'react-icons/bs'
import { BsArrowDownCircleFill} from 'react-icons/bs'
import { FaEye} from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { BiHide } from 'react-icons/bi'
import { FcCancel } from 'react-icons/fc'





export default function PublicIssueText(props){

const {
    user: {
        username
    },
        // userIssues,
        //getUserIssues,
        // addIssue,
        // deleteIssue
    } = useContext(UserContext)



const {
      voterUpVote,
      voterDownVote,
      // removeVote,
      commentUpVote,
      commentDownVote,
    //   totalComments,
      calcNetVotes,
      deleteCommentFromIssueArray,
    //   combinedDeleteComment,
      editComment
      // addComment,
      // handleSubmitComment   
     } = useContext(IssueCommentContext)

const [inputsCommentEdit, setInputsCommentEdit] = useState("")

const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

const [toggleEdit, setToggleEdit] = useState(false)



function toggleViewComments(){
    console.log("view comments toggled")
    setToggleIsViewingComments(prev => !prev)
  }

function toggleToComment(){
   console.log("toggleToComment clicked")
    setToggleIsCommenting(prev => !prev)
  }

function toggleToEdit(){
    setToggleEdit(prev => !prev)
  }

function handleChangeEdit(e){
    const {name, value} = e.target
    setInputsCommentEdit(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }



return (
    <div className="all-issues-container" key={props._id}>
        <div className="all-issues" key={props._id}>
               <div className="tallies">
                    <h3 className="total-votes"># Voters: {props.totalVotersVotedCount}</h3>
                    <h3 className="total-upVotes">Up: {props.upVotes}</h3>
                    <h3 className="total-downVotes">Down: {props.downVotes}</h3>
                    <h3 className="net-votes">Net: {calcNetVotes(props.upVotes, props.downVotes)}  </h3>
                    <h4 className="number-comments"># Comments: {props.numberCommentsOnIssue} </h4>
                </div>
              
            <h1 className="issue-title">Issue: {props.title}</h1>
            <h3 className="issue-description">Description: {props.description}</h3>

     
        <div className="comment-related-btns">
            <button className="up-vote-btn" onClick={() =>voterUpVote(props._id)}> <BsArrowUpCircleFill size={25} style={{ fill: "#0F4C75"}}/></button>
            <button className="down-vote-btn" onClick={()=>voterDownVote(props._id)}> <BsArrowDownCircleFill size={25} style={{ fill: "#0F4C75"}}/></button>
            {/* <button className="cancel-vote-btn" onClick={()=>removeVote(props._id)}>Cancel Vote</button> */}
      
        { !toggleIsCommenting ?
              <div id={props._id}>
                <button className="leave-comment-btn" onClick={toggleToComment}><FaComments size={20} style={{ fill: "white"}}/> Leave Comment</button>
              </div>
              :
              <div id={props._id} className="comment-form" >
                  <CommentForm
                    _issue={props._id}
                    toggleToComment={toggleToComment}
                  />
              
              </div>
          }
           </div>
               { !toggleIsViewingComments ?
                <button className="see-comments-btn" key={props._id} onClick={toggleViewComments}> <div className="eye-btn-pieces"><FaEye size={25} style={{ fill: "#0F4C75"}}/>View Comments</div></button>
                :
                <div>
                <button  className="hide-comments-btn" onClick={toggleViewComments}><BiHide size={25} style={{ fill: "#0F4C75"}}/>Hide Comments</button>    
                <h3 className="public-comments">Comments:{props._comments.map(comment=>(
                    <li className="comment-list-item" key={comment._id}>
                    <div className="comment-vote-group-btns">
                        <button className="upvote-comment-btn" onClick={()=>commentUpVote(comment._id)}><BsArrowUpCircleFill size={14} style={{ fill: "#0F4C75"}}/></button>
                        <button className="downvote-comment-btn" onClick={()=>commentDownVote(comment._id)}><BsArrowDownCircleFill size={14} style={{ fill: "#0F4C75"}}/></button>
                    </div>
                    <span className="user-name-span">{comment._user.username}</span> {comment.commentText}<span className="comment-votes-span">up:</span>{comment.upVotesComments}<span className="comment-votes-span">down:</span>{comment.downVotesComments}<span className="comment-votes-span">net:</span>{calcNetVotes(comment.upVotesComments, comment.downVotesComments)}
                    {username === comment._user.username 
                    ? 
                    <div key={props._id} className="edit-del-comment-btns"> 
                        {/* <button className="delete-comment-btn" id={comment._id} onClick={() => combinedDeleteComment(props._id, comment._id)}>Delete</button> */}
                        <div className="edit-del-btns-group">
                           <button className="delete-comment-btn" id={comment._id} onClick={() => deleteCommentFromIssueArray(props._id, comment._id)}>Delete</button>
                           <button className="edit-comment-btn" id={comment._id} onClick={toggleToEdit}>Edit</button>
                        </div>
                        {toggleEdit 
                        ?
                           <div  className="edit-comment-form" key={props._id} index={props.index}>
                                    <form onSubmit={()=>editComment(inputsCommentEdit, comment._id)}>
                                                <input
                                                     type="text"
                                                     defaultValue={comment.commentText}
                                                     inputs={comment.commentText || inputsCommentEdit}
                                                     name="commentText"
                                                     onChange={handleChangeEdit}
                                                     placeholder="Comment Text"
                                                 />
                                                <div className="edit-comments-grp-btns">
                                                    <button className="submit-edited-comment-btn">Submit Edit</button>
                                                    <button className="cancel-edit-comment-btn" onClick={toggleToEdit}><FcCancel size={18} style={{ fill: "white"}}/></button>
                                                </div>
                                        </form>
                            </div>    
                        :
                        <div id={props._id}>
                            {null}
                        </div> 
                        }
                        </div>
                        :
                        <div>
                            {null}
                        </div>
                    } 
                    </li>
                    ))
                    }
                </h3>
          </div>
        }
    </div>
    </div>
)}


