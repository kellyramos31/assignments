// import React, { useContext } from "react"
import React from "react"
import ForumPostText from './ForumPostText.js'




export default function Forum(props) {

    const { posts }  = props

    
    return(
        <div>
            <h1>Hey I'm the Forum component!</h1>
              {posts.map(post => <ForumPostText {...post} key={post._id}/>)}
        </div>
    )
}


