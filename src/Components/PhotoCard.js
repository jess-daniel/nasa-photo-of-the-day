import React from 'react'
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    // background-size: cover;
    height: 450px;
    width: 80%;
`

const Description = styled.p`
    margin: 10px 25px;
`
const PhotoCard = props => {

    return (
        <Card>
            <h1>{props.title}</h1>
            <Image src={props.src} alt="NASA pic of the day"></Image>
            <Description>{props.explanation}</Description>
        </Card>
    )
}

export default PhotoCard;