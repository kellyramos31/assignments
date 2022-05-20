import React, { useContext, useEffect} from "react"
import ForumPostList from "./ForumPostList.js"
import DropMenuPosts from "./DropMenuPosts.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"



export default function Forum() {


      const {
        postState,
        posts,
        userPosts,
        comments,
        getCommentsSpecifiedPost,
        getUserPosts,
        getPostsAndComments,
        handleMenuPosts,
        // addComment    
      } = useContext(PostCommentContext)



    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPostsAndComments()
    getCommentsSpecifiedPost()
    // eslint-disable-next-line  
  }, [postState])


//WANT TO HAVE WAY TO SEARCH FORUM POSTS BY CATEGORY/KEYWORD

    return (
        <div className="forum">
          <h3 className="title-forum-page">Let's Talk About STEM!</h3>
              <div className="dropdown-posts">
            <DropMenuPosts
              handleMenuPosts={handleMenuPosts}
              getPostsAndComments={getPostsAndComments}
            />
          </div>
            <ForumPostList 
                posts={posts}
                userPosts={userPosts}
                comments={comments}
                // addComment={addComment}
            />
        </div>
    )
}



