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

// const [totalComments, setTotalComments] = useState(0)

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

             console.log("issues from getIssues", res.data)
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
            console.log("comments from getComments", res.data)
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
//NEED TO ADD SOMETHING TO DELETE RELATED COMMENTS ALSO -- they seem to persist even though issue deletes

//do i actually need to chain .filter and .map (or similiar) in my setIssueState???

//     Issue.pre('deleteIssue', function(next) {
//     // Remove all the assignment docs that reference the removed person.
//     this.Comment.remove({ _issue: this.issueId }, next);
// });


function deleteIssue(issueId) {
        console.log("issueId:", issueId)
;
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
  
// function combinedDeleteComment(issueId, commentId){
//   // deleteComment(commentId)
//   deleteCommentFromIssueArray(issueId, commentId)
  
// }

//CALCULATE NET VOTES (netVotes =upVotes - downVotes)
function calcNetVotes(upVotes, downVotes){
  console.log("upVotes", upVotes)
  console.log("downVotes", downVotes)
  const net = upVotes - downVotes
  return net
}
  
//DELETE USER'S COMMENT
//NOTE******this filters it out of comments but does not clear id out of the issue in _comments array*****
    function deleteComment(commentId) {
        console.log("commentId:", commentId)
        userAxios.delete(`/api/comment/${commentId}`)
             .then(res => {
                setIssueState(prevState=> ({issues: prevState.issues.filter(issue=> issue._comment !== commentId)}))
                // getUserIssues()
                // getIssues()
             })
        
            .catch(err=>console.log(err.response.data.errMsg))
    }

 //DELETE COMMENT FROM ARRAY of comments ids (_comments) in the issue
 function deleteCommentFromIssueArray(issueId, commentId) {
    console.log("comment._id to delete:", commentId)
    console.log("issue to update the comments array in:", issueId)
    userAxios.put(`/api/issue/deleteCommentFromIssue/${issueId}`)
            // console.log("commentId:", commentId)
         .then(res => {
            setIssueState(prevState => prevState.userIssues.map(userIssue => userIssue._id !== issueId ? userIssue : res.data))
            // getUserIssues()
            // getIssues()
      })
            
    .catch(err=>console.log(err.response.data.errMsg))
}


//EDIT COMMENT
   function editComment(inputs, commentId){
        console.log("commentId to be edited", commentId)
        console.log("inputs for edit", inputs)
        userAxios.put(`/api/comment/${commentId}`, inputs)
         .then(res => {
            
            setIssueState(prevState => prevState.issues.map(issue => issue._comment !== commentId ? issue.userComment : res.data))
      })
      .catch(err=>console.log(err.response.data.errMsg))
    }

//GOING TO NEED TO WRITE OVERALL VOTING FUNCTIONS (1 for Upvote & 1 for Downvote) 
//THAT COMBINE UPDATING _voters and either incrementing or decrementing total votecount


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

//UPVOTE with limit of 1 (using _voters)--this uses $addToSet, so will only add if not already there
 function voterUpVote(issueId){
  console.log("issueId for upVote:", issueId)
  userAxios.put(`/api/issue/voter/vote/${issueId}`)		
    .then(res => {
      console.log("upVote res:", res)
      if(res.data.nModified === 1){
        upVote(issueId)
      }
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

 //DOWNVOTE with limit of 1
 function voterDownVote(issueId){
  console.log("issueId for upVote:", issueId)
  userAxios.put(`/api/issue/voter/vote/${issueId}`)		
    .then(res => {
      if(res.data.nModified === 1){
        downVote(issueId)
      }
      console.log("upVote res:", res)
          setIssueState(prevState => ({
                ...prevState,
                issueState:  [...prevState.userIssues, res.data]
            }))
   
    })
   
    .catch(err => console.log(err.response.data.errMsg))
 } 


 //VOTER VOTE (using _voters)--this uses $addToSet, so will only add if not already there
//  function voterVote(issueId){
//   console.log("issueId for upVote:", issueId)
//   userAxios.put(`/api/issue/voter/vote/${issueId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//  } 




//CANCEL VOTE (using _voters) ==> However, how back this out if don't know if it was an up or down vote?
//MAYBE -- Need to separate up and down votes in model and then calculate total??

function removeVote(issueId){
  console.log("issueId for remove vote:", issueId)
  userAxios.put(`/api/issue/voter/cancelvote/${issueId}`)		
    .then(res => {
      console.log("upVote res:", res)
          setIssueState(prevState => ({
                ...prevState,
                issueState:  [...prevState.userIssues, res.data]
            }))
    })
   
    .catch(err => console.log(err.response.data.errMsg))
}




  //TOTAL NUMBER OF COMMENTS ON ISSUE
  // function getTotalNumberComments(issueId) {
  //       userAxios.get(`/api/issue/${issueId}`)
  //           .then(res => setTotalComments(res.data._comments.length))       
  //           .catch(err => console.log(err))
  //   }




    return (
        <IssueCommentContext.Provider
            value={{
            ...issueState,
            getUserIssues,
            // upVote,
            // downVote,
            // getTotalNumberComments,
            // totalComments,
            voterUpVote,
            voterDownVote,
            removeVote,
            // issues,
            // userIssues,
            // voteCount,
            calcNetVotes,
            addIssue,
            deleteIssue,
            editIssue,
            getComments,
            addComment,
            deleteComment,
            deleteCommentFromIssueArray,
            // combinedDeleteComment,
            editComment,
            getIssues
        }}>

        {props.children}


        </IssueCommentContext.Provider>

    )

}