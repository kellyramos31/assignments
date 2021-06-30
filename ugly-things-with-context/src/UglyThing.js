import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 400px;
    margin-left:  5%;
    float: left;
`;

const Title = styled.h2`
    background-color: black;
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
    background-color: black;
    color: white;
    width: 250px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 20px;
    margin-top: 0px;
    `;



function UglyThing(props) {

    return (
        <div key={props.index}>
            <Wrapper>
                <Title>{props.item.title}</Title>
                <Image src={props.item.imgUrl} alt={props.item.description} />
                <Comment>{props.item.description}</Comment>
                <button onClick={() => props.handleDelete(props.item._id)} > Delete Ugly Thing</button>
            </Wrapper>
        </div>

    )

}

export default UglyThing

