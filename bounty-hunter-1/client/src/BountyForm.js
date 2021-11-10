import React, { useState } from "react"



function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", isAlive: props.isAlive || "", bountyAmount: props.bountyAmount || "", type: props.type || "", checked: props.checked }

    const [inputs, setInputs] = useState(initInputs)

    // const [checked, setChecked] = useState(false)
    //e.target.checked
    //need to update the isAlive field with handleCheckmark or handleChange or handleSubmit
    //right now it's updating state, but not the database info


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))

    }

    const handleCheckmark = (e) => {
        let checked = e.target.checked
        console.log("checked", checked)
        console.log("e.target.checked", e.target.checked)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)


        if (props.btnText === "Submit Edit") {
            props.setEditToggle(prevToggle => !prevToggle)
        }
    }

    return (
        <form className="bounty-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <label>
                Alive?
                <input
                    type="checkbox"
                    name="checked"
                    value={inputs.checked}
                    onChange={handleCheckmark}
                    placeholder="Living?(true or false)"
                />
            </label>

            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount $"
            />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Sith or Jedi?"
            />

            <button>{props.btnText}</button>

        </form>
    )
}

export default BountyForm