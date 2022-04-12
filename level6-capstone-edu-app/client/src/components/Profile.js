import React, { useContext, useEffect } from "react"
//import React, { useContext } from "react"
import PostForm from "./PostForm.js"
// import PostList from "./PostList.js"
// import CommentForm from "./CommentForm.js"
// import Learn from "./Learn.js"
import { UserContext } from "../context/UserProvider.js"
import { LearnGameContext } from "../context/LearnGameProvider.js"

export default function Profile() {

    const {
    user: {
        username
    },
        // userIssues,
        //getUserIssues,
        // addIssue,
        // deleteIssue
    } = useContext(UserContext)

  const {
    getFlashcards,
    //     // flashcards,
    //     flashcardState
//     //     issueState,
//     //     // issues,
//     //     userIssues,
//     //     comments,
//     //     getUserIssues,
//     //     getIssues,
//     //     // getComments,
//     //     deleteIssue,
//     //     deleteComment
} = useContext(LearnGameContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

  useEffect(() => {
    console.log("useEffect to get Flashcards triggered")
    getFlashcards()
    // eslint-disable-next-line  
  }, [])



return (

               <div className="profile">
                   
                    <h1 className="welcome-msg">Welcome @{username}!</h1>

                    <h3>Add A Post to the Forum</h3>

                  <PostForm
                        // addPost={addPost}
                    />


                      {/* <div>
                        {flashcardState.map(flashcard=><h2>{flashcard.firstName}</h2>)}
                    </div> */}
            

                    
                    {/* <h2 className="profile-posts-list-header">{username}'s Posts</h2>
                 <div className="posts-list">
                    <PostList
                        // deleteComment={deleteComment}
                        // deleteIssue={deleteIssue}
                        // userIssues={userIssues}
                        // comments={comments}
                    /> */}
                </div>
            // </div>

        )
    }