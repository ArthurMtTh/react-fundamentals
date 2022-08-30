import React from "react";

const directChild = (props) => {
    return(
        <React.Fragment>
            <span>{props.text} </span><br></br>
            <span>{props.number} </span><br></br>
            <span>{props.bool ? 'True' : 'False' }</span>
        </React.Fragment>
    )
}

export default directChild;