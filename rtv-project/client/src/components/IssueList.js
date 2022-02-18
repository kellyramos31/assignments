import React from "react"
// import React, { useContext} from "react"
import IssueText from './IssueText.js'
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"

export default function IssueList(props){

const { userIssues } = props

//  const {
//     issues
//     } = useContext(IssueCommentContext)

console.log("issueState from IssueCommentContext inside IssueList comp", userIssues)


 
  return (
    
    <div className="user-issue-list">
       {userIssues.map(userIssue => <IssueText {...userIssue} key={userIssue._id}/>)}
    </div>
  )
}