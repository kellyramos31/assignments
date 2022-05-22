import React  from "react"
import ForumPostText from './ForumPostText.js'


export default function ForumPostList(props){

const { posts}  = props

return (
<div>
    
    <div className="forum-post-list">
       {posts.map(post => <ForumPostText {...post} key={post._id}/>)}
    </div>


</div>
  )
}