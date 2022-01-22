import React, { useState } from "react"
import axios from "axios"


export const IssueCommentContext = React.createContext({})

const userAxios = axios.create()

export default function IssueCommentProvider(props) {

        const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        // comments: [],
        errMsg: ""
    }

const [issueState, setIssueState] = useState(initState)

    //get all user issues
    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {
            console.log(res)
            setIssueState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    
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

//add issue -- move to issueCommentProvider??
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

//add comment -- move to issueCommentProvider??
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

//vote -- how handle this?? upvotes + downvotes
//    function addVote () {

//    }

    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            getUserIssues,
            addIssue,
            // addComment,
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}