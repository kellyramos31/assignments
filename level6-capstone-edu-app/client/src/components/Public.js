import React, { useContext, useEffect} from "react"
// import PublicPostist from "./PublicPostList.js"
// import CommentForm from "./CommentForm.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"



export default function Public() {


      const {
        postState,
        // posts,
        // userPosts,
        // comments,
        getUserPosts,
        getPosts,
        // addComment,
        getComments
    } = useContext(PostCommentContext)

    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPosts()
    getComments()
    // eslint-disable-next-line  
  }, [postState])




    return (
        <div className="public">
          <h3 className="title-public-page">All Users' Posts</h3>
            {/* <PublicPostList 
                posts={posts}
                userPosts={userPosts}
                comments={comments}
                // addComment={addComment}
            /> */}
        </div>
    )
}