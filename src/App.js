import { Component } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

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

  onLeaveFeedback = (e) => {
    const buttonName = e.currentTarget.textContent;

    if (buttonName === 'good') {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        }
      })
    }

    if (buttonName === 'neutral') {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        }
      })
    }

    if (buttonName === 'bad') {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        }
      })
    }
  }

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
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

