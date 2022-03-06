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
        userIssues: [],
        issues: [],
        comments: [],
        errMsg: ""
    }

const [issueState, setIssueState] = useState(initState)

// const [issues, setIssues] = useState([])

// const [userIssues, setUserIssues] = useState([])

// const [comments, setComments] = useState([])


//USEEFFECT

//   useEffect(() => {
//     console.log("useEffect triggered")
//     getIssues()
//   }, [])



//GET ALL ISSUES (regardless of user)
//.populate({path: "comments", select: "commentText, username"}) -- can I use this somewhere??

    function getIssues(){
        userAxios.get("/api/issue")
        .then(res => {
            console.log("res from issueCommentProvider:", res)
            setIssueState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


 //GET USER'S INDIVIDUAL ISSUES   

function getUserIssues(){
  userAxios.get("/api/issue/user")
    .then(res => {
      console.log(res)
      setIssueState(prevState => ({
        ...prevState,
        userIssues: res.data
      }))
      console.log("userIssues from getUserIssues", res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }


//GET ALL COMMENTS (regardless of user)
function getComments(){
        userAxios.get("/api/comment")
        .then(res => {
            console.log(res)
            setIssueState(prevState => ({
                ...prevState,
                comments: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))

}
    
//GET ALL USER COMMENTS
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



//add issue
    // function addIssue(newUserIssue) {
    //     userAxios.post("/api/issue/user", newUserIssue)
    //       .then(res => {
    //         console.log(res)
    //         setUserIssues(prevState => ({
    //             ...prevState,
    //             userIssues:  [...prevState, res.data]
    //         }))
    //     })
    //     .catch(err=>console.log(err.response.data.errMsg))
    // }


// //Delete User's Issue
//     function deleteIssue(userIssueId) {
//         console.log("userIssueId:", userIssueId)
//         userAxios.delete(`/api/issue/user/${userIssueId}`)
//              .then(res => {
//                 setUserIssues(prevState=> prevState.userIssues.filter(userIssue => userIssue._id !== userIssueId))
//     })
        
//             .catch(err=>console.log(err.response.data.errMsg))
//     }

//ADD ISSUE
    function addIssue(newUserIssue) {
        userAxios.post("/api/issue", newUserIssue)
          .then(res => {
            console.log(res)
            setIssueState(prevState => ({
                ...prevState,
                issueState:  [...prevState.userIssues, res.data]
            }))
        })
        .catch(err=>console.log(err.response.data.errMsg))
    }

    
//DELETE USER'S ISSUE
    function deleteIssue(issueId) {
        console.log("issueId:", issueId)
        userAxios.delete(`/api/issue/${issueId}`)
             .then(res => {
                setIssueState(prevState=> ({userIssues: prevState.userIssues.filter(userIssue => userIssue._id !== issueId)}))
             })
        
            .catch(err=>console.log(err.response.data.errMsg))
    }


//EDIT USER'S ISSUE
    function editIssue(inputs, issueId) {
        console.log("issueId to be edited", issueId)
        console.log("inputs for edit", inputs)
        userAxios.put(`/api/issue/${issueId}`, inputs)
         .then(res => {
            
            setIssueState(prevState => prevState.userIssues.map(userIssue => userIssue._id !== issueId ? userIssue : res.data))
      })
      .catch(err=>console.log(err.response.data.errMsg))
    }

    
//ADD COMMENT -- try adding comment to the issue here instead??
//    function addComment(newComment, issueId) {

//       // const newComment = {
//       //   commentText:  commentText,
//       //   _issue: issueId
//       // }
     
//       console.log("commentText from addComment:", newComment)
//       // console.log("addComment -- _issue:", _issue)
//       userAxios.post(`/api/issue/${issueId}`, newComment)
//         .then(res => {
//             console.log(res)
//             setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.comments, res.data]
//              }))
            
//         .catch(err=>console.log(err.response.data.errMsg))
//           })
//   }

//ADD COMMENT
   function addComment(commentText, _issue) {
      const commentAdd = {
        commentText: commentText,
        _issue: _issue
      }
      // const _issue = issueId
      console.log("commentAdd:", commentAdd)
      // console.log("adding comment -- issueId:", issueId)
      userAxios.post("/api/comment", commentAdd)
         
        .then(res => {
            console.log("addComment res", res)
            getIssues()
            // setIssueState(prevState => ({
            //     ...prevState,
            //     issueState:  [...prevState.comments, res.data]
            })
            
        .catch(err=>console.log(err.response.data.errMsg))
        
          }
  



  
//DELETE COMMENT -- NEED TO TEST THIS ONE TO SEE IF WORKS
    // function deleteComment(commentId) {
    //     console.log("commentId:", commentId)
    //     userAxios.delete(`/api/comment/${commentId}`)
    //          .then(res => {
    //             setIssueState(prevState=> ({userIssues: prevState.userComments.filter(userComment => userComment._id !== commentId)}))
    //          })
        
    //         .catch(err=>console.log(err.response.data.errMsg))
    // }

//EDIT COMMENT



//UPVOTE AN ISSUE
function upVote(issueId){
  console.log("issueId for upVote:", issueId)
  userAxios.put(`/api/issue/upvote/${issueId}`)		
    .then(res => {
      console.log("upVote res:", res)
          setIssueState(prevState => ({
                ...prevState,
                issueState:  [...prevState.userIssues, res.data]
            }))
    })
   
    .catch(err => console.log(err.response.data.errMsg))
  }


//DOWNVOTE AN ISSUE
function downVote(issueId){
    console.log("issueId for downVote:", issueId)    		
    userAxios.put(`/api/issue/downvote/${issueId}`)		
    .then(res => {
      console.log("downVote res:", res)
          setIssueState(prevState => ({
                ...prevState,
                issueState:  [...prevState.userIssues, res.data]
            }))
    })
   
    .catch(err => console.log(err.response.data.errMsg))
  }




    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            getUserIssues,
            upVote,
            downVote,
            // issues,
            // userIssues,
            //comments,
            // voteCount,
            addIssue,
            deleteIssue,
            editIssue,
            getComments,
            addComment,
            getIssues
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}