import React, {useState, useContext} from "react"
import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"
import { UserContext } from "../context/UserProvider.js"
import { BsArrowUpCircleFill} from 'react-icons/bs'
import { BsArrowDownCircleFill} from 'react-icons/bs'
import { FaEye} from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { BiHide } from 'react-icons/bi'





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
      totalComments,
      deleteComment,
      editComment
      // addComment,
      // handleSubmitComment   
     } = useContext(IssueCommentContext)

const [inputsCommentEdit, setInputsCommentEdit] = useState("")

const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

const [toggleEdit, setToggleEdit] = useState(false)

function toggleViewComments(){
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
                    <h3 className="total-votes">Voters: {props.totalVotersVotedCount}</h3>
                    <h3 className="total-upVotes">UpVotes: {props.upVotes}</h3>
                    <h3 className="total-downVotes">DownVotes: {props.downVotes}</h3>
                    <h4 className="number-comments"># Comments: {totalComments} </h4>
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
                    <li className="comment-list-item" key={comment._id}><span className="user-name-span">{comment._user.username}</span>{" "}{comment.commentText} 
                    {username === comment._user.username 
                    ? 
                    <div key={props._id} className="edit-del-comment-btns"> 
                        <button id={comment._id} onClick={() => deleteComment(comment._id)}>Delete</button>
                        <button id={comment._id} onClick={toggleToEdit}>Edit</button>
                        {toggleEdit 
                        ?
                           <div  key={props._id} index={props.index}>
                                    <form onSubmit={()=>editComment(inputsCommentEdit, comment._id)}>
                                                <input
                                                     type="text"
                                                     defaultValue={comment.commentText}
                                                     inputs={comment.commentText || inputsCommentEdit}
                                                     name="commentText"
                                                     onChange={handleChangeEdit}
                                                     placeholder="Comment Text"
                                                 />
                                                <button onClick={toggleToEdit}>Cancel Edit</button>
                                                <button>Submit Edited Comment</button>
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


