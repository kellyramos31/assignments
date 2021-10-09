import React from "react"


function Bounty (props) {

    console.log(props)
    const {firstName, lastName, living, bountyAmount, type} = props
    return(
    <div>
        <h1>{firstName}{" "}{lastName}</h1>
        <h3>Alive?:  {living ? "true" : "false"}</h3>
        <h2>Bounty: $ {bountyAmount}</h2>
        <h3>Type:  {type}</h3>

    </div>
    
)}
export default Bounty