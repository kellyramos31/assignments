import React from "react"
import "./Badge.css"

function Badge(props) {
    return (

        <div className="badge-display">
            <h3 className="badge-title">Badge:</h3>
            <h3 className="badge-name">Name:  {props.name}</h3>
            <h3 className="badge-email">email:  {props.email}</h3>
            <h3 className="badge-birthplace">Place of Birth: {props.birthPlace}</h3>
            <h3 className="badge-phone">Phone:  {props.phone}</h3>
            <h3 className="badge-favefood">Favorite Food:  {props.faveFood}</h3>
            <h3 className="badge-aboutself"> {props.tellAboutSelf}</h3>
        </div>

    );
}

export default Badge

