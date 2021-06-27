import React from "react"


function UglyThing(props) {

    return (
        <div>
            <h2>{props.item.title}</h2>
            <img src={props.item.imgUrl} alt={props.item.description} />
            <p>{props.item.description}</p>
            <p>{props.item.comment}</p>
        </div>

    )

}

export default UglyThing