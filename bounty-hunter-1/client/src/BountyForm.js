import React, { useState } from "react"



function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", alive: props.isAlive || "", bountyAmount: props.bountyAmount || "", type: props.type || "" }
    const [inputs, setInputs] = useState(initInputs)

    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        setChecked(!checked)


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
                    value={checked}
                    onChange={handleChange}
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