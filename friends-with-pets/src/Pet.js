import React from "react"


function Pet(props) {
    console.log("pet component props", props)
    return (
        <div>
            <h3>Name: {props.petName}</h3>
            <h3>Breed: {props.petBreed}</h3>
        </div>
    )


}

export default Pet
