import React, { useContext } from "react"
import PostForm from "./PostForm.js"
import PostList from "./PostList.js"
// import CommentForm from "./CommentForm.js"
import { UserContext } from "../context/UserProvider.js"
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"

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

    // const {
    //     addIssue,
    //     issueState,
    //     // issues,
    //     userIssues,
    //     comments,
    //     getUserIssues,
    //     getIssues,
    //     // getComments,
    //     deleteIssue,
    //     deleteComment
    // } = useContext(IssueCommentContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

//   useEffect(() => {
//     console.log("useEffect triggered")
//     getUserIssues()
//     getIssues()
//     // getComments()
//     // eslint-disable-next-line  
//   }, [issueState])



return (

               <div className="profile">
                   
                    <h1 className="welcome-msg">Welcome @{username}!</h1>

                    <h3>Add A Post to the Forum</h3>

                    <PostForm
                        // addPost={addPost}
                    />

                    
                    <h2 className="profile-posts-list-header">{username}'s Posts</h2>
                 <div className="posts-list">
                    <PostList
                        // deleteComment={deleteComment}
                        // deleteIssue={deleteIssue}
                        // userIssues={userIssues}
                        // comments={comments}
                    />
                </div>
            </div>

        )
    }