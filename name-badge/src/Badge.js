import React from "react"
import "./Badge.css"

function Badge(props) {
    // console.log(props)
    // console.log("badge key", props.id)
    return (
        <div className="badge-display">
            <h3 className="badge-title">BADGE</h3>
            {props.id % 2 === 0
                ? <h3 className="badge-title" style={{ backgroundColor: "purple" }}>BADGE</h3>
                : <h3 className="badge-title" style={{ backgroundColor: "royalblue" }}>BADGE</h3>
            }
            <h3 className="badge-name" > Name: {props.name}</h3>
            <h3 className="badge-email">email:  {props.email}</h3>
            <h3 className="badge-birthplace">Place of Birth: {props.birthPlace}</h3>
            <h3 className="badge-phone">Phone:  {props.phone}</h3>
            <h3 className="badge-favefood">Favorite Food:  {props.faveFood}</h3>
            <h3 className="badge-aboutself"> {props.tellAboutSelf}</h3>
        </div>
    )
}

export default Badge

