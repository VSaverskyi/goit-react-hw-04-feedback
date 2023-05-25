import PropTypes from "prop-types";
import Button from "components/Button/Button";
import { ButtonWrapper } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
            <ButtonWrapper>
                {options.map((item) => {
                    return (<Button key={item} name={item} onClick={onLeaveFeedback}/>)
                })}
            </ButtonWrapper>
        )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}