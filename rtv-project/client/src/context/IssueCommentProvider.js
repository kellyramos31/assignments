import React, { useState} from "react"
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
        // userIssues: [],
        comments: [],
        errMsg: ""
    }

const [issueState, setIssueState] = useState(initState)

// const [issues, setIssues] = useState([])

// const [userIssues, setUserIssues] = useState([])

const [comments, setComments] = useState([])


//USEEFFECT

//   useEffect(() => {
//     console.log("useEffect triggered")
//     getUserIssues()
//   }, [])



//GET ALL ISSUES (regardless of user)
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

// function getUserIssues(){
//     userAxios.get("/api/issue/user")

   
//     .then(res => {
//       console.log(res)
//       setIssueState(prevState => ({
//         ...prevState,
//         userIssues: res.data
//       }))
//       console.log("userIssues from getUserIssues", res.data)
//     })
//     .catch(err => console.log(err.response.data.errMsg))
//   }


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



//Add Comment
   function addComment(newComment) {
        // console.log("adding comment -- issueId:", issueId)
        userAxios.post("/api/comment/user", newComment)
        .then(res => {
            console.log(res)
            setComments(prevState => ({
                ...prevState,
                comments:  [...prevState.comments, res.data]
            }))
        .catch(err=>console.log(err.response.data.errMsg))
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
          userAxios.put("/api/issue/user/downvote")		
    .then(res => {
      console.log("downVote res:", res)
    })
   
    .catch(err => console.log(err.response.data.errMsg))

    }




    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            //getUserIssues,
            upVote,
            downVote,
            // issues,
            // userIssues,
            comments,
            // voteCount,
            // addIssue,
            // deleteIssue,
            addComment,
            getIssues
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}