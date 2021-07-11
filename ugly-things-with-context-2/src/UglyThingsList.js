import React from "react"
import UglyThing from "./UglyThing"
import { UglyThingsContextConsumer } from "./UglyThingsContext"



function UglyThingsList() {

    return (
        <div>
            <UglyThingsContextConsumer>
                {
                    ({ uglyThingsList }) => {
                        const myUglyList = uglyThingsList.map((item, index) =>
                            <UglyThing
                                key={item._id}
                                index={index}
                                id={item._id}
                                item={item}
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