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
        userIssues,
        getUserIssues,
        // addIssue,
        deleteIssue
    } = useContext(UserContext)

    const {
        addIssue,
        issueState,
        //userIssues,
        // getUserIssues,
        
    } = useContext(IssueCommentContext)


// const [userIssues, setUserIssues] = useState([])

//USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserIssues()
  }, [getUserIssues])



return (

               <div className="profile">
                   
                    <h1>Welcome @{username}!</h1>

                    <h3>Add An Issue</h3>

                    <IssueForm
                        addIssue={addIssue}
                    />


                    <h3>Your Issues</h3>
                    <IssueList
                        issueState={issueState}
                        //getUserIssues={getUserIssues}
                        deleteIssue={deleteIssue}
                        userIssues={userIssues}
                    />
                   
            </div>

        )
    }
