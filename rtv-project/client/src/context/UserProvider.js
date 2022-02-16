import React, { useState } from "react"
import axios from "axios"



export const UserContext = React.createContext({})


const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        userIssues: [],
        // comments: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)


    // const [issueState, setIssueState] = useState(initState)

//     useEffect(() => {
//         console.log("useEffect triggered")
//         getUserIssues()
//     }, [])


//signup
    function signup(credentials) {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

   
//login
    function login(credentials) {
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token} = res.data
            console.log("login user, token from UserProvider", res.data)
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            // console.log("getUserIssues from UserProvider")
            // getUserComments()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg))
    }

//logout
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            userIssues: []
            // comments: []
        })
    }

//handle auth error
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }


function getUserIssues(){
    userAxios.get("/api/issue/user")
    .then(res => {
      console.log(res)
      setUserState(prevState => ({
        ...prevState,
        userIssues: res.data
      }))
      console.log("userIssues from getUserIssues", res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

//   //Add Issue
//     function addIssue(newIssue) {
//         userAxios.post("/api/issue", newIssue)
//         .then(res => {
//             console.log(res)
//             setIssueState(prevState => ({
//                 ...prevState,
//                 issues:  [...prevState.issues, res.data]
//             }))
//         })
//         .catch(err=>console.log(err.response.data.errMsg))
//     }

//reset auth error
    function resetAuthErr(){
        setUserState(prevState =>({
            ...prevState,
            errMsg: ""
        }))
    }





return (

    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            getUserIssues,
            // addIssue,
            // addComment,
            resetAuthErr
        }}>

        {props.children}

    </UserContext.Provider>

  )
}