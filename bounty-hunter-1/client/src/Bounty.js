import React, {useState} from "react"
import BountyForm from "./BountyForm.js"


function Bounty (props) {

    console.log(props)
    const {firstName, lastName, alive, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
    <div className="bounty-card">
      { !editToggle ?
        <>
            <h1>{firstName}{" "}{lastName}</h1>
            <h3>Alive?:  {alive ? "true" : "false"}</h3>
            <h2 className="bounty-dollars">Bounty: $ {bountyAmount}</h2>
            <h3>Type:  {type}</h3>
            <button
                onClick={()=>props.deleteBounty(_id)}>
            Delete
            </button>
            <button 
                onClick = {()=>setEditToggle(prevToggle=>!prevToggle)}>
            Edit
            </button>
        </>
      :
        <>
            <BountyForm
                _id={_id} 
                firstName={firstName}
                lastName={lastName}
                alive={alive}
                bountyAmount={bountyAmount}
                type={type}
                submit={props.editBounty}
                btnText="Submit Edit"
            />
            <button onClick = {()=>setEditToggle(prevToggle=>!prevToggle)}>
            Close
            </button>
        </>
      }
    </div>
    
)}
export default Bounty