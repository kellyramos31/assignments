import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList, toggleEdit }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={item._id}
                                index={index}
                                id={item._id}
                                item={item}
                                // isEditing={item.isEditing}
                                // title={item.title}
                                // imgUrl={item.imgUrl}
                                // descriptoin={item.description}
                                // isEditing={item.isEditing}
                                // isEditing={item.isEditing}
                                // handleChange={handleChange}
                                // handleDelete={handleDelete}
                                // getUglyThingsData={getUglyThingsData}
                                toggleEdit={toggleEdit}
                            // isEditing="false"
                            //handleEdit
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