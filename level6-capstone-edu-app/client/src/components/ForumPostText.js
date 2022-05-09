import React, { useState, useContext } from 'react'
import AddCommentForm from "./AddCommentForm.js"
import { UserContext} from "../context/UserProvider.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"
// import { FcCancel } from 'react-icons/fc'




export default function ForumPostText(props){
const {
    user: {
        username
    },
        
    } = useContext(UserContext)



const {
      // voterUpVote,
      // voterDownVote,
      // commentUpVote,
      // commentDownVote,
      // calcNetVotes,
      combinedDeleteComment,
      editComment

     } = useContext(PostCommentContext)

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
    <div className="all-post-container" key={props._id}>
        <div className="all-posts" key={props._id}>
               <div className="tallies">
                    <h4 className="number-comments"># Comments: <span className="tallies-top">{props.numberCommentsOnPost}</span> </h4>
                    <h3><span className="posted-by">posted by:</span> <span className="user-name-span-post">{props._user.username}</span></h3>  
                </div>
            <h2>{props.category}</h2>
            <h1 className="post-title"><span className="title-post">Title:</span> {props.title}</h1>
            <h3 className="post-description"><span className="descr-post">Description:</span> {props.description}</h3>

     
        <div className="comment-related-btns">
                  
        { !toggleIsCommenting ?
              <div id={props._id}>
                <button className="leave-comment-btn" onClick={toggleToComment}> Leave Comment</button>
              </div>
              :
              <div id={props._id} className="comment-form" >
                  <AddCommentForm
                    _post={props._id}
                    toggleToComment={toggleToComment}
                  />
              
              </div>
          }
           </div>
               { !toggleIsViewingComments ?
                <button className="see-comments-btn" key={props._id} onClick={toggleViewComments}> <div className="eye-btn-pieces">View Comments</div></button>
                :
                <div>
                <button  className="hide-comments-btn" onClick={toggleViewComments}>Hide Comments</button>    
                <h3 className="public-comments">Comments:{props._comments.map(comment=>(
                    <li className="comment-list-item" key={comment._id}>
                    {/* <div className="comment-vote-group-btns"> */}
                        {/* <button className="upvote-comment-btn" onClick={()=>commentUpVote(comment._id)}><BsArrowUpCircleFill size={14} style={{ fill: "#0F4C75"}}/></button>
                        <button className="downvote-comment-btn" onClick={()=>commentDownVote(comment._id)}><BsArrowDownCircleFill size={14} style={{ fill: "#0F4C75"}}/></button> */}
                    {/* </div> */}
                        <span className="user-name-span-comment">{comment._user.username}</span> 
                        {comment.commentText}
                    
                    
                    {username === comment._user.username 
                    ? 
                    <div key={props._id} className="edit-del-comment-btns"> 
                        <div className="edit-del-btns-group">
                           <button className="delete-comment-btn" id={comment._id} onClick={() => combinedDeleteComment(comment._id, props._id)}>Delete</button>
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
                                                    <button className="cancel-edit-comment-btn" onClick={toggleToEdit}>Cancel</button>
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