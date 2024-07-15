import propTypes from "prop-types";

function UserGreeting(prop) {
    // if (prop.isLoggedIn) {
    //     return (
    //         <h2>Welcome {prop.username} !!</h2>
    //     )
    // } else {
    //     return (
    //         <h2>You need to log in first</h2>
    //     )
    // }
    return prop.isLoggedIn ? (
        <h2 className="welcome-msg">Welcome {prop.username} !!</h2>
    ) : (
        <h2 className="login-prompt">You need to log in first</h2>
    );
}

UserGreeting.prototype = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Gues",
};

export default UserGreeting;
