import React from "react"


//need to render a <BlogPost /> component inside this BlogList component

function BlogList(props) {

    return (

        <div>
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
            <h6>Posted By {props.author} on {props.date}</h6>
        </div>

    )

}


export default BlogList