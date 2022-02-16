import React, { useState, useEffect } from "react"
import axios from "axios"


export const IssueCommentContext = React.createContext({})

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssueCommentProvider(props) {

        const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        // comments: [],
        errMsg: ""
    }

const [issueState, setIssueState] = useState(initState)

const [issues, setIssues] = useState([])

// const [comments, setComments] = useState([])


//useEffect
  useEffect(() => {
    console.log("useEffect triggered")
    getIssues()
  }, [])




//GET ALL ISSUES (regardless of user)
    function getIssues(){
        userAxios.get("/api/issues")
        .then(res => {
            console.log("res from issueCommentProvider:", res)
            setIssues(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

//GET ALL COMMENTS (regardless of user)
    
//get all user comments
    // function getUserComments(){
    //     userAxios.get("/api/comment/user")
    //     .then(res => {
    //         console.log(res)
    //         setUserState(prevState => ({
    //             ...prevState,
    //             comments: res.data
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // }

//Add Issue
    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            console.log(res)
            setIssueState(prevState => ({
                ...prevState,
                issues:  [...prevState.issues, res.data]
            }))
        })
        .catch(err=>console.log(err.response.data.errMsg))
    }


//Delete Issue
    function deleteIssue(issueId) {
        console.log("issueId:", issueId)
        userAxios.delete(`/api/issue/${issueId}`)
             .then(res => {
                setIssueState(prevState=> prevState.issues.filter(issue => issue._id !== issueId))
    })
        
            .catch(err=>console.log(err.response.data.errMsg))
    }



//Add Comment
   function addComment(newComment) {
        // console.log("adding comment -- issueId:", issueId)
        userAxios.post("/api/comment", newComment)
        .then(res => {
            console.log(res)
            setIssueState(prevState => ({
                ...prevState,
                issues:  [...prevState.comments, res.data]
            }))
        })
        
    }

//UPVOTE AN ISSUE
function upVote(issueId){
  console.log("issueId for upVote:", issueId)
  userAxios.put(`/api/issue/user/upvote/${issueId}`)		
    .then(res => {
      console.log("upVote res:", res)
          setIssueState(prevState => ({
                ...prevState,
                issues:  [...prevState.issues, res.data]
            }))
    })
   
    .catch(err => console.log(err.response.data.errMsg))
  }







//DOWNVOTE AN ISSUE
    function downVote(){
          userAxios.put("/api/issue/downvote")		
    .then(res => {
      console.log("downVote res:", res)
    })
   
    .catch(err => console.log(err.response.data.errMsg))

    }




    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            // getUserIssues,
            upVote,
            downVote,
            issues,
            // voteCount,
            addIssue,
            deleteIssue,
            addComment
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}