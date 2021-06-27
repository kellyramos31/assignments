import React from "react"
import styled from "styled-components"
import { UglyThingsContextConsumer } from "./UglyThingsContext"

const FormTitle = styled.h3`
    text-align: center;
    color: white;
`;

const UglyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    background-color: black;
    padding: 30px;
`;

const UglyInput = styled.input`
    width: 450px;
    margin-top: 5px;
`;

const SubmitUgly = styled.button`
    margin-top: 10px;
    background-color: yellowgreen;
    border-radius: 5px;
    border: 2px solid white;
`;


function FormUgly() {

    return (
        <div>

            <UglyThingsContextConsumer>
                {context => {
                    return (
                        <UglyForm onSubmit={context.handleSubmit}>
                            <FormTitle>Add Ugly Thing Here:</FormTitle>
                            <UglyInput
                                name="title"
                                value={context.title}
                                onChange={context.handleChange}
                                placeholder="title"
                            />
                            <UglyInput
                                name="imgUrl"
                                value={context.imgUrl}
                                onChange={context.handleChange}
                                placeholder="imgUrl"
                            />
                            <UglyInput
                                name="description"
                                value={context.description}
                                onChange={context.handleChange}
                                placeholder="description"
                            />
                            <SubmitUgly>Submit Ugly Thing</SubmitUgly>
                        </UglyForm>
                    )
                }}
            </UglyThingsContextConsumer>
        </div>

    )
}

export default FormUgly