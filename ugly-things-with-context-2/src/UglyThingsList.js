import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList, getUglyThingsData, handleChange, handleDelete, toggleEdit, handleEdit }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={item._id}
                                index={index}
                                id={item._id}
                                item={item}
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                                getUglyThingsData={getUglyThingsData}
                                toggleEdit={toggleEdit}
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