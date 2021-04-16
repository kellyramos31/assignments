//<Friend /> Should display the info nicely.Use some styles and appropriate HTML(JSX) tags.
//< Friend /> Should also.map() through the pets array and render < Pet />.
//Pets should also be displayed nicely.

import React from "react"


function Friend() {
    return (
        <div>
            <h1>Name</h1>
            <h3>Age</h3>
            <p>Pets</p>
        </div>
    )

}

export default Friend