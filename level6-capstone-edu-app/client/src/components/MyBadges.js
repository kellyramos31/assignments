import React from "react"
import { GiRingedPlanet } from 'react-icons/gi'

export default function MyBadges(props) {

const { badgesAwarded } = props

//need to somehow display the correct number of saturn icons based on the badgesAwarded number

return (
    <div className="my-badge-awards">
            <h3 className="my-badges-title">Badge Count</h3>

            <h4>{badgesAwarded.badgeCount}</h4>
    <p className="reward-icons">
            {Array(badgesAwarded.badgeCount).fill(<GiRingedPlanet key={badgesAwarded._id}/>)}
    </p>
                 {/* <img src="../images/icons8-saturn-64.png" width="50px" height="50px" /> */}
        
</div>
)}