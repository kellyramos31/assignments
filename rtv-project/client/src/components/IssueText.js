import React, { useState, useContext } from 'react'
import { IssueCommentContext } from "../context/IssueCommentProvider.js"
import { FcCancel } from 'react-icons/fc'
// import CommentForm from "./CommentForm.js"



export default function IssueText(props){

    const {
        deleteIssue,
        editIssue,
        // comments,
        //deleteComment,
        // editComment
        // addComment,
        // upVote,
        // downVote   
    } = useContext(IssueCommentContext)

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
      
        <div key={props._id} className="user-issue-container">
            <div className="issue">
              <div className="my-profile-issue-tallies">
                <h3 className="total-votes"># Voters: {props.totalVotersVotedCount}</h3>
                <h3 className="my-issue-upvotes">Upvotes: {props.upVotes}</h3>
                <h3 className="my-issue-downvotes">Downvotes: {props.downVotes}</h3>
                <h3 className="my-issue-number-comments"># Comments: {props.numberCommentsOnIssue}</h3>
              </div>
              <h1 className="issue-title"><span className="my-issue-title">Issue</span> {props.title}</h1>
              <h3 className="issue-description"><span className="my-issue-descr">Description</span>  {props.description}</h3>
                <div className="vote-buttons">
                  <button className="delete-issue-btn" onClick={() => deleteIssue(props._id)}>Delete Issue</button>
                  <button className="edit-issue-btn" onClick={toggleToEdit}>Edit Issue</button>
                </div>
            </div>
        
      
         { !toggleIsEditing ?
            <div>
              {null}
            </div>
          
      :
        <div className="outline-edit-issue-form" id={props._id} index={props.index} >
            <form className="edit-issue-form" onSubmit={()=>editIssue(inputs, props._id)}>
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
              <div className="edit-issue-form-btns">
                  <button className="submit-issue-edit-btn">Submit Edit</button>
                  <button className="cancel-issue-edit-btn" onClick={toggleToEdit}><FcCancel size={22} style={{ fill: "white"}}/></button>
              </div>
            </form>

        </div>
          }
   </div>
     </div>
)}
