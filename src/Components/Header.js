import React from "react";

export default (props) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <button onClick={props.changePage}>Change page</button>
            <div>
                <button onClick={props.login}>Login</button>
                <button onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
}
