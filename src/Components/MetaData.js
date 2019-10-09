import React from 'react'

const MetaData = props => {

    return (
        <div>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.media}</p>
        </div>
    )
}

export default MetaData;
