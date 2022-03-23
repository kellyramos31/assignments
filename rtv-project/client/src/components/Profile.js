import React, { useContext, useEffect } from "react"
import IssueForm from "./IssueForm.js"
import IssueList from "./IssueList.js"
// import CommentForm from "./CommentForm.js"
import { UserContext } from "../context/UserProvider.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"

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
        addIssue,
        issueState,
        // issues,
        userIssues,
        comments,
        getUserIssues,
        getIssues,
        // getComments,
        deleteIssue,
        deleteComment
    } = useContext(IssueCommentContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserIssues()
    getIssues()
    // getComments()
    // eslint-disable-next-line  
  }, [issueState])



return (

               <div className="profile">
                   
                    <h1 className="welcome-msg">Welcome @{username}!</h1>

                    <h3>Add An Issue</h3>

                    <IssueForm
                        addIssue={addIssue}
                    />

                    
                    <h2 className="profile-issues-list-header">{username}'s Issues</h2>
                 <div className="issues-list">
                    <IssueList
                        // issueState={issueState}
                        //getUserIssues={getUserIssues}
                        deleteComment={deleteComment}
                        deleteIssue={deleteIssue}
                        // issues={issues}
                        userIssues={userIssues}
                        comments={comments}
                    />
                </div>
            </div>

        )
    }
