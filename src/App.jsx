import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(previousState => ({
      good: previousState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(previousState => ({
      neutral: previousState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(previousState => ({
      bad: previousState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesOfFeedback = Object.values(this.state);
    let total = 0;
    valuesOfFeedback.map(elem => (total += elem));
    return total;
  };

  PersentagePositiveFeedback = () => {
    let persentageOfGood = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    if (!persentageOfGood) {
      return '0';
    } else {
      return persentageOfGood;
    }
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodFeedback={this.handleIncrementGood}
          neutralFeedback={this.handleIncrementNeutral}
          badFeedback={this.handleIncrementBad}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.PersentagePositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;
