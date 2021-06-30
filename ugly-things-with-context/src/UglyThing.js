import React from "react"
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

const Buttons = styled.button`
    margin-top: 8px;
    width: 175px;
    background-color: royalblue;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
    `;



function UglyThing(props) {

    return (
        <div key={props.id}>
            <Wrapper>
                <Title>{props.item.title}</Title>
                <Image src={props.item.imgUrl} alt={props.item.description} />
                <Comment>{props.item.description}</Comment>
                <Buttons onClick={() => props.handleDelete(props.item._id)} > Delete This Ugly Thing</Buttons>
                <Buttons>Edit This Ugly Thing</Buttons>
            </Wrapper>
        </div>

    )

}

export default UglyThing

