import React, { useContext, useEffect} from "react"
import PublicIssueList from "./PublicIssueList.js"
// import CommentForm from "./CommentForm.js"
import { IssueCommentContext } from "../context/IssueCommentProvider.js"



export default function Public() {


      const {
        issueState,
        issues,
        userIssues,
        comments,
        getUserIssues,
        getIssues,
        // addComment,
        getComments
    } = useContext(IssueCommentContext)

    //USEEFFECT

  useEffect(() => {
    console.log("useEffect triggered")
    getUserIssues()
    getIssues()
    getComments()
    // eslint-disable-next-line  
  }, [issueState])




    return (
        <div className="public">
          <h3 className="title-public-page">All Users' Issues</h3>
            <PublicIssueList 
                issues={issues}
                userIssues={userIssues}
                comments={comments}
                // addComment={addComment}
            />
        </div>
    )
}