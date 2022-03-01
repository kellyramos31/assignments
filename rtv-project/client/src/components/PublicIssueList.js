import React from "react"
import PublicIssueText from './PublicIssueText.js'
//import Comment from "./Comment.js" -- HOW COMBINE IN THE COMMENT FORM HERE???
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"
// import { UserContext } from "../context/UserProvider.js"

export default function IssueList(props){

const { issues }  = props


return (
    
    <div className="public-issue-list">
       {issues.map(issue => <PublicIssueText {...issue} key={issue._id} index={issue.index}/>)}
    </div>
  )
}