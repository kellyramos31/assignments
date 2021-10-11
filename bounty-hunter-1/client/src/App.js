import React, {useState, useEffect} from "react"
import "./styles.css"
import axios from "axios"
import Bounty from "./Bounty.js"
import BountyForm from "./BountyForm.js"

function App() {

 const [bounties, setBounties] = useState([])

 const getBounties = () =>{
    axios.get(`/bounties`)
    .then(res=>setBounties(res.data))
    .catch(err=>console.log(err))
  }

 const addBounty = (newBounty) =>{
    axios.post(`/bounties`, newBounty)
    .then(res=> {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
      
    .catch(err=>console.log(err))
 }

 const deleteBounty = (bountyId) =>{
   axios.delete(`/bounties/${bountyId}`, bountyId)
   .then(res=>{
      setBounties(prevBounties=>prevBounties.filter(bounty => bounty._id !== bountyId))
   })
   .catch(err=>console.log(err))
 }

 const editBounty = (updates, bountyId) =>{
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res=> 
      {setBounties(prevBounties=>prevBounties.map(bounty=>bounty._id !== bountyId ? bounty : res.data))})
    
    .catch(err=>console.log(err))
 }


//useEffect -- check this -- does not seem to be firing after initial get --
useEffect (()=>{
    console.log("useEffect triggered")
    getBounties()
  }, [])


  return (
    <div>
      <div>
        <BountyForm 
          submit={addBounty}
          btnText="Add Bounty"
        />
        {bounties.map((bounty, index)=> 
            <Bounty 
              {...bounty}              //id already passing down here
              key={bounty._id}
              index={index}
              deleteBounty={deleteBounty}
              editBounty={editBounty}
              />
        )}
      </div>
    </div>
  );
}

export default App;
