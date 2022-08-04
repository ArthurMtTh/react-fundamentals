import React from "react"

export default function SecondParams(props) {
    return (
        <div>
            <h2> {props.situation} </h2>
            <p>
                <strong> {props.name} </strong> is {props.grade}
            </p>
        </div>
    )
}