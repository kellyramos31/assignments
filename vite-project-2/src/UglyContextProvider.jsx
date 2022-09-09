import React, {useState} from "react";
import axios from "axios";

const UglyContext = React.createContext()

function UglyContextProvider(props){
    const [list, setList] = useState([])
  
  React.useEffect(() => {
   axios.get("https://api.vschool.io/eboniwilliams/thing")
        .then(res => setList(res.data))
        
  },[])

    function postUglyThing(thing){
        axios.post("https://api.vschool.io/eboniwilliams/thing", thing)
        .then(res => setList((prevList => ([...prevList, res.data]))
        ))
        .catch(error => console.log(error))  
    }

    function putUglyThings(thing){
        axios.put("https://api.vschool.io/eboniwilliams/thing/<thingId>", thing)
        .then(res => setList(res.data))
        .catch (err => console.log(err))
    }

    function deleteUglyThing(thing){
        axios.delete("https://api.vschool.io/eboniwilliams/thing/<thingId>_id", thing)
        .then(res => setList(res.data))
        .catch(err => console.log(err))
    }



return(
    <UglyContext.Provider value={{
     list,
     postUglyThing,
     putUglyThings,
     deleteUglyThing
    }}>
    {props.children}
    </UglyContext.Provider>

)

}

export {UglyContextProvider, UglyContext}