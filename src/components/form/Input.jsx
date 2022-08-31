import React, {useState} from "react";
import "./Input.css";

const Input = (props) => {

    const [first, setFirst] = useState("Initial");

    function handleChange (e) {
        setFirst(e.target.firstValue)
    }

    return (
        <div className="Input">
            <h2>{first}</h2>
            <input value={first} onChange={handleChange}/>
            <input value={first} readOnly />
            <input value={undefined}/>
        </div>
    );
};

export default Input;