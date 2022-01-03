import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext({})


const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function UserProvider (props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        comments: [],
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initState)


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
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            getUserComments()
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
            issues: [],
            comments: []
        })
    }

//handle auth error
    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

//reset auth error
    function resetAuthErr(){
        setUserState(prevState =>({
            ...prevState,
            errMsg: ""
        }))
    }

//get all user issues
    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

//get all user comments
    function getUserComments(){
        userAxios.get("/api/comment/user")
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                comments: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

//add issue -- move to issueCommentProvider??
    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                issues:  [...prevState.issues, res.data]
            }))
        })

    }

//add comment -- move to issueCommentProvider??
   function addComment() {
        userAxios.post("/api/comment", newComment)
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                comments:  [...prevState.comments, res.data]
            }))
        })
        
    }

//vote -- how handle this?? upvotes + downvotes
   function addVote () {

   }



return (

    <UserContext.Provider
        value = {{
            ...userState,
            signup,
            login,
            logout,
            addIssue,
            addComment,
            resetAuthErr

        }}>

        {props.children}

    </UserContext.Provider>

)
}