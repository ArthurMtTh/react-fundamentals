import React from "react";

export default function RandomNumber (min, max) {
    min = 3;
    max = 10;
    return (
        <div>
            <p>
                The random number above {min} and {max} is: <br></br>
                {Math.floor(Math.random() * (max - min + 1) + min)}
            </p>
        </div>
    )
}