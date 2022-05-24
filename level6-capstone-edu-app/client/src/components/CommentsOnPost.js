import React, {useContext} from "react"
// import EditCommentForm from "./EditCommentForm.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"



export default function CommentsOnPost(props){

    const {
    //   isEditing,
      postComments
     } = useContext(PostCommentContext)


return(
                 
        <div>
            {/* {!isEditing
                ? */}
                <div>
                    {postComments.map((comment, index)=>
                        <div>
                          <h3>{comment.commentText}</h3>
                          <button>Toggle to Edit</button>
                            <button>Cancel</button>
                        </div>
                    )}
                    </div>
            {/* :
            <div>
                <EditCommentForm/>
            </div> */}
{/* } */}
        </div>
    )



}