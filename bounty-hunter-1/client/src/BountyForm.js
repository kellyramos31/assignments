import React, {useState} from "react"


function BountyForm(props) {
    const initInputs = { firstName: "", lastName: "", living: "", bountyAmount: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs=>({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBounty(inputs)
        setInputs(initInputs)
    }


    return(
        <form onSubmit={handleSubmit}>
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
                type="text" 
                name="living" 
                value={inputs.living}
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

            <button>Add Bounty</button>
        </form>

    )
}

export default BountyForm