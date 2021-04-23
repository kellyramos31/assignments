import React from "react"
import "./BlogList.css"


//need to render a <BlogPost /> component inside this BlogList component

function BlogList(props) {
    const BlogPost = () =>
        <div>
            <h3 className="title">{props.title}</h3>
            <h3 className="subtitle-blog">{props.subtitle}</h3>
            <h3 className="posted">Posted By {props.author} on {props.date}</h3>
        </div>

    return (
        <BlogPost />
    )

}

export default BlogList