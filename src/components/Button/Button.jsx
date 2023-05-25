import PropTypes from "prop-types";
import { ButtonFeedback } from "./Button.styled";

const Button = ({ name, onClick }) => {
        return (
            <ButtonFeedback name={name} onClick={onClick} type="button">
                {name}
            </ButtonFeedback>
        )
}

export default Button;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}