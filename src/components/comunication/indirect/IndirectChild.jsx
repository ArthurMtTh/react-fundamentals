import React from "react";

const indirectChild = (props) => {
    const generateAge = () => {return parseInt(Math.random() * 40) + 30}
    const generateWork = () => {return Math.random() > 0.5}

    return(
        <React.Fragment>
            <div>Son</div>
            <button onClick={_ => { props.clickButton('Jhon', generateAge, generateWork)}}>
                Get informations
            </button>
        </React.Fragment>
    )
}

export default indirectChild;

