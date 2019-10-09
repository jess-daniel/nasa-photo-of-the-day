import React from 'react'

const PhotoCard = props => {


    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.src} alt="NASA pic of the day"/>
            <p>{props.explanation}</p>
        </div>
    )
}

export default PhotoCard;