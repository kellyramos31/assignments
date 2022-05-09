import React, { useContext, useEffect} from "react"
import ForumPostList from "./ForumPostList.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"



export default function Forum() {


      const {
        postState,
        posts,
        userPosts,
        comments,
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


//WANT TO HAVE WAY TO SEARCH FORUM POSTS BY CATEGORY/KEYWORD

    return (
        <div className="forum">
     
          <h3 className="title-forum-page">Let's Talk About STEM!</h3>
            <ForumPostList 
                posts={posts}
                userPosts={userPosts}
                comments={comments}
                // addComment={addComment}
            />
        </div>
    )
}



