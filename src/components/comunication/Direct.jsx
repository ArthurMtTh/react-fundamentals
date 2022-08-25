import React from "react";
import DirectChild from "./DirectChild";

const direct = () => {
    return (
        <div>
            <DirectChild 
                text='Bartrieko'
                number={19}
                bool={true}/>

            <DirectChild 
                text='Dex'
                number={12}
                bool={false}
            />
        </div>
    )
}

export default direct;