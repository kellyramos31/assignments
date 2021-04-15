import React from "react"

function Card(props) {
    const moreStyles = {
        fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        width: 500
    }

    const cardStyles = {
        borderRadius: 15,
        marginBottom: 25,
        width: 500,
        marginLeft: "auto",
        marginRight: "auto"
    }

    const styles = {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
        width: 500
    }

    console.log(props)
    console.log(props.vacation.timeToGo)

    if (props.vacation.timeToGo === "Spring") {
        styles.backgroundColor = "green"
        styles.color = "yellow"
        cardStyles.border = "green solid 8px"
        cardStyles.boxShadow = "5px 10px darkgreen"

    } else if (props.vacation.timeToGo === "Summer") {
        styles.backgroundColor = "red"
        styles.color = "yellowgreen"
        cardStyles.border = "red solid 8px"
        cardStyles.boxShadow = "5px 10px darkred"

    } else if (props.vacation.timeToGo === "Fall") {
        styles.backgroundColor = "orange"
        styles.color = "purple"
        cardStyles.border = "orange solid 8px"
        cardStyles.boxShadow = "5px 10px darkorange"

    } else if (props.vacation.timeToGo === "Winter") {
        styles.backgroundColor = "blue"
        styles.color = "lightgrey"
        cardStyles.border = "blue solid 8px"
        cardStyles.boxShadow = "5px 10px darkblue"

    }

    if (props.vacation.price <= 500) {
        props.vacation.price = "$"
    } else if (props.vacation.price <= 1000) {
        props.vacation.price = "$$"
    } else if (props.vacation.price > 1000) {
        props.vacation.price = "$$$"
    }


    return (
        <div style={cardStyles}>
            <header style={moreStyles}>Place: {props.vacation.place}</header>
            <p style={moreStyles}>Price: {props.vacation.price}</p>
            <p style={styles}>Time to go: {props.vacation.timeToGo}</p>
        </div >
    )
}

export default Card
