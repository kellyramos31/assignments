import React, { useState, useContext } from 'react'
import AddCommentForm from "./AddCommentForm.js"
import CommentsOnPost from "./CommentsOnPost.js"
import { UserContext} from "../context/UserProvider.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"
import { FaComments } from 'react-icons/fa'
import { MdOutlineComment} from 'react-icons/md'
import { AiFillEye} from 'react-icons/ai'
import { BiHide } from 'react-icons/bi'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill} from 'react-icons/ri'
import EditCommentForm from './EditCommentForm.js'



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
      postComments,
      getCommentsSpecifiedPost,
      combinedDeleteComment

     } = useContext(PostCommentContext)



const [toggleIsCommenting, setToggleIsCommenting] = useState(false)

const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

const [toggleEdit, setToggleEdit] = useState(false)

const [isEditing, setIsEditing] = useState(false)



function toggleViewComments(postId){
    console.log("view comments toggled")
    console.log("postId from toggleViewComments", postId)
    setToggleIsViewingComments(prev => !prev)
    getCommentsSpecifiedPost(postId)
  }

function toggleToComment(){
   console.log("toggleToComment clicked")
    setToggleIsCommenting(prev => !prev)
  }

function toggleToEdit(id, _post){
    console.log("toggleToEdit id", id)
    console.log("_post", _post)
    getCommentsSpecifiedPost(_post)
    console.log("postComments", postComments)
    console.log("id", id)
    console.log("toggleToEdit clicked!")
    // console.log("index that was toggled", index)
    setToggleEdit(prev => !prev)
    console.log("toggleEdit state", toggleEdit)
    setIsEditing(prev => !prev)
    console.log("isEditing state", isEditing)
  }




return (
    <div className="all-post-container" key={props._id}>
        <div className="all-posts" key={props._id}>

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
              <div id={props._id}>
                <button className="leave-comment-btn" onClick={toggleToComment}><MdOutlineComment size={20} style={{ fill: "royalblue"}}/></button>
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
                <button className="see-comments-btn" key={props._id} onClick={()=>toggleViewComments(props._id)}> <div className="eye-btn-pieces"><AiFillEye
                size={20} style={{ fill: "royalblue"}}/></div></button>
                :
                <div>
                <button  className="hide-comments-btn" onClick={toggleViewComments}><BiHide
                size={20} style={{ fill: "royalblue"}}/></button>    
                {/* <h3 className="public-comments">Comments:{props._comments.map((comment, index)=>(
                    
                    <li className="comment-list-item" key={comment._id} index={index}>
                        <span className="user-name-span-comment">{comment._user.username}</span> 
                        {" "}{comment.commentText} */}
                        <CommentsOnPost/>
                                        
                    {/* {username === comment._user.username 
                    ? 
                    <div key={comment._id} className="edit-del-comment-btns"> 
                        <div className="edit-del-btns-group">
                           <button className="delete-comment-btn" onClick={() => combinedDeleteComment(comment._id, props._id)}><RiDeleteBin6Fill size={15} style={{ fill: "royalblue"}}/></button>
                           <button key={comment._id} className="edit-comment-btn" onClick={()=>toggleToEdit(comment._id, props._id)}><FaEdit size={15} style={{ fill: "royalblue"}}/></button>
                        </div>

                        {isEditing 
                        ? 
                        <EditCommentForm
                           index={comment.index}
                           id={comment._id}
                           comment={comment}
                           toggleToEdit={toggleToEdit}
                        />

                        :

                        <div id={props._id}>
                            {null}
                        </div> 
                        }
                        </div> */}
                        :
                        <div>
                            {null}
                        </div>
                    {/* }  */}
                    {/* </li>
                    ))
                    }
                </h3> */}
          </div>
        }
    </div>
    </div>
)}