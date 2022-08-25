import React from "react";
import If from './If'

const user = (props) => {
    const user = props.user || {}
    return (
        <div>
            {/* will render "Welcome {user.name}" if the param user is set and the user.name is valid */}
            <If test={user && user.name}>
                Welcome {user.name}
            </If>

            {/* will render this message if the param user or the user.name isn't set */}
            <If test={!user || !user.name}>
                Welcome Impostor
            </If>
        </div>
    )
}

export default user;