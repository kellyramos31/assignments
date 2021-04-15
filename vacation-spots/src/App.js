import React from "react"
import Card from "./Card"
import vacationData from "./vacationSpots"


function App() {
    const vacationComponents = vacationData.map(item => <Card key={item.id} vacation={item} />)


    return (
        <div>
            {vacationComponents}
        </div>
    )
}

export default App