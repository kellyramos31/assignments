import React, {useState} from "react"
import Front from "../assets/cropped-sunset-quino-al-JFeOy62yjXk-unsplash.jpg"


export default function Flashcard(props){

const { flashcard } = props

const [flipcard, setFlipcard]=useState(false)

return(
    <div className="flashcard">
        {!flipcard ?
            <div classname="cardFront" onClick={()=>setFlipcard(!flipcard)}>
                <img className="front-of-card" src={Front} alt="card-front"/>
            </div>
            :
                <div className="cardBack" key={flashcard._id} onClick={()=>setFlipcard(!flipcard)}>
                    <h1>Back</h1>
                    <h4 className="flashcard-category">{flashcard.categorySTEM}</h4>
                    <div>
                    <img src={flashcard.imageURL} alt="flashcard" className="flashcard-bio-photo"/>
                    </div>
                    <h2>{flashcard.title}{" "}{flashcard.firstName}{" "}{flashcard.lastName}</h2>
                    <h3>{flashcard.profession1}{" "}{flashcard.profession2}{" "}{flashcard.profession3}</h3>
                    <h3>{flashcard.knownFor}</h3>
                    <h3>{flashcard.born}</h3>
                    <h3>{flashcard.fact1}</h3>
                    <h3>{flashcard.fact2}</h3>
                    <h3>{flashcard.fact3}</h3>
                    <h3>{flashcard.fact4}</h3>
                    <h3>{flashcard.fact5}</h3>
                    <h3>{flashcard.quote1}</h3>
                    <h3>{flashcard.quote2}</h3>
                    <h3>{flashcard.quote3}</h3>
            </div>
}
    </div>

)}