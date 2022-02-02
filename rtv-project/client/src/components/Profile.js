import React, { useContext } from "react"
import IssueForm from "./IssueForm.js"
import IssueList from "./IssueList.js"
import { UserContext } from "../context/UserProvider.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"

export default function Profile() {

    const {
    user: {
        username,
        issues
    }
    } = useContext(UserContext)

    const {
        issueState,
        addIssue
    } = useContext(IssueCommentContext)





return (

               <div className="profile">

                    <h1>Welcome @{username}!</h1>

                    <h3>Add An Issue</h3>

                    <IssueForm
                        issueState={issueState}
                        addIssue={addIssue}
                    />

                    <h3>Your Issues</h3>
                    <IssueList
                        issues={issues}
                    />
            </div>

        )
    }
