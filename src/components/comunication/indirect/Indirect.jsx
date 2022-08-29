import React from "react";
import IndirectChild from "./IndirectChild";

const indirect = () => {

    let name = '?'
    let age = 49
    let work = false

    function getInfos(name, age, work) {
        console.log(name, age, work)
    }

    return (
        <div>
            <div>
                <span>{name} / </span> 
                <span>{age} / </span>
                <span>{work ? 'Working' : 'No money'}</span>
            </div>
            <IndirectChild clickButton={getInfos}>

            </IndirectChild>
        </div>
    )
}

export default indirect;