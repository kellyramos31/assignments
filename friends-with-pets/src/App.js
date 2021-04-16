import React from "react"
import friends from "./friends"
import Pet from "./Pet"
import Friend from "./Friend"



function App() {
    const makeList = friends.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} pets={friend.pets} />)
    console.log(makeList)
    return (
        <div>
            {makeList}
            <h1>Hello World from App Component!</h1>
            <Friend />
            <Pet />
        </div>
    )
}

export default App


