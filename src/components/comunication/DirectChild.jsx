import React from "react";

const directChild = () => {
    return(
        <React.Fragment>
            <span>{props.text} </span>
            <span>{props.number} </span>
            <span>{props.bool ? 'True' : 'False' }</span>
        </React.Fragment>
    )
}

export default directChild;