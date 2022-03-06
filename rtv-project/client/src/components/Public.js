import React, { useContext, useEffect} from "react"
import PublicIssueList from "./PublicIssueList.js"
// import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"



export default function Public() {


      const {
        issueState,
        issues,
        comments,
        getIssues,
        // addComment,
        getComments
    } = useContext(IssueCommentContext)

    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getIssues()
    getComments()
    // eslint-disable-next-line  
  }, [issueState])


    return (
        <div className="public">
            <PublicIssueList 
                issueState={issueState}
                issues={issues}
                comments={comments}
                // addComment={addComment}
            />
        </div>
    )
}