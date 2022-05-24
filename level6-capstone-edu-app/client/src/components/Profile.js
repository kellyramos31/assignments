import React, { useContext, useEffect } from "react"
import PostForm from "./PostForm.js"
import PostList from "./PostList.js"
import MyScores from "./MyScores.js"
import { UserContext } from "../context/UserProvider.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"
import { LearnGameContext } from "../context/LearnGameProvider.js"
import MyBadges from "./MyBadges.js"


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
        getPosts,
        getUserPosts,
        addPost
    } = useContext(PostCommentContext)

        const {
        getMyGameScores,
        myScores,
        // getBadgeCount,
        // badgesAwarded
    } = useContext(LearnGameContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserPosts()
    getPosts()
    getMyGameScores()
    // getBadgeCount()
    // eslint-disable-next-line  
  }, [postState])


//ADD GAME SCORE HISTORY & REWARDS/BADGES SECTIONS


return (

               <div className="profile">
                   
                    <h1 className="welcome-msg">Hi @{username}!</h1>

                  
                  <MyScores
                      myScores={myScores}
                      // badgesAwarded={badgesAwarded}
                  />

                  {/* <MyBadges
                      badgesAwarded={badgesAwarded}
                  />
                   */}
                

                  <PostForm
                        addPost={addPost}
                    />

                
                  <img src="./images/icons8-saturn-64.png" width="60px" height="60px" />

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