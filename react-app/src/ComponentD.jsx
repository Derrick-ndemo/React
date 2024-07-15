/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
    const user = useContext(UserContext)
    return (
        <div className="comp-box">
            <h1>ComponentD</h1>
            <p>
                {`Au revoir ${user}`}
            </p>
        </div>
    )
}

export default ComponentD;