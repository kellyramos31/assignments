import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList, handleDelete, handleEdit, isEditing, toggleEdit }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={index}
                                id={item._id}
                                item={item}
                                isEditing={isEditing}
                                toggleEdit={toggleEdit}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                        return myUglyList
                    }
                }

            </UglyThingsContextConsumer>
        </div>
    )

}

export default UglyThingsList
