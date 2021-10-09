import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./Bounty.js"
import BountyForm from "./BountyForm.js"

function App() {

 const [bounties, setBounties] = useState([])

 const getBounties = () =>{
    axios.get("/bounties")
    .then(res=>setBounties(res.data))
    .catch(err=>console.log(err))
  }

 const addBounty = (newBounty) =>{
    axios.post("/bounties", newBounty)
    .then(res=> {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
      
    .catch(err=>console.log(err))
 }

 const deleteBounty = (bountyId) =>{
   axios.delete("/bounties/${bountyId}", bountyId)
   .then(res=>{
      setBounties(prevBounties=>prevBounties.filter(bounty => bounty._id !== bountyId))
   })
   .catch(err=>console.log(err))
 }

  useEffect(()=>{
    getBounties()
  }, [])

  return (
    <div>
      <BountyForm 
        addBounty={addBounty}
      />
      {bounties.map(bounty=> 
          <Bounty 
            {...bounty} 
            key={bounty.firstName}
            deleteBounty={deleteBounty}
            />
      )}
    </div>
  );
}

export default App;
