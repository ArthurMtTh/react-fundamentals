import './Card.css'
import React from "react";

const card = (props) => {
    return (
        <div className="Card" style={{
            backgroundColor: props.color || '#a53a3a'
        }}>
            <div className="Title">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}

export default card;