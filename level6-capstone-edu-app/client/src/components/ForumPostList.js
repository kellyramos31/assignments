import React, {useContext} from "react"
import ForumPostText from './ForumPostText.js'
import DropDownPosts from "./DropDownPosts.js"
import { PostCommentContext } from "../context/PostCommentProvider.js"

export default function ForumPostList(props){

const { posts}  = props

const {
    handleMenuFilterPosts,
    getPosts
     } = useContext(PostCommentContext)


return (
<div>
       <div>
            <DropDownPosts
              handleMenuFilterPosts={handleMenuFilterPosts}
              getPosts={getPosts}
            />
          </div>

    <div className="forum-post-list">
       {posts.map(post => <ForumPostText {...post} key={post._id}/>)}
    </div>
</div>
  )
}