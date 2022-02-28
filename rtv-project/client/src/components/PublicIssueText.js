import React, {useState} from "react"
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"


export default function PublicIssueText(props){

// const {
//         getComments 
//     } = useContext(IssueCommentContext)




const [toggleIsViewingComments, setToggleIsViewingComments] = useState(false)

  function toggleViewComments(){
    setToggleIsViewingComments(prev => !prev)
  }

// function handleClickForComments(){

// }

return (
    <div id={props._id}>
        <div className="all-issues">
            <h1 className="issue-title">Issue: {props.title}</h1>
            <h3 className="issue-description">Description: {props.description}</h3>
            <h3 className="total-votes">Votes: {props.voteCount}</h3>
            
          { !toggleIsViewingComments ?
                <button className="see-comments-btn" onClick={toggleViewComments}>View All Comments on this Issue</button>
          :
          <div>
                <button onClick={toggleViewComments}>Hide Comments</button>    
                <h3 className="comments">Comments on this Issue:{props._comments.map(comment=>(<li>{comment.commentText}</li>))}</h3>
          </div>
        }
    </div>
    </div>
)
}