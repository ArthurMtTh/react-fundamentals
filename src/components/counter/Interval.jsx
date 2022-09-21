import React from "react";

const interval = props => {
    return (
        <div>
            <label htmlFor="intervalInput">Interval: </label>
            <input
                id='intervalInput'
                type="number" 
                value={props.interval}
                onChange={event => props.setInterval(+event.target.value)} />
        </div>
    )
}

export default interval;