import React from "react"
import { UglyThingsContextConsumer } from "./UglyThingsContext"

function FormUgly() {

    return (
        <div>
            <h3>Ugly Things Form:</h3>
            <UglyThingsContextConsumer>
                {context => {
                    return (
                        <form onSubmit={context.handleSubmit}>
                            <input
                                name="title"
                                value={context.title}
                                onChange={context.handleChange}
                                placeholder="title"
                            />
                            <input
                                name="imgUrl"
                                value={context.imgUrl}
                                onChange={context.handleChange}
                                placeholder="imgUrl"
                            />
                            <input
                                name="description"
                                value={context.description}
                                onChange={context.handleChange}
                                placeholder="description"
                            />
                            <input
                                name="comment"
                                value={context.comment}
                                onChange={context.handleChange}
                                placeholder="comment"
                            />
                            <button>Submit Ugly Thing</button>
                        </form>
                    )
                }}
            </UglyThingsContextConsumer>
        </div>

    )
}

export default FormUgly