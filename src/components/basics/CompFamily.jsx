import React, {cloneElement} from "react";

const family = (props) => {
    return (
        <div>
            {cloneElement(props.children, props)}
        </div>
    )
}

export default family;