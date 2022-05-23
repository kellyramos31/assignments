import React, {useState, useContext} from "react"
import { MdCancel } from 'react-icons/md'
import { PostCommentContext } from "../context/PostCommentProvider.js"


export default function EditCommentForm(props) {

const {comment, toggleToEdit} = props

const [inputsCommentEdit, setInputsCommentEdit] = useState("")

const {
      editComment
     } = useContext(PostCommentContext)

function handleChangeEdit(e){
    const {name, value} = e.target
    setInputsCommentEdit(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
    }

    return(
        <div className="edit-comment-form-group">
        
            <form id={comment._id} key={comment._id}className="edit-comment-form" onSubmit={()=>editComment(inputsCommentEdit, comment._id)}>
                                                <input
                                                     id={comment._id}
                                                     type="text"
                                                     defaultValue={comment.commentText}
                                                     inputs={comment.commentText || inputsCommentEdit}
                                                     name="commentText"
                                                     onChange={handleChangeEdit}
                                                     placeholder="Comment Text"
                                                 />
                                                <div className="edit-comments-grp-btns">
                                                    <button  id={comment._id} className="submit-edited-comment-btn">Submit Edit</button>
                                                    <button  id={comment._id} className="cancel-edit-comment-btn" onClick={()=>toggleToEdit(comment._id, comment._post)}><MdCancel
                size={20} style={{ fill: "royalblue"}}/></button>
                                                </div>
                                        </form>
        </div>

    )
}