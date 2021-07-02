import React from "react"
import FormUgly from "./FormUgly"
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


function UglyThing(props) {

    return (

        <div>
            {props.isEditing
                ? <div >
                    < FormUgly
                        key={props.index}
                        id={props.item._id}
                        title={props.item.title}
                        imgUrl={props.item.imgUrl}
                        description={props.item.description}
                        handleChange={props.handleChange}
                        handleEdit={props.handleEdit}
                        isEditing={props.isEditing}
                    />
                    <CancelAndEditButton onClick={() => props.handleEdit(props.item._id)}>Save Edited Ugly Thing</CancelAndEditButton>
                    <CancelAndEditButton onClick={props.toggleEdit} className="cancel">Cancel Edit</CancelAndEditButton>
                </div >
                :

                < div >
                    < Wrapper >
                        <Title>{props.item.title}</Title>
                        <Image src={props.item.imgUrl} alt={props.item.description} />
                        <Comment>{props.item.description}</Comment>
                        <Button onClick={() => props.handleDelete(props.item._id)} > Delete This Ugly Thing</Button>
                        <Button onClick={props.toggleEdit}>Edit This Ugly Thing</Button>
                    </Wrapper>
                </div>
            }

        </div>
    )
}

export default UglyThing

