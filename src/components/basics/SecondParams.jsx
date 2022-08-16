import React from "react"

export default function SecondParams(props) {
    const status = props.grade >= 7 ? 'Approved' : 'Disapproved'
    return (
        <div>
            <h2> {props.situation} </h2>
            <p>
                <strong> {props.name} </strong> is {props.grade} <br></br>
                Situation: {status}
            </p>
        </div>
    )
}