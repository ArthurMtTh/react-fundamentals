import React from "react";

const buttons = props => {
    return (
        <div>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </div>
    )
}
export default buttons;