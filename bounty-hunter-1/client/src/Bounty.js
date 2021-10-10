import React, {useState} from "react"
import BountyForm from "./BountyForm.js"


function Bounty (props) {

    console.log(props)
    const {firstName, lastName, living, bountyAmount, type, _id, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
    <div>
      { !editToggle ?
        <>
            <h1>{firstName}{" "}{lastName}</h1>
            <h3>Alive?:  {living ? "true" : "false"}</h3>
            <h2>Bounty: $ {bountyAmount}</h2>
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
                living={living}
                bountyAmount={bountyAmount}
                type={type}
                submit={editBounty}
                btnText="Submit Edit"
            />
            <button 
                onClick = {()=>setEditToggle(prevToggle=>!prevToggle)}>
            Close
            </button>
        </>
      }
    </div>
    
)}
export default Bounty