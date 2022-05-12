// import React, {useContext} from "react"
import React from "react"
import PostText from './PostText.js'
//import Comment from "./Comment.js" -- HOW COMBINE IN THE COMMENT FORM HERE???
// import { IssueCommentContext } from "../context/IssueCommentProvider.js"
// import { UserContext } from "../context/UserProvider.js"

export default function PostList(props){

const { userPosts}  = props


return (

    <div className="user-post-list">
       {userPosts.map(userPost=> <PostText {...userPost} key={userPost._id}/>)}
    </div>
  )
}
