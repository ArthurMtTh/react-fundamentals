import React from "react";

const evenOdd = (props) => {
    const even_odd = props.number % 2 === 0
    return (
        <React.Fragment>
            {props.number} is {even_odd ? <span>Even</span> : <span>Odd</span>}
        </React.Fragment>
    )
}

export default evenOdd;