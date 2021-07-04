import React, { Component } from "react"
import axios from "axios"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    margin-top: 20px;
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
    height: 260px;
    width: 260px;
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
        description: this.props.item.description || "",
        isEditing: false
    }

    toggleEdit = () =>
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }
        ))

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleEdit = (id) => {
        console.log("EDIT button was clicked!")
        const editedId = id
        console.log("editedId", editedId)

        const editedThing = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        console.log("editedThing:", editedThing)

        axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
            .then(res => {
                const editedThing = res.data
                console.log("2nd console(after .then) editedThing:", editedThing)
                this.props.getUglyThingsData()
            })
            .catch(error => console.log(error))

        this.toggleEdit()

    }

    render() {
        return (
            <div>
                {this.state.isEditing
                    ? <div >

                        <Wrapper>

                            <FormTitle>Edit This Ugly Thing:</FormTitle>


                            <UglyForm key={this.props.index} id={this.props.item._id} >

                                <UglyInput
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                                <UglyInput
                                    name="imgUrl"
                                    value={this.state.imgUrl}
                                    onChange={this.handleChange}
                                />
                                <UglyInput
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </UglyForm>


                            <CancelAndEditButton onClick={() => { this.handleEdit(this.props.item._id) }}>Save Edited Ugly Thing</CancelAndEditButton>
                            <CancelAndEditButton onClick={this.toggleEdit} className="cancel">Cancel Edit</CancelAndEditButton>

                        </Wrapper>

                    </div >
                    :

                    < div >
                        < Wrapper >
                            <Title>{this.props.item.title}</Title>
                            <Image src={this.props.item.imgUrl} alt={this.props.item.description} />
                            <Comment>{this.props.item.description}</Comment>
                            <Button onClick={() => this.props.handleDelete(this.props.item._id)} > Delete This Ugly Thing</Button>
                            <Button onClick={this.toggleEdit}>Edit This Ugly Thing</Button>
                        </Wrapper>
                    </div>
                }

            </div>
        )
    }
}

export default UglyThing