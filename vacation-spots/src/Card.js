import React from "react"

function Card(props) {
    const moreStyles = {
        fontSize: 30,
        textAlign: "center",
        width: 400
    }

    const styles = {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        width: 400
    }

    console.log(props)
    console.log(props.vacation.timeToGo)

    if (props.vacation.timeToGo === "Spring") {
        styles.backgroundColor = "green"
        styles.color = "yellow"

    } else if (props.vacation.timeToGo === "Summer") {
        styles.backgroundColor = "red"
        styles.color = "yellowgreen"

    } else if (props.vacation.timeToGo === "Fall") {
        styles.backgroundColor = "orange"
        styles.color = "purple"

    } else if (props.vacation.timeToGo === "Winter") {
        styles.backgroundColor = "blue"
        styles.color = "lightgrey"

    }
    return (
        <div className="vacation-card">
            <header style={moreStyles}>Place: {props.vacation.place}</header>
            <p style={moreStyles}>Price: {props.vacation.price}</p>
            <p style={styles}>Time to go: {props.vacation.timeToGo}</p>
        </div >
    )
}

export default Card
