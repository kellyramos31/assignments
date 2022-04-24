import React, { useState, useContext } from 'react'
import { PostCommentContext } from "../context/PostCommentProvider.js"
// import { FcCancel } from 'react-icons/fc'
// import CommentForm from "./CommentForm.js"



export default function PostText(props){

    const {
        deletePost,
        editPost,
        // comments,
        //deleteComment,
        // editComment
        // addComment,
        // upVote,
        // downVote   
    } = useContext(PostCommentContext)

    //add function to toggle Comment Form on & off
    //add isEditing toggle??

  const [toggleIsEditing, setToggleIsEditing] = useState(false)

  const [inputs, setInputs] = useState("")

  function toggleToEdit(){
    setToggleIsEditing(prev => !prev)
  }


  function handleEditChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }

  
return (
    
   
    <div className="profile-container">

        {/* { !toggleIsEditing ? */}
      
        <div key={props._id} className="user-post-container">
            <div className="my-post">
              <div className="my-profile-post-tallies">
                {/* <h3 className="total-votes"># Voters: {props.totalVotersVotedCount}</h3>
                <h3 className="my-issue-upvotes">Upvotes: {props.upVotes}</h3>
                <h3 className="my-issue-downvotes">Downvotes: {props.downVotes}</h3> */}
                <h3 className="my-post-number-comments"># Comments: {props.numberCommentsOnPost}</h3>
              </div>
              <div className="my-postdescr-titles">
                <h1 className="post-title-mine"><span className="my-post-title">Post</span> {props.title}</h1>
                <h3 className="post-description-mine"><span className="my-post-descr">Description</span> <span className="my-descr-text">{props.description}</span></h3>
              </div>
                <div className="edit-delete-post-buttons">
                  <button className="delete-post-btn" onClick={() => deletePost(props._id)}>Delete Post</button>
                  <button className="edit-post-btn" onClick={toggleToEdit}>Edit Post</button>
                </div>
            </div>
        
      
         { !toggleIsEditing ?
            <div>
              {null}
            </div>
          
      :
        <div className="outline-edit-post-form" id={props._id} index={props.index} >
            <form className="edit-post-form" onSubmit={()=>editPost(inputs, props._id)}>
              <input
                type="text"
                defaultValue={props.title}
                inputs={props.title || inputs}
                name="title"
                onChange={handleEditChange}
                placeholder="Title"
              />
              <input
                type="text"
                defaultValue={props.description}
                inputs={props.description || inputs}
                name="description"
                onChange={handleEditChange}
                placeholder="Description"
              />
              <div className="edit-post-form-btns">
                  <button className="submit-post-edit-btn">Submit Edit</button>
                  <button className="cancel-post-edit-btn" onClick={toggleToEdit}>Cancel</button>
              </div>
            </form>

        </div>
          }
   </div>
     </div>
)}
