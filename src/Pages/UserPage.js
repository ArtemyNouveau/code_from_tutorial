import React from "react";
import {connect} from "react-redux";

const UserPage = (props) => {
    return (
        <div>
            <p>Hello {props.user.userName}!</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPage)
