import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Container from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  onLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);
    return(
  <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification message="There is no feedback" />}
        </Section>
    
    
  </Container>
  )
  }
};

export default App;
