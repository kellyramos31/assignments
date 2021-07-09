import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList, handleChange, handleDelete, handleEdit }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={index}
                                index={index}
                                id={item._id}
                                item={item}
                            // handleChange={handleChange}
                            // handleDelete={handleDelete}
                            // getUglyThingsData={getUglyThingsData}
                            // toggleEdit={toggleEdit}
                            // isEditing="false"
                            // handleEdit={handleEdit}
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