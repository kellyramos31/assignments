import React from "react"
import styled from "styled-components"
import { UglyThingsContextConsumer } from "./UglyThingsContext"

const FormTitle = styled.h3`
    margin: 0px;
    padding-top: 5px;
    text-align: center;
    background-color: black;
    color: yellowgreen;
`;

const UglyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    background-color: black;
    padding: 15px;
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
                        <div>

                            <FormTitle>ADD NEW UGLY THING HERE:</FormTitle>
                            <UglyForm onSubmit={handleSubmit}>
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

                        </div>

                    )

                }}
            </UglyThingsContextConsumer>
        </div>

    )
}

export default FormUgly