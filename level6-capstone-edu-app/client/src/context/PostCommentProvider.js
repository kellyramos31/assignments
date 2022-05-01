import React, { useState } from "react"
import axios from "axios"


export const PostCommentContext = React.createContext({})

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function PostCommentProvider(props) {

        const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        userPosts: [],
        posts: [],
        comments: [],
        errMsg: ""
    }

const [postState, setPostState] = useState(initState)



function getPosts(){
        userAxios.get("/api/forumpost")
        .then(res => {
            console.log("res from postCommentProvider:", res)
            setPostState(prevState => ({
                ...prevState,
                posts: res.data
            }))

             console.log("posts from getPosts", res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }



// function sortCommentsForIssue() {
//     userAxios.get("/api/issue/sortComments")
//     .then(res => {
//             console.log("res from issueCommentProvider:", res)
//             setIssueState(prevState => ({
//                 ...prevState,
//                 issues: res.data
//             }))

//              console.log("issues from getIssues", res.data)
//         })
//         .catch(err => console.log(err.response.data.errMsg))

// }


 //GET USER'S INDIVIDUAL ISSUES   

function getUserPosts(){
  userAxios.get("/api/forumpost/user")
    .then(res => {
      console.log(res)
      setPostState(prevState => ({
        ...prevState,
        userPosts: res.data
      }))
      console.log("userPosts from getUserPosts", res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }


//GET ALL COMMENTS (regardless of user)
function getComments(){
        userAxios.get("/api/comment")
        .then(res => {
            console.log(res)
            setPostState(prevState => ({
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



//ADD POST
    function addPost(newUserPost) {
        userAxios.post("/api/forumpost", newUserPost)
          .then(res => {
            console.log(res)
            setPostState(prevState => ({
                ...prevState,
                postState:  [...prevState.userPosts, res.data]
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


function deletePost(postId) {
        console.log("postId:", postId)
;
        userAxios.delete(`/api/forumpost/${postId}`)
             .then(res => {
                setPostState(prevState=> ({userPosts: prevState.userPosts.filter(userPost => userPost._id !== postId)}))
                getPosts()
             })
        
            .catch(err=>console.log(err.response.data.errMsg))
    }


//EDIT USER'S ISSUE
    function editPost(inputs, postId) {
        console.log("postId to be edited", postId)
        console.log("inputs for edit", inputs)
        userAxios.put(`/api/forumpost/${postId}`, inputs)
         .then(res => {
            setPostState(prevState => prevState.userPosts.map(userPost => userPost._id !== postId ? userPost : res.data))
      })
      .catch(err=>console.log(err.response.data.errMsg))
    }

 
//COMBINED ADD COMMENT
function combinedAddComment (commentText, _post){
  addComment(commentText, _post)
  addCommentTally(_post)
}

//ADD COMMENT
   function addComment(commentText, _post) {
      const commentAdd = {
        commentText: commentText,
        _post: _post
      }
      // const _issue = issueId
      console.log("commentAdd:", commentAdd)
      // console.log("adding comment -- issueId:", issueId)
      userAxios.post("/api/comment", commentAdd)
         
        .then(res => {
            console.log("addComment res", res)
            setPostState(prevState => ({
                ...prevState,
                postState:  [...prevState.posts, res.data]
            })
              )})
        .catch(err=>console.log(err.response.data.errMsg))
    }


//INCREMENT COMMENT TOTAL ON SPECIFIC ISSUE
function addCommentTally (postId) {
    console.log("_post from addCommentTally:", postId)
    userAxios.put(`/api/forumpost/increment/${postId}`, postId)
    .then(res => {
            console.log("addComment res", res)
            setPostState(prevState => ({
                ...prevState,
                postState:  [...prevState.posts, res.data]
            })
              )})
            
        .catch(err=>console.log(err.response.data.errMsg))
        
} 

//COMBINED DELETE COMMENT
function combinedDeleteComment (commentId, postId){
  deleteComment(commentId)
  minusCommentTally(postId)
}

//DELETE USER'S COMMENT
//NOTE******this filters it out of comments but does not clear id out of the issue in _comments array*****
    function deleteComment(commentId) {
        console.log("commentId:", commentId)
        userAxios.delete(`/api/comment/${commentId}`)
             .then(res => {
                setPostState(prevState=> ({posts: prevState.posts.filter(post=> post._comment !== commentId)}))
                // getUserIssues()
                // getIssues()
             })
        
            .catch(err=>console.log(err.response.data.errMsg))
    }

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
function minusCommentTally (postId) {
    console.log("_post from minusCommentTally:", postId)
    userAxios.put(`/api/forumpost/decrement/${postId}`, postId)
    .then(res => {
            console.log("minusComment res", res)
            setPostState(prevState => ({
                ...prevState,
                postState:  [...prevState.posts, res.data]
            })
              )})
            
        .catch(err=>console.log(err.response.data.errMsg))
        
} 


//EDIT COMMENT
   function editComment(inputs, commentId){
        console.log("commentId to be edited", commentId)
        console.log("inputs for edit", inputs)
        userAxios.put(`/api/comment/${commentId}`, inputs)
         .then(res => {
            
            setPostState(prevState => prevState.posts.map(post => post._comment !== commentId ? post.userComment : res.data))
      })
      .catch(err=>console.log(err.response.data.errMsg))
    }





    return (
        <PostCommentContext.Provider
            value={{
            ...postState,
            getUserPosts,
            getPosts,
            // posts,
            //userPosts,
            // upVote,
            // downVote,
            // getTotalNumberComments,
            // totalComments,
            // voterUpVote,
            // voterDownVote,
            // removeVote,
            // issues,
            // userIssues,
            // voteCount,
            // calcNetVotes,
            addPost,
            deletePost,
            editPost,
            getComments,
            addComment,
            combinedAddComment,
            combinedDeleteComment,
            deleteComment,
            // commentUpVote,
            // commentDownVote,
            // deleteCommentFromIssueArray,
            // combinedDeleteComment,
            editComment,
           
        }}>

        {props.children}


        </PostCommentContext.Provider>

    )

}