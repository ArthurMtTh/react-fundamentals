import React from "react";

const indirectChild = (props) => {

    return(
        <React.Fragment>
            <div>Son</div>
            <button onClick={_ => { props.clickButton('Jhon', 53, true)}}>
                Get informations
            </button>
        </React.Fragment>
    )
}

export default indirectChild;

