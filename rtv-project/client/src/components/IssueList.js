import React, { useContext } from "react"
import IssueText from './IssueText.js'
import { UserContext } from "../context/UserProvider.js"

export default function IssueList(props){

 const {
    issues
    } = useContext(UserContext)

  console.log("props from IssueText comp", props)


  return (
    <div className="issue-list">
      {issues.map(issue => <IssueText {...issue} key={issue._id}/>)}

    </div>
  )
}