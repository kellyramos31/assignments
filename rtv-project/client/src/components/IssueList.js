
import React, { useContext } from "react"
import IssueText from './IssueText.js'
import { UserContext } from "../context/UserProvider.js"

export default function IssueList(){

 const {
    issues
    } = useContext(UserContext)

  console.log("props from IssueText comp", issues)

 


  return (
    <div className="issue-list">
      {issues.map(issue => <IssueText {...issue} key={issue._id}/>)}
    </div>
  )
}