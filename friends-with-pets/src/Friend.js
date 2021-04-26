//<Friend /> Should display the info nicely.Use some styles and appropriate HTML(JSX) tags.
//< Friend /> Should also.map() through the pets array and render < Pet />.
//Pets should also be displayed nicely.

import React from "react"
import Pet from "./Pet"


function Friend(props) {

    const styled = {
        color: "green",
        fontWeight: "bold",
        textDecoration: "underline",
        textAlign: "center"
    }

    const styled2 = {
        color: "green",
        textDecoration: "none",
        textAlign: "center"
    }

    const styled3 = {
        color: "royalblue",
        fontWeight: "bold",
        fontStyle: "italic",
        textDecoration: "underline",
        textAlign: "center"
    }

    const outerStyle = {
        border: "solid black 5px",
        marginLeft: "450px",
        marginRight: "450px",
        marginBottom: "40px"

    }

    console.log(props)
    const petsList = props.pets.map((pet, index) => <Pet key={index} petName={pet.name} petBreed={pet.breed} />)
    console.log(petsList)

    return (
        <div style={outerStyle}>
            <h2 style={styled}>Name: {props.name}</h2>
            <h3 style={styled2}>Age: {props.age}</h3>
            <h3 style={styled3}>{props.name}'s Pets:</h3>
            {petsList}
        </div>
    )

}

export default Friend