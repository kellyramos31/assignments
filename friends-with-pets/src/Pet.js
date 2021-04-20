import React from "react"


function Pet(props) {
    console.log("pet component props", props)
    const styles = {
        color: "royalblue",
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center"
    }

    return (

        <div>
            <p style={styles}>Pet Name: {props.petName}</p>
            <p style={styles}>Breed: {props.petBreed}</p>
        </div>
    )


}

export default Pet
