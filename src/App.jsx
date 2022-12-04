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
  onLeaveFeedback = option => {
    this.setState(previousState => ({
      [option]: previousState[option] + 1,
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
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
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
      </div>
    );
  }
}

export default App;
