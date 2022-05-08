import React, { useContext} from "react"
import { LearnGameContext } from "../context/LearnGameProvider.js"

export default function DropDownFlashcards(props) {

const {
    handleMenuFilter
} = useContext(LearnGameContext)

    return (
        <div>
            <div className="dropdown-menu">
                <h5 className="dropdown-title">Flashcards By Category</h5>

                <select onChange={handleMenuFilter} className="dropdown">
                    <option>--Select a Category--</option>
                    <option value="Science">Science</option>
                    <option value="Tech">Tech</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Math">Math</option>
                </select>
            </div>
        </div>
    )
}

