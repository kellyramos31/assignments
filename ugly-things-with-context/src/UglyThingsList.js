import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList, handleDelete }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={index}
                                id={item._id}
                                item={item}
                                handleDelete={handleDelete}
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