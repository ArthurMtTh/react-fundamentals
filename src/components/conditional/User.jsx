import React from "react";
import If, {Else} from './If'

const user = (props) => {
    const user = props.user || {};
    return (
        <div>
            {/* will render "Welcome {user.name}" if the param user is set and the user.name is valid */}
            <If test={user && user.name}>
                Welcome {user.name}
                <Else>
                    Welcome <strong>Impostor</strong>
                </Else>
            </If>
        </div>
    )
}

export default user;