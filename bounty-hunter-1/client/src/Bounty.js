import React, { useState } from "react"
import BountyForm from "./BountyForm.js"


function Bounty(props) {

  console.log(props)
  const { firstName, lastName, bountyAmount, type, _id, index, editBounty, isAlive } = props
  const [editToggle, setEditToggle] = useState(false)

  return (
    <div className="bounty-card">
      {!editToggle ?
        <>
          <h1 className="bounty-name">{firstName}{" "}{lastName}</h1>
          <h3>Alive?:  {isAlive === true ? "true" : "false"}</h3>
          <h2 className="bounty-dollars">Bounty: $ {bountyAmount}</h2>
          <h3>Type:  {type}</h3>
          <button
            onClick={() => props.deleteBounty(_id)}>
            Delete
          </button>
          <button onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>
            Edit
          </button>
        </>
        :
        <>
          <BountyForm
            _id={_id}
            index={index}
            firstName={firstName}
            lastName={lastName}
            isAlive={isAlive}
            editToggle={editToggle}
            setEditToggle={setEditToggle}
            bountyAmount={bountyAmount}
            type={type}
            submit={editBounty}
            btnText="Submit Edit"
          />
          <button onClick={() => setEditToggle(prevEditToggle => !prevEditToggle)}>
            Close
          </button>
        </>
      }
    </div>

  )
}
export default Bounty