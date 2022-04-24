import React, {useState} from "react"
// import Front from "../assets/cropped-sunset-quino-al-JFeOy62yjXk-unsplash.jpg"


export default function Flashcard(props){

const { flashcard } = props

const [flipcard, setFlipcard]=useState(false)

return(
    <div className={`card ${flipcard ? "flip" : ""}`} onClick={()=>setFlipcard(!flipcard)}>
    {/* // <div className="flashcard-container" onClick={()=>setFlipcard(!flipcard)}> */}
        {!flipcard ?
            <div className="card-front">
               <img src={flashcard.imageURL} alt="cardFront"/> 
        
               <h1>Front O'Card</h1>
            </div>
            :
                <div className="card-back" key={flashcard._id}>
                    <h4 className="flashcard-category">{flashcard.categorySTEM}</h4>
                    <h3 className="profession-flashcard">{flashcard.profession1}{" "}{flashcard.profession2}{" "}{flashcard.profession3}</h3> 
                    <div>
                        {/* <img src={flashcard.imageURL} alt="flashcard" className="flashcard-bio-photo"/> */}
                    </div>
                    <h2>{flashcard.title}{" "}{flashcard.firstName}{" "}{flashcard.lastName}</h2>
                    <h3 className="noteworthy-flashcard">Noteworthy</h3> 
                    <h3>{flashcard.knownFor}</h3>
                    <h3 classname="birthdate-flashcard">Born  {flashcard.born}</h3>
                    <h3 classname="birthdate-flashcard">Details</h3>
                    <h3>{flashcard.fact1}</h3>
                    <h3>{flashcard.fact2}</h3>
                    <h3>{flashcard.fact3}</h3>
                    <h3>{flashcard.fact4}</h3>
                    <h3>{flashcard.fact5}</h3>
                    <h3>In {flashcard.firstName}'s words:</h3>
                    <h3>{flashcard.quote1}</h3>
                    <h3>{flashcard.quote2}</h3>
                    <h3>{flashcard.quote3}</h3>
            </div>
        }
        </div>

)}