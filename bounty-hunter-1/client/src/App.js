import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./Bounty.js"
import BountyForm from "./BountyForm.js"

function App() {

 const [bounties, setBounties] = useState([])

 const getBounties = () => {
    axios.get("/bounties")
    .then(res=>setBounties(res.data))
    .catch(err=>console.log(err))
  }



  useEffect(()=>{
    getBounties()
  }, [])

  return (
    <div>
      <BountyForm />
      {bounties.map(bounty=> <Bounty {...bounty} key={bounty.firstName}/>)}
    </div>
  );
}

export default App;
