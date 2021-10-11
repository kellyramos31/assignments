import React, {useState} from "react"



function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", checked: props.checked || "", bountyAmount: props.bountyAmount || "", type: props.type || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs=>({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }


    return(
        <form className="bounty-form" onSubmit={handleSubmit}>
            <h3>Add New Bounty Here:</h3>
            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName}
                onChange = {handleChange}
                placeholder="First Name"
            />
             <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName}
                onChange = {handleChange}
                placeholder="Last Name"
            />
             <input 
                type="checkbox" 
                name="alive" 
                value="true"
                onChange = {handleChange} 
                placeholder="Living?(true or false)"
            />
             <input 
                type="number" 
                name="bountyAmount" 
                value={inputs.bountyAmount}
                onChange = {handleChange} 
                placeholder="Bounty Amount $"
            />
             <input 
                type="text" 
                name="type" 
                value={inputs.type} 
                onChange = {handleChange}
                placeholder="Sith or Jedi?"
            />

            <button>{props.btnText}</button> 
        </form>
    )
}

export default BountyForm