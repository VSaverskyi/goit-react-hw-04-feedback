import React, {useState} from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Container from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = ( good, neutral, bad ) => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback(good, neutral, bad);

  const countPositiveFeedbackPercentage = ( good, neutral, bad ) => {
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      
      default:
        break;
    }
  };

  const positivePercentage = countPositiveFeedbackPercentage(good, neutral, bad);

  return (
    <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
          </Section>
          <Section title="Statistics">
            {total > 0 ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} /> : <Notification message="There is no feedback" />}
          </Section>
    </Container>
  )
};

export default App;
