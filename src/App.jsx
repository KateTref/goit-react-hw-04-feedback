import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [persentage, setPersentage] = useState(0);

  const handleChangeGood = () => {
    setGood(prevState => prevState + 1);
  };

  const handleChangeNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleChangeBad = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPersentage(Math.round((good / total) * 100 || 0));
  }, [good, total]);

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveGoodFeedback={handleChangeGood}
          onLeaveNeutralFeedback={handleChangeNeutral}
          onLeaveBadFeedback={handleChangeBad}
        />
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={persentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
