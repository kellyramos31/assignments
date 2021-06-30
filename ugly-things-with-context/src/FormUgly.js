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
                {({ handleSubmit, handleChange, title, imgUrl, description }) => {
                    return (
                        <UglyForm onSubmit={handleSubmit}>
                            <FormTitle>Add Ugly Thing Here:</FormTitle>
                            <UglyInput
                                name="title"
                                value={title}
                                onChange={handleChange}
                                placeholder="title"
                            />
                            <UglyInput
                                name="imgUrl"
                                value={imgUrl}
                                onChange={handleChange}
                                placeholder="imgUrl"
                            />
                            <UglyInput
                                name="description"
                                value={description}
                                onChange={handleChange}
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