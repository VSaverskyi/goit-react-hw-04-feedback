import { Component } from "react";
import PropTypes from "prop-types";
import { NotificationText } from "./Notification.styled";

class Notification extends Component {
    render() {
        return (
            <NotificationText>{this.props.message}</NotificationText>
        )
    }
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}