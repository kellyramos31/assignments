import React, {useState} from "react"
import axios from "axios"


export const UserContext = React.createContext()

export default function UserProvider(props){
    const initState = {
        user: {}, 
        token: "", 
        todos: []
    }

    // const {userState, setUserState} = useState(initState)
    //console.dir -- will console.log it as an object, so can see its key-value pairs
    const {userState} = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res=> console.log(res))
        .catch(err=>console.log(err.response.data.errMsg))   
    }

    return (
        <UserContext.Provider
         value={{
            ...userState,
            signup
        }}>
            {props.children}
        </UserContext.Provider>

    )
}