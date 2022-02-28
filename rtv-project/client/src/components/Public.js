import React, { useContext, useEffect} from "react"
import PublicIssueList from "./PublicIssueList.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"



export default function Public() {

      const {
        // issueState,  
        issues,
        comments,
        getIssues,
        getComments
    } = useContext(IssueCommentContext)

    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getIssues()
    getComments()
    // eslint-disable-next-line  
  }, [])


    return (
        <div className="public">
            <PublicIssueList 
                issues={issues}
                comments={comments}
            />
        </div>
    )
}