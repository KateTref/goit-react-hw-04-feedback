import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
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

  render() {
    return (
      <>
        <p className={css.text}>Please leave feedback</p>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
      </>
    );
  }
}

export default Statistics;
