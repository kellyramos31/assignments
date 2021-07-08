import React, { Component } from "react"
// import UglyThingsList from "./UglyThingsList"
import { UglyThingsContextConsumer } from "./UglyThingsContext"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 500px;
    margin-top: 3px;
    margin-bottom: 20px;
    margin-left:  5%;
    float: left;
    border: 10px solid black;
    border-radius: 8px;
    background-color: black;
`;

const Title = styled.h2`
    // background-color: black;
    color: white;
    width: 250px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 0px;
`;

const Image = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 6px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 0px;
    `;

const Comment = styled.p`
    // background-color: black;
    color: white;
    width: 250px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 20px;
    margin-top: 0px;
    `;

const Button = styled.button`
    margin-top: 5px;
    width: 175px;
    background-color: royalblue;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
    `;

const CancelAndEditButton = styled.button`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 175px;
    background-color: royalblue;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
`;

const FormTitle = styled.h3`
    margin: 0;  
    text-align: center;
    font-family: verdana;
    background-color: black;
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
    width: 300px;
    margin-top: 5px;
`;


class UglyThing extends Component {

    state = {
        id: this.props.item._id || "",
        title: this.props.item.title || "",
        imgUrl: this.props.item.imgUrl || "",
        description: this.props.item.description || ""
    }

    render() {

        return (
            <div>
                <UglyThingsContextConsumer>
                    {({ handleChange, handleDelete, handleEdit, toggleEdit, isEditing }) => {
                        return (
                            isEditing
                                ? <div >

                                    <Wrapper>

                                        <FormTitle>Edit This Ugly Thing:</FormTitle>

                                        <UglyForm key={this.props.item._id} >

                                            <UglyInput
                                                name="title"
                                                value={this.state.title}
                                                onChange={handleChange}
                                            />
                                            <UglyInput
                                                name="imgUrl"
                                                value={this.state.imgUrl}
                                                onChange={handleChange}
                                            />
                                            <UglyInput
                                                name="description"
                                                value={this.state.description}
                                                onChange={handleChange}
                                            />
                                        </UglyForm>


                                        <CancelAndEditButton onClick={() => { handleEdit(this.props.item._id) }}>Save Edited Ugly Thing</CancelAndEditButton>
                                        <CancelAndEditButton onClick={toggleEdit} className="cancel">Cancel Edit</CancelAndEditButton>

                                    </Wrapper>

                                </div >
                                :

                                < div >
                                    < Wrapper key={this.props.item._id}>
                                        <Title>{this.props.item.title}</Title>
                                        <Image src={this.props.item.imgUrl} alt={this.props.item.description} />
                                        <Comment>{this.props.item.description}</Comment>
                                        <Button onClick={() => handleDelete(this.props.item._id)} > Delete This Ugly Thing</Button>
                                        <Button onClick={toggleEdit}>Edit This Ugly Thing</Button>
                                    </Wrapper>
                                </div>

                        )
                    }}
                </UglyThingsContextConsumer>

            </div>
        )
    }
}

export default UglyThing