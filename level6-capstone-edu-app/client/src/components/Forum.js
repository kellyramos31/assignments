import React, { useContext, useEffect} from "react"
import ForumPostList from "./ForumPostList.js"
import DropMenuPosts from "./DropMenuPosts.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"




export default function Forum() {


      const {
        postState,
        posts,
        userPosts,
        getUserPosts,
        getPosts,
        handleMenuPosts
    } = useContext(PostCommentContext)



  //USEEFFECT
  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPosts()
    // eslint-disable
    // eslint-disable-next-line  
  }, [postState])



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
            />

        </div>
    )
}

