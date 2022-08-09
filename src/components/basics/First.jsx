import React from "react";

const randomNumber = (props) => {
    const {max, min} = props;
    const random = parseInt(Math.floor(Math.random() * (max - min + 1) + min))

    return (
        <React.Fragment>
            <p>
                The random number above the min: {min} and the max: {max} is: {random}.
            </p>
        </React.Fragment>
    )
};

export default randomNumber;