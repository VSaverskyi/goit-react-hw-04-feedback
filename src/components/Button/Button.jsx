import { Component } from "react";
import PropTypes from "prop-types";
import { ButtonFeedback } from "./Button.styled";

class Button extends Component {
    render() {
        const { name, onClick } = this.props;
        return (
            <ButtonFeedback name={name} onClick={onClick} type="button">
                        {name}
                    </ButtonFeedback>
        )
    }
}

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}