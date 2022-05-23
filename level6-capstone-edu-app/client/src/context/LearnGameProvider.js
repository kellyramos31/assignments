import React, { useState } from "react"
// import React from "react"
import axios from "axios"


export const LearnGameContext = React.createContext({})

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function LearnGameProvider(props) {

        const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        flashcards: [],
        questions: [],
        // scores:[],
        // posts: [],
        // comments: [],
        errMsg: ""
    }

const [flashcardState, setFlashcardState] = useState(initState)

const [scoreState, setScoreState] = useState(initState)

const [gameState, setGameState] = useState([])

const [questionsAnswered, setQuestionsAnswered] = useState(0)

const [questionsCorrect, setQuestionsCorrect] = useState(0)

const [badgeReward, setBadgeReward] = useState(0)

const [gameScore, setGameScore] = useState(0)

const [isModalOpen, setIsModalOpen] = useState(false)



//GET ALL FLASHCARDS
function getFlashcards(){
        console.log("getFlashcards hit")
        userAxios.get("/api/learngame/learn")
        .then(res => {
             console.log("res from learnGameProvider:", res)
             setFlashcardState(prevState => ({
                ...prevState,
                flashcards: res.data
            }))
             console.log("flashcards from getFlashcards", res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


//GET ALL GAME QUESTIONS
function getGameQuestions(){
        console.log("getGameQuestions hit")
        userAxios.get("/api/learngame/play")
        .then(res => {
            console.log("res from learnGameProvider:", res)
             setGameState(prevState => ({
                ...prevState,
                questions: res.data
            }))
             console.log("questions from getGameQuestions", res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


//*****NOTE:  WHEN RESET GAME -- NEED TO UPDATE HISTORY IN USER PROFILE/MODEL*****
 //GAME RESET
 function gameReset(){
    getGameQuestions()
    setQuestionsAnswered(0)
    setQuestionsCorrect(0)
    setGameScore(0)
 }   

 //CHECK FOR REWARD -- ***ALSO NEED TO SAVE SOMETHING TO SCORE SUMMARY SO BADGES SHOW UP IN PROFILE SUMMARY
 function rewardCheck(){
  console.log("questionsCorrect from rewardCheck", questionsCorrect)
  if((questionsCorrect !== 0) && ((questionsCorrect + 1) % 3 === 0)){
            console.log("GET A REWARD!!!")
            setBadgeReward(badgeReward + 1)
        }
    }


 function saveMyScore(gameScore) {
//    console.log("newScore", newScore)
   const scoreTotal = {
       scoreTotal: gameScore
   }

   userAxios.post("/api/learngame/play/score", scoreTotal)
        .then(res => {
            console.log(res)
            console.log(res.data)
            // setScoreState(prevState => ({
            //     ...prevState,
            //     scoreState:  [...prevState, res.data]
            })

        
        
        .catch(err=>console.log(err.response.data.errMsg))
    }

 
//Toggle Modal

// function areYouWorking(){
//     console.log("MODAL!!!!")
// }

//TOGGLE MODAL
function toggleModal(){
    setIsModalOpen(!isModalOpen)
}

//HANDLE ANSWER CHOICE SELECTION
function handleGameAnswerClick(_user, question, questionOption) {
    console.log("handling game answer click")
    console.log("gameScore", gameScore)
    console.log("questionOption.isCorrect", questionOption.isCorrect)
    console.log("question.value", question.value)
    console.log("question._id", question._id)
    console.log("questionOption._id", questionOption._id)
    setQuestionsAnswered(questionsAnswered + 1)
 

    if(questionOption.isCorrect === true) {
        setGameScore(gameScore + question.value)   
        setQuestionsCorrect(prev=> prev + 1)
        filterAnsweredQuestion(question._id)
        console.log("Stellar!  That's correct.")
        
        
        
    
        userAxios.put(`/api/learngame/game/user/score/${_user}`, question.value)
            .then(res => {
               console.log(res)
              
               
               //then something related to rewards -- e.g., if questionsCorrect=3, then reward & reset to zero.
             })
             .catch(err=>console.log(err.response.data.errMsg))  
    
    } else {
        //provide message feedback that answer is not correct -- & what else?
            console.log("Sorry, that's not correct.")
            filterAnsweredQuestion(question._id)
            }
    rewardCheck()
    
}
     



//STEM CATEGORY DROPDOWN MENU FOR FLASHCARDS -- FILTER
function handleMenuFilter(e){
        console.log(e.target.value)
        userAxios.get(`/api/learngame/learn/search/categorySTEM?categorySTEM=${e.target.value}`)
            .then(res => {
                setFlashcardState({flashcards: res.data})
                console.log("dropdown filtered data", res.data)
                console.log("flashcardState", flashcardState)
        })
              .catch(err=>console.log(err.response.data.errMsg))  
    }


//FILTER OUT ANSWERED QUESTION FROM GAME QUESTIONS ARRAY
function filterAnsweredQuestion(_id){
     setGameState(prevState=>({questions: prevState.questions.filter(question=> question._id !== _id)}))
}




// //SEARCH TERMS IN FLASHCARDS
// function searchFlashcards() {

// }



//ADD FLASHCARD
    function addFlashcard(newFlashcard) {
        userAxios.post("/api/learngame/learn", newFlashcard)
          .then(res => {
            console.log(res)
            setFlashcardState(prevState => ({
                ...prevState,
                flashcardState:  [...prevState.flashcards, res.data]
            }))
        })
        .catch(err=>console.log(err.response.data.errMsg))
    }

    





//INCREMENT COMMENT TOTAL ON SPECIFIC ISSUE
// function addCommentTally (postId) {
//     console.log("_issue from addCommentTally:", postId)
//     userAxios.put(`/api/issue/increment/${postId}`, postId)
//     .then(res => {
//             console.log("addComment res", res)
//             setPostState(prevState => ({
//                 ...prevState,
//                 postState:  [...prevState.posts, res.data]
//             })
//               )})
            
//         .catch(err=>console.log(err.response.data.errMsg))
        
// } 

//COMBINED DELETE COMMENT
// function combinedDeleteComment (commentId, postId){
//   deleteComment(commentId)
//   minusCommentTally(postId)
// }

//DELETE USER'S COMMENT
//NOTE******this filters it out of comments but does not clear id out of the issue in _comments array*****
    // function deleteComment(commentId) {
    //     console.log("commentId:", commentId)
    //     userAxios.delete(`/api/comment/${commentId}`)
    //          .then(res => {
    //             setPostState(prevState=> ({posts: prevState.posts.filter(post=> post._comment !== commentId)}))
    //             // getUserIssues()
    //             // getIssues()
    //          })
        
    //         .catch(err=>console.log(err.response.data.errMsg))
    // }

 //DELETE COMMENT FROM ARRAY of comments ids (_comments) in the issue
//  function deleteCommentFromPostArray(postId, commentId) {
//     console.log("comment._id to delete:", commentId)
//     console.log("post to update the comments array in:", postId)
//     userAxios.put(`/api/post/deleteCommentFromPost/${postId}`)
//             // console.log("commentId:", commentId)
//          .then(res => {
//             setPostState(prevState => prevState.posts.map(post => post._id !== postId ? post : res.data))
//             // getUserIssues()
//             getPosts()
//       })
            
//     .catch(err=>console.log(err.response.data.errMsg))
// }


//DECREMENT COMMENT TOTAL ON SPECIFIC ISSUE
// function minusCommentTally (postId) {
//     console.log("_post from minusCommentTally:", postId)
//     userAxios.put(`/api/issue/decrement/${postId}`, postId)
//     .then(res => {
//             console.log("minusComment res", res)
//             setPostState(prevState => ({
//                 ...prevState,
//                 postState:  [...prevState.posts, res.data]
//             })
//               )})
            
//         .catch(err=>console.log(err.response.data.errMsg))
        
// } 

  
// function combinedDeleteComment(issueId, commentId){
//   // deleteComment(commentId)
//   deleteCommentFromIssueArray(issueId, commentId)
  
// }

//CALCULATE NET VOTES (NETVOTES = upVotes - downVotes)
// function calcNetVotes(upVotes, downVotes){
//   console.log("upVotes", upVotes)
//   console.log("downVotes", downVotes)
//   const net = upVotes - downVotes
//   return net
// }
  


//EDIT COMMENT
//    function editComment(inputs, commentId){
//         console.log("commentId to be edited", commentId)
//         console.log("inputs for edit", inputs)
//         userAxios.put(`/api/comment/${commentId}`, inputs)
//          .then(res => {
            
//             setPostState(prevState => prevState.posts.map(post => post._comment !== commentId ? post.userComment : res.data))
//       })
//       .catch(err=>console.log(err.response.data.errMsg))
//     }

//GOING TO NEED TO WRITE OVERALL VOTING FUNCTIONS (1 for Upvote & 1 for Downvote) 
//THAT COMBINE UPDATING _voters and either incrementing or decrementing total votecount


//UPVOTE AN ISSUE
// function upVote(issueId){
//   console.log("issueId for upVote:", issueId)
//   userAxios.put(`/api/issue/upvote/${issueId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//   }

//UPVOTE with limit of 1 (using _voters)--this uses $addToSet, so will only add if not already there
//  function voterUpVote(issueId){
//   console.log("issueId for upVote:", issueId)
//   userAxios.put(`/api/issue/voter/vote/${issueId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//       if(res.data.nModified === 1){
//         upVote(issueId)
//       }
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
      
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//  } 

//DOWNVOTE AN ISSUE
// function downVote(issueId){
//     console.log("issueId for downVote:", issueId)    		
//     userAxios.put(`/api/issue/downvote/${issueId}`)		
//     .then(res => {
//       console.log("downVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//   }

 //DOWNVOTE with limit of 1
//  function voterDownVote(issueId){
//   console.log("issueId for upVote:", issueId)
//   userAxios.put(`/api/issue/voter/vote/${issueId}`)		
//     .then(res => {
//       if(res.data.nModified === 1){
//         downVote(issueId)
//       }
//       console.log("upVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
   
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//  } 


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

//UPVOTE A COMMENT
// function upVoteComment(commentId){
//   console.log("commentId for upVote:", commentId)
//   userAxios.put(`/api/comment/upvoteit/${commentId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//   }

//UPVOTE a COMMENT with limit of 1 (using _voters)--this uses $addToSet, so will only add if not already there
//  function commentUpVote(commentId){
//   console.log("commentId for upVote:", commentId)
//   userAxios.put(`/api/comment/voter/onlyonce/${commentId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//       if(res.data.nModified === 1){
//         upVoteComment(commentId)
//       }
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.issues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//  } 

 //DOWNVOTE A COMMENT
// function downVoteComment(commentId){
//     console.log("commentId for downVote:", commentId)    		
//     userAxios.put(`/api/comment/downvoteit/${commentId}`)		
//     .then(res => {
//       console.log("downVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//   }

 //DOWNVOTE COMMENT with limit of 1
//  function commentDownVote(commentId){
//   console.log("commentId for downVote:", commentId)
//   userAxios.put(`/api/comment/voter/onlyonce/${commentId}`)		
//     .then(res => {
//       if(res.data.nModified === 1){
//         downVoteComment(commentId)
//       }
//       console.log("downVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.issues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
//  } 




//CANCEL VOTE (using _voters) ==> However, how back this out if don't know if it was an up or down vote?
//MAYBE -- Need to separate up and down votes in model and then calculate total??

// function removeVote(issueId){
//   console.log("issueId for remove vote:", issueId)
//   userAxios.put(`/api/issue/voter/cancelvote/${issueId}`)		
//     .then(res => {
//       console.log("upVote res:", res)
//           setIssueState(prevState => ({
//                 ...prevState,
//                 issueState:  [...prevState.userIssues, res.data]
//             }))
//     })
   
//     .catch(err => console.log(err.response.data.errMsg))
// }


  //TOTAL NUMBER OF COMMENTS ON ISSUE
  // function getTotalNumberComments(issueId) {
  //       userAxios.get(`/api/issue/${issueId}`)
  //           .then(res => setTotalComments(res.data._comments.length))       
  //           .catch(err => console.log(err))
  //   }




    return (
        <LearnGameContext.Provider
            value={{
            ...flashcardState,
            getFlashcards,
            addFlashcard,
            ...gameState,
            getGameQuestions,
            handleGameAnswerClick,
            gameScore,
            saveMyScore,
            questionsAnswered,
            questionsCorrect,
            handleMenuFilter,
            gameReset,
            toggleModal,
            isModalOpen,
            badgeReward,
          
            
        }}>

        {props.children}


        </LearnGameContext.Provider>

    )

}