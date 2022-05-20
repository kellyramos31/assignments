import React, {useContext} from "react"
import { PostCommentContext } from "../context/PostCommentProvider.js"

export default function DropdownPosts(props) {


const {
    handleMenuPosts,
    getPostsAndComments
} = useContext(PostCommentContext)


    return (
        <div>
            <div className="dropdown-menu">
                <h5 className="dropdown-title">Posts By Category</h5>

                <select onChange={handleMenuPosts} className="dropdown">
                    <option>--Select a Category--</option>
                    {/* <option value=>All Flashcards</option> */}
                    <option value="Science">Science</option>
                    <option value="Tech">Tech</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Math">Math</option>
                </select>
                <button className="return-to-all-posts-btn" onClick={getPostsAndComments}>View All Posts</button>
            </div>
        </div>
    )
}