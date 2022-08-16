import React from "react";
import FamilyMember from './CompMember';

const family = (props) => {
    return (
        <div>
            <FamilyMember name='Karen' lastName='Von Neuman'/>
            <FamilyMember name='Harry' {...props}/>
            <FamilyMember name='Karoline' lastName='Dossy'/>
        </div>
    )
}

export default family;