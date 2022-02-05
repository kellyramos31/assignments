import React, { useState } from "react"
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
// const [voteCount, setVoteCount] = useState(0)

    //get all user issues
    // function getUserIssues(){
    //     userAxios.get("/api/issue/user")
    //     .then(res => {
    //         console.log("res from issueCommentProvider:", res)
    //         setIssueState(prevState => ({
    //             ...prevState,
    //             issues: res.data
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // }

    
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

//Add Comment
//    function addComment() {
//         userAxios.post("/api/comment", newComment)
//         .then(res => {
//             console.log(res)
//             setUserState(prevState => ({
//                 ...prevState,
//                 comments:  [...prevState.comments, res.data]
//             }))
//         })
        
//     }

//UPVOTE AN ISSUE
    function upVote(){
      userAxios.put("/api/issue")		
    .then(res => {
      console.log(res)
    })
   
    .catch(err => console.log(err.response.data.errMsg))
  }



//DOWNVOTE AN ISSUE
    function downVote(){

    }




    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            upVote,
            downVote,
            // voteCount,
            // getUserIssues,
            addIssue
            // addComment,
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}