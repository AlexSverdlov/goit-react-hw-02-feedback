import React from 'react';
import Statistics from './Statistics/Statistics';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div className="CounterControl">
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <div className="CounterView">
          <h2>Statistics</h2>
          <Statistics good={this.state.good} />
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:{this.countTotalFeedback()}</p>
          <p>Positive feedback:{this.countPositiveFeedbackPercentage()}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
