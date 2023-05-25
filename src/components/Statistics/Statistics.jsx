import PropTypes from "prop-types";
import { FeedbackCount, FeedbackPositive, FeedbackTotal, StatisticsWrapper } from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
        return (
            <StatisticsWrapper>
                <FeedbackCount>Good: {good}</FeedbackCount>
                <FeedbackCount>Neutral: {neutral}</FeedbackCount>
                <FeedbackCount>Bad: {bad}</FeedbackCount>
                <FeedbackTotal>Total: {total}</FeedbackTotal>
                <FeedbackPositive>
                    Positive feedback:{' '}
                    {positivePercentage}%
                </FeedbackPositive>
            </StatisticsWrapper>
        );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}