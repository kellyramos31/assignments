import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext({})




export default function UserProvider (props) {


    //signup

    //login

    //logout

    //handle auth error

    //reset auth error

    //get all user issues

    //add issue

    


return (

    <UserContext.Provider
        value = {{


        }}>

        {props.children}

    </UserContext.Provider>

)
}