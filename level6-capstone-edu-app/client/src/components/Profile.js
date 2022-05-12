import React, { useContext, useEffect } from "react"
import PostForm from "./PostForm.js"
// import Forum from "./Forum.js"
import PostList from "./PostList.js"
// import CommentForm from "./CommentForm.js"
// import Learn from "./Learn.js"
import { UserContext } from "../context/UserProvider.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"



export default function Profile() {

    const {
    user: {
        username
    },
        //getUserIssues,
        // addIssue,
        // deleteIssue
    } = useContext(UserContext)

    const {
        postState,
        userPosts,
        // comments,
        // userPosts,
        getPosts,
        getUserPosts,
        addPost
    } = useContext(PostCommentContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPosts()
    // getComments()
    // eslint-disable-next-line  
  }, [postState])


//MAYBE ADD GAME SCORE HISTORY & REWARDS/BADGES SECTIONS


return (

               <div className="profile">
                   
                    <h1 className="welcome-msg">Hi @{username}!</h1>

                    <h3 className="add-post-header">Add A New Post to the STEM Forum:</h3>

                  <PostForm
                        addPost={addPost}
                    />


                  {/* <Learn
                    flashcards={flashcards}
                  /> */}
            <h2 className="profile-posts-list-header">My Posts:</h2>
                 <div className="profile-posts-list">
                     <PostList
                        userPosts={userPosts}
                     />
                   {/* <Forum
                        posts={posts}
                        // {/* // deleteComment={deleteComment}
                        // // deleteIssue={deleteIssue}
                        // // comments={comments} */}
                   {/* /> */}
                </div>
            </div>

        )
    }