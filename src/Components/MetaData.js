import React from 'react'
import styled from "styled-components";


const Data = styled.div`
    display: flex;
    justify-content: space-between;
`

const MetaData = props => {

    return (
        <Data>
            <p>Date: {props.date}</p>
            <p>Version: {props.version}</p>
            <p>Media Type: {props.media}</p>
        </Data>
    )
}

export default MetaData;
