import React from "react"
import "./BlogList.css"


//need to render a <BlogPost /> component inside this BlogList component

function BlogList(props) {
    const BlogPost = () =>
        <div>
            <p className="title">{props.title}</p>
            <p className="subtitle-blog">{props.subtitle}</p>
            <p className="posted">Posted By <span>{props.author}</span> on {props.date}</p>
            <hr></hr>
        </div>

    return (
        <BlogPost />

    )

}

export default BlogList