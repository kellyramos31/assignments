//console.dir -- will console.log it as an object, so can see its key-value pairs

//error pointing to line const { userState, setUserState } = useState(initState);:  "Type Error:  cannot read properties of undefined (reading "username")"

//problem with this .catch line   .catch((err) => console.log(err.response.data.errMsg));; works if put in wrong info, but when give correct info get back error:
//"Unhandled rejection (Type Error): cannot read properties of undefined (reading "data")--but still adds it to database
// .catch((err) => console.dir(err)) --- if use this line, then says setUserState is not a function

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
    todos: []
  }

  const [userState, setUserState ] = useState(initState)

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user))
        getUserTodos()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
        
      })
      .catch((err) => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      todos: []
    })
  }

  function getUserTodos(){
    userAxios.get("/api/todo/user")
    .then(res => {
      console.log(res)
      setUserState(prevState => ({
        ...prevState,
        todos: res.data
      }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addTodo(newTodo){
    userAxios.post("/api/todo", newTodo)
    .then(res => {
      console.log(res)
      setUserState(prevState => ({
        ...prevState,
        todos: [...prevState.todos, res.data]
      }))
    })
    .catch(err=>console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addTodo
      }}>

      {props.children}
      
    </UserContext.Provider>
  )
}
