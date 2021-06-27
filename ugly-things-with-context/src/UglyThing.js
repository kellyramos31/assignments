import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
`;

const Title = styled.h2`
    border: 2px solid green;
`;



function UglyThing(props) {

    return (
        <Wrapper>
            <Title>{props.item.title}</Title>
            <img src={props.item.imgUrl} alt={props.item.description} />
            <p>{props.item.description}</p>
        </Wrapper>

    )

}

export default UglyThing