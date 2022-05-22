// import React from "react"
// import { MdCancel } from 'react-icons/md'
// import { FaEdit } from 'react-icons/fa'
// import { RiDeleteBin6Fill} from 'react-icons/ri'
// import { UserContext} from "../context/UserProvider.js"
// import { PostCommentContext } from "../context/PostCommentProvider.js"




// export default function ForumCommentText(props) {

//     const {
//     user: {
//         username
//     },
        
//     } = useContext(UserContext)

    // const {
    // // combinedDeleteComment,
    // // editComment,
    // postComments
    //  } = useContext(PostCommentContext)

// const {postComment} = props
 
// const [inputsCommentEdit, setInputsCommentEdit] = useState("")

// const [isEditing, setIsEditing] = useState(false)

// function handleChangeEdit(e, id){
//     console.log("handleChangeEdit id", id)
 
//     const {name, value} = e.target
//     setInputsCommentEdit(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//     }

// const { _id } = props

// //EDIT TOGGLE (COMMENTS/POSTS)
// function toggleToEdit(){
//      console.log("toggleToEdit clicked")
//     // setCommentsToUpdate(props._comments.map(comment=>(id !==comment._id ? comment : comment.isEditing === !isEditing)))
//     setIsEditing(prev => !prev)
//   }


// return (


//         <div>
//           <h3 className="public-comments">
       
//                     <div>
//                     <li key={props._id} className="comment-list-item">
        
//                          <span className="user-name-span-comment">{props._user.username}</span> 
//                         {" "}{props.commentText}
//                     </li>
//                     </div>
              
              
                    
 {/*                     
//                     {username === comment._user.username 
//                     ? 
//                     <div className="edit-del-comment-btns"> 
//                         <div className="edit-del-btns-group">
//                            <button  className="delete-comment-btn" onClick={() => combinedDeleteComment(comment._id, props._id)}><RiDeleteBin6Fill size={15} style={{ fill: "royalblue"}}/></button>
//                            <button className="edit-comment-btn" onClick={toggleToEdit}><FaEdit size={15} style={{ fill: "royalblue"}}/></button>
//                         </div>
//                         {isEditing
//                         ?
//                            <div  className="edit-comment-form-group"  >
//                                     <form key={comment._id} className="edit-comment-form" onSubmit={()=>editComment(inputsCommentEdit, comment._id)}>
//                                                 <input
//                                                      type="text"
//                                                      defaultValue={comment.commentText}
//                                                      inputs={comment.commentText || inputsCommentEdit}
//                                                      name="commentText"
//                                                      onChange={handleChangeEdit}
//                                                      placeholder="Comment Text"
//                                                  />
//                                                 <div className="edit-comments-grp-btns">
//                                                     <button className="submit-edited-comment-btn">Submit Edit</button>
//                                                     <button className="cancel-edit-comment-btn" onClick={toggleToEdit}><MdCancel
//                 size={20} style={{ fill: "royalblue"}}/></button>
//                                                 </div>
//                                         </form>
//                             </div>    
//                         :
//                         <div id={props._id}>
//                             {null}
//                         </div> 
//                         }
//                         </div>
//                         :
//                         <div>
//                             {null}
//                         </div>
//                     }  */}
                 {/* </li>
                    )} */}
// </h3>
//  </div>
//  )
//  }