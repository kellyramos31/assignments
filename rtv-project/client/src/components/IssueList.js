import React, {useContext} from "react"
// import React from "react"
import IssueText from './IssueText.js'
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"
import { UserContext } from "../context/UserProvider.js"

export default function IssueList(){

  const {
       userIssues  
    } = useContext(UserContext)

//  const {
//     issues
//     } = useContext(IssueCommentContext)

// const {userIssues} = props


console.log("issueState from IssueCommentContext inside IssueList comp", userIssues)


 
  return (
    
    <div className="user-issue-list">
       {userIssues.map(userIssue => <IssueText {...userIssue} key={userIssue._id}/>)}
    </div>
  )
}