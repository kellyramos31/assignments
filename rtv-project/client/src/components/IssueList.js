// import React, {useContext} from "react"
import React from "react"
import IssueText from './IssueText.js'
//import Comment from "./Comment.js" -- HOW COMBINE IN THE COMMENT FORM HERE???
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"
// import { UserContext } from "../context/UserProvider.js"

export default function IssueList(props){

const { userIssues}  = props


return (
    
    <div className="user-issue-list">
       {userIssues.map(userIssue => <IssueText {...userIssue} key={userIssue._id} index={userIssue.index}/>)}
    </div>
  )
}