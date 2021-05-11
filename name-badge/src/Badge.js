import React from "react"

function Badge(props) {
    return (
        <div>
            {props.name}
            {props.email}
            {props.birthPlace}
            {props.phone}
            {props.faveFood}
            {props.tellAboutSelf}

        </div>
    );
}

export default Badge

//Q:  should this just be a functional component b/c just display purposes???
