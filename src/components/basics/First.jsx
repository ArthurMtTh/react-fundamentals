import React from "react";

export default function First () {

    const message = "constant message"

    return (
        <div>
            <h1>First component</h1>
            <p>Welcome</p>
            <p> {message} </p>
        </div>
    )
}