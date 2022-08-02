import { Component } from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    return feedbackValues.reduce((acc, value) => {
      acc += value;
      return acc;
    }
    )
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback = this.state.good;
    const totalFeedback = this.countTotalFeedback();

    if (positiveFeedback) {
      const positiveFeedbackPercentage = Math.round((positiveFeedback * 100) / totalFeedback);
      return positiveFeedbackPercentage;
    } else {
      return 0;
    }
  }

  onLeaveFeedback = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback} />

          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              feedbackType={this.state}
              total={this.countTotalFeedback()}
              positivePersantage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    )
  }
}

