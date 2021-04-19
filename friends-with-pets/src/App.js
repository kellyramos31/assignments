import React from "react"
import friends from "./friends"
import Friend from "./Friend"



function App() {
    const makeList = friends.map((friend, index) => <Friend key={index} name={friend.name} age={friend.age} pets={friend.pets} />)
    console.log(makeList)
    return (
        <div>
            {makeList}
        </div>
    )


}

export default App


