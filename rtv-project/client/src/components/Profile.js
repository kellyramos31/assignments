import React, { useContext } from "react"
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
        userIssues
    } = useContext(UserContext)

    const {
        // issueState,
        // issues,
        // getUserIssues,
        addIssue,
        deleteIssue
    } = useContext(IssueCommentContext)





return (

               <div className="profile">

                    <h1>Welcome @{username}!</h1>

                    <h3>Add An Issue</h3>

                    <IssueForm
                        // issueState={issueState}
                        //getUserIssues={getUserIssues}
                        addIssue={addIssue}
                    />


                    <h3>Your Issues</h3>
                    <IssueList
                        userIssues={userIssues}
                        deleteIssue={deleteIssue}
                    />
                   
            </div>

        )
    }
