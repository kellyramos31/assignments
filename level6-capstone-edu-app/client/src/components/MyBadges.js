import React from "react"


export default function MyBadges(props) {

const { badgesAwarded } = props

//need to somehow display the correct number of saturn icons based on the badgesAwarded number

return (
    <div className="my-badge-awards">
            <h3 className="my-badges-title">Badge Count:</h3>

            <h4>{badgesAwarded.badgeCount}</h4>

                 <img src="./images/icons8-saturn-64.png" width="50px" height="50px" />
        
</div>
)}