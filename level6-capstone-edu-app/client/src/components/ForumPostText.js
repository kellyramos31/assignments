import React, { useState, useContext } from 'react'
import AddCommentForm from "./AddCommentForm.js"
import { UserContext} from "../context/UserProvider.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"
import { FaComments } from 'react-icons/fa'
import { MdOutlineComment} from 'react-icons/md'
import { AiFillEye} from 'react-icons/ai'
import { BiHide } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill} from 'react-icons/ri'



// import { FcCancel } from 'react-icons/fc'




export default function ForumPostText(props){
const {
    user: {
        username
    },
        
    } = useContext(UserContext)



const {
      combinedDeleteComment,
      editComment,
      getCommentsSpecifiedPost,
      postComments
     } = useContext(PostCommentContext)



const [inputsCommentEdit, setInputsCommentEdit] = useState("")

const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

const [isEditing, setIsEditing] = useState(false)



function toggleViewComments(_post){
    getCommentsSpecifiedPost(_post)
    console.log("view comments toggled")
    setToggleIsViewingComments(prev => !prev)
  }

function toggleToComment(){
   console.log("toggleToComment clicked")
    setToggleIsCommenting(prev => !prev)
  }

function toggleToEdit(){
     console.log("toggleToEdit clicked")
    // setCommentsToUpdate(props._comments.map(comment=>(id !==comment._id ? comment : comment.isEditing === !isEditing)))
    setIsEditing(prev => !prev)
  }

function handleChangeEdit(e, id){
    console.log("handleChangeEdit id", id)
 
    const {name, value} = e.target
    setInputsCommentEdit(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }



return (
    <div key={props._id} index={props.index}className="all-post-container">
        <div className="all-posts" >

            <div className="forum-post-header">
                    <h1 className="post-icon">   
                            {props.category==="Science" ? "🔬"
                            :
                            props.category==="Tech" ? "💻"
                            :
                            props.category==="Engineering" ? "⚙️"
                            : 
                            "➗"
                        }
                    </h1>
                <h3><span className="posted-by">by</span>{" "}<span className="user-name-span-post">{props._user.username}</span></h3>  
                  <h4 className="number-comments"><FaComments size={25} style={{ fill: "white"}}/> <span className="tallies-top">{props.numberCommentsOnPost}</span> </h4>
            </div>
               
            <h1 className="post-title"><span className="title-post">Title</span>{" "}{props.title}</h1>
            <h3 className="post-description"><span className="descr-post">Description</span>{" "}{props.description}</h3>

     
        <div className="comment-related-btns">
                  
        { !toggleIsCommenting ?
              <div>
                <button className="leave-comment-btn" onClick={toggleToComment}><MdOutlineComment size={20} style={{ fill: "royalblue"}}/></button>
              </div>
              :
              <div className="comment-form" >
                  <AddCommentForm
                    _id={props._id}
                    toggleToComment={toggleToComment}
                  />
              
              </div>
          }
           </div>
               { !toggleIsViewingComments ?
                <button className="see-comments-btn" onClick={toggleViewComments}> <div className="eye-btn-pieces"><AiFillEye
                size={20} style={{ fill: "royalblue"}}/></div></button>
                :
                <div>
                <button  className="hide-comments-btn" onClick={toggleViewComments}><BiHide
                size={20} style={{ fill: "royalblue"}}/></button>    
                <h3 className="public-comments">Comments:{postComments.map((comment, index)=>(
                    <li key={comment._id} className="comment-list-item">
                    {/* <div className="comment-vote-group-btns"> */}
                        {/* <button className="upvote-comment-btn" onClick={()=>commentUpVote(comment._id)}><BsArrowUpCircleFill size={14} style={{ fill: "#0F4C75"}}/></button>
                        <button className="downvote-comment-btn" onClick={()=>commentDownVote(comment._id)}><BsArrowDownCircleFill size={14} style={{ fill: "#0F4C75"}}/></button> */}
                    {/* </div> */}
                        <span className="user-name-span-comment">{comment._user.username}</span> 
                        {" "}{comment.commentText}
                    
                    
                    {username === comment._user.username 
                    ? 
                    <div className="edit-del-comment-btns"> 
                        <div className="edit-del-btns-group">
                           <button  className="delete-comment-btn" onClick={() => combinedDeleteComment(comment._id, props._id)}><RiDeleteBin6Fill size={15} style={{ fill: "royalblue"}}/></button>
                           <button className="edit-comment-btn" onClick={toggleToEdit}><FaEdit size={15} style={{ fill: "royalblue"}}/></button>
                        </div>
                        {isEditing
                        ?
                           <div  className="edit-comment-form-group"  >
                                    <form key={comment[index]} className="edit-comment-form" onSubmit={()=>editComment(inputsCommentEdit, comment._id)}>
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
                                                    <button className="cancel-edit-comment-btn" onClick={toggleToEdit}><MdCancel
                size={20} style={{ fill: "royalblue"}}/></button>
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