import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => goodFeedback()}>
        Good
      </button>
      <button type="button" onClick={() => neutralFeedback()}>
        Neutral
      </button>
      <button type="button" onClick={() => badFeedback()}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  goodFeedback: PropTypes.func.isRequired,
  neutralFeedback: PropTypes.func.isRequired,
  badFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
