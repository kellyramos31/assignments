import React from "react"


function Bounty (props) {

    console.log(props)
    const {firstName, lastName, living, bountyAmount, type, _id} = props
    return(
    <div>
        <h1>{firstName}{" "}{lastName}</h1>
        <h3>Alive?:  {living ? "true" : "false"}</h3>
        <h2>Bounty: $ {bountyAmount}</h2>
        <h3>Type:  {type}</h3>
        <button
            onClick={()=>props.deleteBounty(_id)}>Delete</button>

    </div>
    
)}
export default Bounty