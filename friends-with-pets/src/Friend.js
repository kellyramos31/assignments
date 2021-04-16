//<Friend /> Should display the info nicely.Use some styles and appropriate HTML(JSX) tags.
//< Friend /> Should also.map() through the pets array and render < Pet />.
//Pets should also be displayed nicely.

import React from "react"
import FriendList from "./FriendList"

function Friend(props) {
    return (
        <div>
            <p>Friend: {props.friend}</p>
            <p>Age: {props.age}</p>

        </div>
    )

}

export default Friend