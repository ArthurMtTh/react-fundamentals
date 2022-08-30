import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

const indirect = (props) => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [work, setWork] = useState(false)

    function getInfos(name, age, work) {
        setName(name)
        setAge(age)
        setWork(work)
    }

    return (
        <div>
            <div>
                <span>{name}</span><br></br> 
                <span>{age}</span><br></br>
                <span>{work ? 'Working' : 'No money'}</span>
            </div>
            <IndirectChild clickButton={getInfos}>

            </IndirectChild>
        </div>
    )
}

export default indirect;