//<Friend /> Should display the info nicely.Use some styles and appropriate HTML(JSX) tags.
//< Friend /> Should also.map() through the pets array and render < Pet />.
//Pets should also be displayed nicely.

import React from "react"
import Pet from "./Pet"


function Friend(props) {
    console.log(props)
    const petsList = props.pets.map((pet, index) => <Pet key={index} petName={pet.name} petBreed={pet.breed} />)
    console.log(petsList)

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h1>Pets</h1>
            {petsList}
        </div>
    )

}

export default Friend