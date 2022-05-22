import React, { useContext, useEffect} from "react"
import ForumPostList from "./ForumPostList.js"
// import ForumCommentList from "./ForumCommentList.js"
import DropMenuPosts from "./DropMenuPosts.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"
// import ForumCommentText from "./ForumCommentText.js"



export default function Forum() {


      const {
        postState,
        posts,
        userPosts,
        // comments,
        // postComments,
        getUserPosts,
        getPosts,
        handleMenuPosts,
        // addComment,
        // getComments
    } = useContext(PostCommentContext)



    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPosts()
    // eslint-disable-next-line  
  }, [postState])


//WANT TO HAVE WAY TO SEARCH FORUM POSTS BY CATEGORY/KEYWORD

    return (
        <div className="forum">
          <h3 className="title-forum-page">Let's Talk About STEM!</h3>
              <div className="dropdown-posts">
            <DropMenuPosts
              handleMenuPosts={handleMenuPosts}
              getPosts={getPosts}
            />
          </div>

         
          <ForumPostList 
                posts={posts}
                userPosts={userPosts}
                // addComment={addComment}
            />

          {/* <ForumCommentList/> */}


        </div>
    )
}

